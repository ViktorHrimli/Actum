"use client";
import IMask from "react-input-mask";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";

import { useForm, Controller } from "react-hook-form";
import {
  useState,
  useEffect,
  useSearchParams,
  usePathname,
} from "@/shared/hooks/hooks";

import CountyCode from "@/shared/components/form/country_code/CountyCode";
import ModalThanks from "@/libs/modal/modalThanks/modalThanks";
import Button from "@/libs/components/button/Button";

import { iconEnum, colorEnums, bodySend } from "@/shared/enums/enum";
import { borderEnums } from "./enumsForm/enumsForm";

import { storage } from "@/shared/helpers/sessionStorageManager";

import styles from "./FormComponent.module.scss";

const ERROR_MESSAGE = "Заповніть поле!";

export default function FormComponent({
  type,
  isOpenModal,
  setIsOpenModal,
  questions,
  name,
  button,
  phone: phonesText,
  messenger,
  services,
  messenger_list,
  services_list,
}) {
  const [selectValue, setSelectValue] = useState("");
  const [selectServices, setSelectServices] = useState(" ");

  const [phone, setPhone] = useState("38");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [client, setClient] = useState("");
  const [question, setQuestion] = useState("");

  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenRadio, setIsOpenRadio] = useState(false);
  const [isStep, setIsStep] = useState(false);
  const [isStyleModalForm, setIsStyleModalForm] = useState("family");

  const pathName = usePathname();
  const searcParams = useSearchParams();
  const pagename = pathName === "/" ? window.location.href : pathName;

  const {
    border,
    color_text,
    options_hover,
    border_check_color,
    check_color,
    fill,
  } = borderEnums[isStyleModalForm];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    resetField,
    setError,

    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    reValidateMode: "onChange",
  });

  const handleCLickOnSelect = (event) => {
    setSelectValue(event.currentTarget.innerText);
    setValue("message", event.currentTarget.innerText, { shouldTouch: true });
    setIsOpen(false);
  };

  const handleToggleSelect = () => {
    setIsOpen(!isOpen);
    setIsOpenRadio(false);
    setIsOpenCountry(false);
  };

  const handleClickOnRadio = (event) => {
    setSelectServices(event.currentTarget.innerText);
    setValue("services", event.currentTarget.innerText, { shouldTouch: true });
    setIsOpenRadio(false);
  };

  const handleToggleRadio = () => {
    setIsOpenRadio(!isOpenRadio);
    setIsOpenCountry(false);
    setIsOpen(false);
  };

  const handleToggleCountry = () => {
    setIsOpenRadio(false);
    setIsOpen(false);
    setIsOpenCountry(!isOpenCountry);
  };

  const sendFormByError = () => {
    const makeObjParams = storage.getInfo(searcParams);

    const errorObj = {
      ...makeObjParams,
      errorcond: true,
      type: "form",
      telephone: phoneNumber,
      client,
      pagename,
      question,
      service: selectServices,
      messenger: selectValue,
    };

    const data = storage.sendObjData(errorObj);

    axios.post("/api/form", data);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    setPhoneNumber(numericValue);
  };

  const onSubmit = (data) => {
    if (phoneNumber.length >= 12) {
      const makeObjParams = storage.getInfo(searcParams);

      const bodySubmitSuccsses = {
        ...makeObjParams,
        telephone: phoneNumber,
        type: "form",
        client,
        pagename,
        question,
        service: selectServices,
        messenger: selectValue,
      };

      const data = storage.sendObjData(bodySubmitSuccsses);

      window.dataLayer.push({ event: "formissentmodal" });

      setIsLoading(true);
      // SEND
      axios.post("/api/send", data);
      axios
        .post("/api/form", data)
        .catch(() => setTimeout(() => axios.post("/api/form"), data), 10000);

      // TIMEOUT THANKS
      setTimeout(() => {
        setIsLoading(false);
        setIsStep(true);
        reset();
        setSelectValue("");
      }, 1000);
    } else {
      setError(
        "phone",
        { message: "Перевірте номер телефону!", type: "minLength" },
        { shouldFocus: false }
      );
    }
  };

  useEffect(() => {
    if (borderEnums[type]) {
      setIsStyleModalForm(type);
    } else {
      setIsStyleModalForm("other");
    }
  }, [type]);

  useEffect(() => {
    const header = document.getElementById("header");

    if (isOpenModal) {
      header.style.display = "none";
    }
    return () => {
      header.style.display = "flex";
    };
  }, [isOpenModal]);

  useEffect(() => {
    switch (true) {
      case Boolean(errors.name):
        return sendFormByError();

      case Boolean(errors.textarea):
        return sendFormByError();

      case Boolean(errors.phone):
        return sendFormByError();

      case Boolean(errors.message):
        return sendFormByError();

      case Boolean(errors.services):
        return sendFormByError();

      default:
        return;
    }
  }, [
    errors.name,
    errors.textarea,
    errors.phone,
    errors.message,
    errors.services,
  ]);

  // console.log(selectServices);
  console.log(selectValue);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.wrapper_name}>
          <label
            htmlFor="name"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            {name}
          </label>

          <div className={styles.conteiner_name}>
            <div className={styles[border]}>
              <input
                onClick={() => setIsOpenCountry(false)}
                className={
                  errors.name
                    ? `${styles.input} ${styles.error_input}`
                    : styles.input
                }
                id="name"
                type="text"
                {...register("name", {
                  required: true,
                  onChange: (event) => setClient(event.target.value),
                })}
                placeholder={errors.name ? ERROR_MESSAGE : name}
              />
            </div>
            {errors.name && (
              <div className={styles.error_name}>
                <FontAwesomeIcon
                  icon={iconEnum["warningIcon"]}
                  className={styles.error_icon}
                />
              </div>
            )}
          </div>
        </div>

        <div className={styles.wrapper_name}>
          <label
            htmlFor="textarea"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            {questions}
          </label>
          <div className={styles.conteiner_name}>
            <div className={styles[border]}>
              <textarea
                onClick={() => setIsOpenCountry(false)}
                className={
                  errors.textarea
                    ? `${styles.textarea} ${styles.error_input}`
                    : styles.textarea
                }
                id="textarea"
                {...register("textarea", {
                  required: true,
                  onChange: (event) => setQuestion(event.currentTarget.value),
                })}
                placeholder={
                  errors.textarea
                    ? ERROR_MESSAGE
                    : "Будь ласка, напишіть ваше питання. Від якості переданої інформації буде залежати і якість відповіді фахівця."
                }
              />
            </div>

            {errors.textarea && (
              <div className={styles.error_textarea}>
                <FontAwesomeIcon
                  icon={iconEnum["warningIcon"]}
                  className={styles.error_icon}
                />
              </div>
            )}
          </div>
        </div>

        <div className={styles.wrapper_name}>
          <label
            htmlFor="phone"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            {/* Номер телефону */}
            {phonesText}
          </label>
          <div className={styles.conteiner_name}>
            <CountyCode
              setPhoneNumber={setPhoneNumber}
              resetField={resetField}
              setPhone={setPhone}
              color_text={color_text}
              isOpenCountry={isOpenCountry}
              setIsOpenCountry={setIsOpenCountry}
              handleToggleCountry={handleToggleCountry}
              phone={phone}
              border={border}
              setIsOpen={setIsOpen}
              isModalOpen={isOpenModal}
            />

            <div className={styles[border]}>
              <Controller
                name="phone"
                control={control}
                defaultValue={""}
                rules={{
                  value: phoneNumber,
                  required: { value: true, message: "Заповніть поле!" },
                  minLength: {
                    value: 12,
                    message: "Перевірте номер телефону!",
                  },
                  onChange: handleInputChange,
                }}
                placeholder={errors.phone ? ERROR_MESSAGE : ""}
                render={({ field }) => (
                  <IMask
                    mask={`+${phone} (999) 999 99 99`}
                    maskChar={" "}
                    alwaysShowMask={true}
                    {...field}
                  >
                    {(inputProps) => (
                      <input
                        className={
                          errors.phone
                            ? `${styles.input} ${styles.two_input} ${styles.error_input}`
                            : `${styles.input} ${styles.two_input} ${styles.number_input}`
                        }
                        {...inputProps}
                      />
                    )}
                  </IMask>
                )}
              />
            </div>
            {errors.phone && (
              <div className={styles.error_phone}>
                <p>{errors.phone.message}</p>
              </div>
            )}
            {errors.phone && (
              <div className={styles.error_phone_icon}>
                <FontAwesomeIcon
                  icon={iconEnum["warningIcon"]}
                  className={styles.error_icon}
                />
              </div>
            )}
          </div>
        </div>
        {/* messenger */}
        <div className={styles.wrapper_name}>
          <label
            htmlFor="message"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            {messenger}
          </label>
          <div className={styles.conteiner_name}>
            <div className={styles[border]}>
              <input
                onClick={handleToggleSelect}
                value={selectValue}
                readOnly
                {...register("message", { required: true })}
                className={
                  errors.message && !selectValue
                    ? `${styles.input} ${styles.second_input} ${styles.select} ${styles.error_input}`
                    : `${styles.input} ${styles.second_input} ${styles.select}`
                }
                placeholder={
                  errors.message
                    ? "Виберіть мессенджер!"
                    : "Оберіть спосіб отримання відповіді"
                }
              />
            </div>

            {errors.message && !selectValue && (
              <div className={styles.error_message}>
                <FontAwesomeIcon
                  icon={iconEnum["warningIcon"]}
                  className={styles.error_icon}
                />
              </div>
            )}
            <motion.div
              animate={{ rotate: isOpen ? "180deg" : "0deg" }}
              transition={{ duration: 0.5 }}
              className={styles.conteiner_icon}
              onClick={handleToggleSelect}
            >
              <FontAwesomeIcon
                icon={iconEnum["arrowOpen"]}
                className={`${styles.icon} ${styles[color_text]}`}
                style={errors.message && !selectValue ? { color: "#fff" } : {}}
              />
            </motion.div>
            {isOpen && (
              <motion.div className={styles.options_conteiner}>
                {messenger_list.map((item, id) => {
                  return (
                    <div
                      onClick={handleCLickOnSelect}
                      className={`${styles.options} ${styles[options_hover]}`}
                      key={id}
                    >
                      <FontAwesomeIcon
                        icon={iconEnum[item["icons"]]}
                        className={styles.options_icon}
                      />
                      {item["text"]}
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>

        {/* --------- radio ---------- */}
        <div
          className={styles.wrapper_name}
          style={{ opacity: "0", zIndex: "-1" }}
        >
          <label
            htmlFor="services"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            {services}
          </label>

          {errors.services && !selectServices && (
            <div className={styles.error_services}>
              <FontAwesomeIcon
                icon={iconEnum["warningIcon"]}
                className={styles.error_icon_service}
              />
            </div>
          )}

          <div className={styles.conteiner_name}>
            <div className={styles[border]}>
              <input
                onClick={handleToggleRadio}
                value={selectServices}
                readOnly
                {...register("services", { required: true })}
                className={
                  errors.services && !selectServices
                    ? `${styles.input} ${styles.second_input} ${styles.select} ${styles.error_input}`
                    : `${styles.input} ${styles.second_input} ${styles.select}`
                }
                placeholder={
                  errors.services ? "Виберіть питання!" : "Виберіть питання"
                }
              />
            </div>

            <motion.div
              animate={{ rotate: isOpenRadio ? "180deg" : "0deg" }}
              transition={{ duration: 0.5 }}
              className={styles.conteiner_icon}
              onClick={handleToggleRadio}
            >
              <FontAwesomeIcon
                icon={iconEnum["arrowOpen"]}
                className={`${styles.icon} ${styles[color_text]}`}
                style={
                  errors.services && !selectServices ? { color: "#fff" } : {}
                }
              />
            </motion.div>
            {isOpenRadio && (
              <motion.div className={styles.options_conteiner}>
                {services_list.map((item, id) => {
                  return (
                    <div
                      onClick={handleClickOnRadio}
                      className={`${styles.options} ${styles[options_hover]}`}
                      key={id}
                    >
                      <FontAwesomeIcon
                        icon={iconEnum[item["icons"]]}
                        className={styles.options_icon}
                      />
                      {item["text"]}
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
          {/* --------- radio old ---------- */}

          {/* </div> */}
          {/* <motion.div
            animate={{ rotate: isOpenRadio ? "180deg" : "0deg" }}
            transition={{ duration: 0.5 }}
            className={styles.conteiner_icon_radio}
            onClick={handleToggleRadio}
          >
            <FontAwesomeIcon
              icon={iconEnum["arrowOpen"]}
              className={`${styles.icon_radio} ${styles[color_text]}`}
            />
          </motion.div> */}
          {/* <div
            className={
              isOpenRadio
                ? styles.conteiner_radio_groupe
                : styles.conteiner_radio_groupe_hidden
            }
          > */}

          {/* {services_list.map((item, id) => {
              return (
                <div
                  className={`${styles.conteiner_radio} ${styles[border]}`}
                  key={id}
                >
                  <label htmlFor={item["text"]} className={styles.lable_radio}>
                    {item["text"]}
                  </label>
                  <div
                    className={`${styles.check_border} ${styles[border_check_color]}`}
                  >
                    <div className={styles.check_border_befor}></div>
                    <input
                      className={styles.radio_btn}
                      type="radio"
                      value={item["text"]}
                      id={item["text"]}
                      {...register("services", {
                        required: true,
                        onBlur: (event) =>
                          setSelectServices(event.target.value),
                      })}
                      placeholder="Оберіть спосіб отримання відповіді."
                    />
                    <label
                      htmlFor={item["text"]}
                      className={styles[check_color]}
                    ></label>
                  </div>
                </div>
              );
            })} */}
        </div>
        <div className={styles.btn_wrapper}>
          {isLoading && (
            <div className={styles.loader_container}>
              <RotatingLines
                strokeColor={fill}
                strokeWidth="5"
                animationDuration="0.75"
                className={styles.loader}
                visible={true}
              />
            </div>
          )}
          <Button
            type="submit"
            text={button["text"]}
            style="button_service"
            typeStyle={type}
          />
        </div>
      </form>
      {isStep && (
        <ModalThanks
          type={isStyleModalForm}
          setIsStep={setIsStep}
          setIsOpenModal={setIsOpenModal}
          styleEnums={colorEnums}
        />
      )}
    </>
  );
}
