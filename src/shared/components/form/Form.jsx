"use client";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect, usePathname } from "@/shared/hooks/hooks";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import IMask from "react-input-mask";

import Button from "@/libs/components/button/Button";
import ModalThanks from "@/libs/modal/modalThanks/modalThanks";
import CountyCode from "./country_code/CountyCode";

import { borderEnums } from "./enumsForm/enumsForm";
import { iconEnum, themsColor, staticEnums } from "@/shared/enums/enum";

import { storage, coockiesManager } from "@/shared/helpers/helpers";

import styles from "./Form.module.scss";

const ERROR_MESSAGE = "Заповніть поле!";

export default function Form({
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
  const [phone, setPhone] = useState("38");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [client, setClient] = useState("");
  const [question, setQuestion] = useState("");
  const [selectServices, setSelectServices] = useState("");

  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isStep, setIsStep] = useState(false);

  const pathName = usePathname();
  const pagename = pathName === "/" ? window.location.href : pathName;

  const { border, color_text, options_hover, border_check_color, check_color } =
    borderEnums[type];

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

  const sendFormByError = () => {
    var makeObjParams = coockiesManager.getCoockies();

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

    window.dataLayer.push({ event: "formissenterror" });
    axios.post("/api/form", data);
  };

  const handleCLickOnSelect = (event) => {
    setSelectValue(event.currentTarget.innerText);
    setValue("message", event.currentTarget.innerText, { shouldTouch: true });
    setIsOpen(false);
  };

  const handleToggleSelect = () => {
    setIsOpen(!isOpen);
    setIsOpenCountry(false);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    setPhoneNumber(numericValue);
  };

  const onSubmit = () => {
    if (phoneNumber.length >= 12 && phoneNumber.length <= 13) {
      var theCoockieObj = coockiesManager.getCoockies();

      const bodySubmitSuccsses = {
        ...theCoockieObj,
        telephone: phoneNumber,
        type: "form",
        formType: "formPage",
        client,
        pagename,
        question,
        service: selectServices,
        messenger: selectValue,
      };

      const data = storage.sendObjData(bodySubmitSuccsses);

      setIsLoading(true);
      window.dataLayer.push({ event: "formissent" });

      axios.post("/api/send", data);
      axios
        .post("/api/form", data)
        .catch(() => setTimeout(() => axios.post("/api/form"), data), 10000);

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
      // case Boolean(errors.name):
      //   return sendFormByError();

      // case Boolean(errors.textarea):
      //   return sendFormByError();

      case Boolean(errors.phone):
        return sendFormByError();

      // case Boolean(errors.message):
      //   return sendFormByError();

      case Boolean(errors.services):
        return sendFormByError();

      default:
        return;
    }
  }, [
    // errors.name,
    // errors.textarea,
    errors.phone,
    // errors.message,
    errors.services,
  ]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        autoCorrect="yes"
        autoFocus={true}
      >
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
                // className={
                //   errors.name
                //     ? `${styles.input} ${styles.error_input}`
                //     : styles.input
                // }
                className={styles.input}
                id="name"
                type="text"
                {...register("name", {
                  onChange: (event) => setClient(event.target.value),
                  // required: true,
                  // minLength: 2,
                })}
                // placeholder={
                //   errors.name ? ERROR_MESSAGE : "Вкажіть ім'я і прізвище"
                // }
                placeholder="Вкажіть ім'я і прізвище"
              />
            </div>
            {/* {errors.name && (
              <div className={styles.error_name}>
                <FontAwesomeIcon
                  icon={iconEnum.warningIcon}
                  className={styles.error_icon}
                />
              </div>
            )} */}
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
                className={styles.textarea}
                // className={
                //   errors.textarea
                //     ? `${styles.textarea} ${styles.error_input}`
                //     : styles.textarea
                // }
                id="textarea"
                {...register("textarea", {
                  onChange: (event) => setQuestion(event.currentTarget.value),
                  // required: true,
                  // minLength: 3,
                })}
                placeholder="Будь ласка, напишіть ваше питання. Від якості переданої інформації буде залежати і якість відповіді експерта."
                // placeholder={
                //   errors.textarea
                //     ? ERROR_MESSAGE
                //     : "Будь ласка, напишіть ваше питання. Від якості переданої інформації буде залежати і якість відповіді експерта."
                // }
              />
            </div>

            {/* {errors.textarea && (
              <div className={styles.error_textarea}>
                <FontAwesomeIcon
                  icon={iconEnum.warningIcon}
                  className={styles.error_icon}
                />
              </div>
            )} */}
          </div>
        </div>

        <div className={styles.wrapper_name}>
          <label
            htmlFor="phone"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            {/* Номер телефону */}
            {phonesText + " *"}
          </label>
          <div className={styles.conteiner_name}>
            <CountyCode
              setPhoneNumber={setPhoneNumber}
              resetField={resetField}
              color_text={color_text}
              setPhone={setPhone}
              isOpenCountry={isOpenCountry}
              setIsOpenCountry={setIsOpenCountry}
              setIsOpen={setIsOpen}
              phone={phone}
              border={border}
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
                    mask={`+${phone} (999) 999 99 99 ${
                      phone === "38" ? "" : "99"
                    }`}
                    maskChar={" "}
                    type="text"
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
            {/* {errors.phone && (
              <div className={styles.error_phone_icon}>
                <FontAwesomeIcon
                  icon={iconEnum.warningIcon}
                  className={styles.error_icon}
                />
              </div>
            )} */}
          </div>
        </div>

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
                translate="yes"
                type="search"
                name="message"
                readOnly
                {...register("message", {
                  // required: true,
                })}
                className={`${styles.input} ${styles.second_input} ${styles.select}`}
                // className={
                //   errors.message && !selectValue
                //     ? `${styles.input} ${styles.second_input} ${styles.select} ${styles.error_input}`
                //     : `${styles.input} ${styles.second_input} ${styles.select}`
                // }
                placeholder="Оберіть спосіб отримання відповіді"
                // placeholder={
                //   errors.message
                //     ? "Виберіть мессенджер!"
                //     : "Оберіть спосіб отримання відповіді"
                // }
              />
            </div>

            {/* {errors.message && !selectValue && (
              <div className={styles.error_message}>
                <FontAwesomeIcon
                  icon={iconEnum.warningIcon}
                  className={styles.error_icon}
                />
              </div>
            )} */}
            <motion.div
              animate={{ rotate: isOpen ? "180deg" : "0deg" }}
              transition={{ duration: 0.5 }}
              className={styles.conteiner_icon}
              onClick={handleToggleSelect}
            >
              <FontAwesomeIcon
                icon={iconEnum.arrowOpen}
                className={`${styles.icon} ${styles[color_text]}`}
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

        <div className={styles.wrapper_name}
            style={errors.services ? {
                border: "2px solid #661135",
                borderRadius: "4px",
                padding: "4px",
                background: "#66113561"
                }:{}}
            >
          <label
            htmlFor="services"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            {services+ " *"}
          </label>
          {/* {errors.services && (
            <div className={styles.error_services}>
              <FontAwesomeIcon
                icon={iconEnum.warningIcon}
                className={styles.error_icon_service}
              />
            </div>
          )} */}
          {/* --------- radio ---------- */}
          <div className={styles.conteiner_radio_groupe}>
            {services_list.map((item, id) => {
              return (
                <div className={styles.conteiner_radio} key={id}>
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
            })}
          </div>
        </div>

        <div className={styles.btn_wrapper}>
          {isLoading && (
            <div className={styles.loader_container}>
              <RotatingLines
                strokeColor={themsColor[type]["fill"]}
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
          type={type}
          setIsStep={setIsStep}
          setIsOpenModal={setIsOpenModal}
          styleEnums={staticEnums}
        />
      )}
    </>
  );
}
