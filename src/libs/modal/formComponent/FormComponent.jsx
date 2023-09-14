"use client";

import { useForm } from "react-hook-form";
import { useState } from "@/libs/hooks/hooks";
import { useEffect } from "@/libs/hooks/hooks";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPhone,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import { faViber, faTelegram } from "@fortawesome/free-brands-svg-icons";

import Button from "@/libs/components/button/Button";

import styles from "./FormComponent.module.scss";
import { borderEnums } from "./enumsForm/enumsForm";
import ModalThanks from "@/libs/modal/modalThanks/modalThanks";

const ERROR_MESSAGE = "Заповніть поле!";

export default function FormComponent ({ type, isOpenModal, setIsOpenModal }) {
  const { border, color_text, options_hover, border_check_color, check_color } = borderEnums[type];
  
  const [selectValue, setSelectValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRadio, setIsOpenRadio] = useState(false);


  const [isStep, setIsStep] = useState(false);


  const handleCLickOnSelect = (event) => {
    setSelectValue(event.currentTarget.innerText);
    setIsOpen(false);
  };

  const handleToggleSelect = () => {
    setIsOpen(!isOpen);
  };
  const handleToggleRadio = () => {
    setIsOpenRadio(!isOpenRadio);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsStep(true);
  };

    useEffect(() => {
    const header = document.getElementById("header");
    
    if (isOpenModal) {
      header.style.display = 'none';
    }
    return () => {
      header.style.display = 'flex';
    };
  }, [isOpenModal]);

  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      autoFocus={false}
      className={styles.form}
    >
      <div className={styles.wrapper_name}>
        <label htmlFor="name" className={`${styles.lable} ${styles[color_text]}`}>
          {"Вкажіть ім'я і прізвище"}
        </label>

        <div className={styles.conteiner_name}>
          <div className={styles[border]}>
          <input
            className={
              errors.name
                ? `${styles.input} ${styles.error_input}`
                : styles.input
            }
            id="name"
            type="text"
            {...register("name", {
              required: true,
            })}
            placeholder={errors.name ? ERROR_MESSAGE : "Ім'я"}
            />
          </div>
          {errors.name && (
            <div className={styles.error_name}>
              {/* <p style={{ color: "#000" }}>{"Заповніть Ім'я"}</p> */}
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className={styles.error_icon}
              />
            </div>
          )}
          <div className={styles[border]}>
            <input
              className={
                errors.surname
                  ? `${styles.input} ${styles.error_input}`
                  : styles.input
              }
              id="surname"
              type="text"
              placeholder={errors.surname ? ERROR_MESSAGE : "Прізвище"}
              {...register("surname", { required: true })}
              />
          </div>

          {errors.surname && (
            <div className={styles.error_surname}>
              {/* <p style={{ color: "#000" }}>Заповніть прізвище</p> */}
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className={styles.error_icon}
              />
            </div>
          )}
        </div>
      </div>

      <div className={styles.wrapper_name}>
        <label htmlFor="textarea" className={`${styles.lable} ${styles[color_text]}`}>
          Ваше питання
        </label>
        <div className={styles.conteiner_name}>
          <div className={styles[border]}>
          <textarea
            className={
              errors.textarea
                ? `${styles.textarea} ${styles.error_input}`
                : styles.textarea
            }
            id="textarea"
            {...register("textarea", { required: true })}
            placeholder={
              errors.textarea
                ? ERROR_MESSAGE
                : "Будь ласка, напишіть ваше питання. Від якості переданої інформації буде залежати і якість відповіді експерта."
            }
            />
            </div>

          {errors.textarea && (
            <div className={styles.error_textarea}>
              {/* <p style={{ color: "#000" }}>Опишіть своє питання</p> */}
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className={styles.error_icon}
              />
            </div>
          )}
        </div>
      </div>

      <div className={styles.wrapper_name}>
        <label htmlFor="phone" className={`${styles.lable} ${styles[color_text]}`}>
          Номер телефону
        </label>
        <div className={styles.conteiner_name}>
          <div className={styles[border]}>
          <input
            className={
              errors.phone
                ? `${styles.input} ${styles.second_input} ${styles.error_input}`
                : `${styles.input} ${styles.second_input} ${styles.number_input}`
            }
            type="tel"
            id="phone"
            {...register("phone", { required: true })}
            placeholder={
              errors.phone
                ? ERROR_MESSAGE
                : "Вкажіть номер, на якому встановлений Вайбер або Телеграм."
            }
            />
            </div>
          {errors.phone && (
            <div className={styles.error_phone}>
              {/* <p style={{ color: "#000" }}>Заповніть номер телефону</p> */}
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className={styles.error_icon}
              />
            </div>
          )}
        </div>
      </div>

      <div className={styles.wrapper_name}>
        <label htmlFor="message" className={`${styles.lable} ${styles[color_text]}`}>
          Месенджер
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
              {/* <p style={{ color: "#000" }}>Виберіть мессенджер</p> */}
              <FontAwesomeIcon
                icon={faCircleExclamation}
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
            <FontAwesomeIcon icon={faChevronDown} className={`${styles.icon} ${styles[color_text]}`} />
          </motion.div>
          {isOpen && (
            <motion.div className={styles.options_conteiner}>
                <div onClick={handleCLickOnSelect} className={`${styles.options} ${styles[options_hover]}`}>
                <FontAwesomeIcon
                  icon={faViber}
                  className={styles.options_icon}
                  />
                Viber
              </div>
              <div onClick={handleCLickOnSelect} className={`${styles.options} ${styles[options_hover]}`}>
                <FontAwesomeIcon
                  icon={faTelegram}
                  className={styles.options_icon}
                  />
                Telegram
              </div>
              <div onClick={handleCLickOnSelect} className={`${styles.options} ${styles[options_hover]}`}>
                <FontAwesomeIcon
                  icon={faPhone}
                  className={styles.options_icon}
                  />
                Телефон
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className={styles.wrapper_name}>
        <label htmlFor="services" className={`${styles.lable} ${styles[color_text]}`}>
          Оберіть послугу
        </label>
        {errors.services && (
          <div className={styles.error_services}>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={styles.error_icon_service}
            />
          </div>
        )}
          {/* --------- radio ---------- */}
        
          <motion.div
            animate={{ rotate: isOpenRadio ? "180deg" : "0deg" }}
            transition={{ duration: 0.5 }}
            className={styles.conteiner_icon_radio}
            onClick={handleToggleRadio}
          >
            <FontAwesomeIcon icon={faChevronDown} className={`${styles.icon_radio} ${styles[color_text]}`} />
          </motion.div>
        <div className={isOpenRadio ? styles.conteiner_radio_groupe : styles.conteiner_radio_groupe_hidden}>
          <div className={styles.conteiner_radio}>
            <label htmlFor="services_first" className={styles.lable_radio}>
              Консультація Адвоката. Дзвінок або зустріч в офісі (550-950 грн.)
            </label>
            <div className={`${styles.check_border} ${styles[border_check_color]}`}>
              <div className={styles.check_border_befor}></div>
            <input 
              onClick={handleToggleRadio}
              className={styles.radio_btn}
              type="radio"
              value="Консультація Адвоката. Дзвінок або зустріч в офісі (550-950 грн.)"
              id="services_first"
              {...register("services", { required: true })}
              placeholder="Оберіть спосіб отримання відповіді."
              />
              <label htmlFor="services_first" className={styles[check_color]}>
              </label>
            </div>
          </div>

          <div className={styles.conteiner_radio}>
            <label htmlFor="services_second" className={styles.lable_radio}>
              Вирішення питань через суд: розлучення, аліменти, майно,
              батьківські права, тощо (від 5000 грн.)
            </label>
            <div className={`${styles.check_border} ${styles[border_check_color]}`}>
              <div className={styles.check_border_befor}></div>
            <input
              onClick={handleToggleRadio}
              className={styles.radio_btn}
              type="radio"
              value="Вирішення питань через суд: розлучення, аліменти, майно, батьківські права, тощо (від 5000 грн.)"
              id="services_second"
              {...register("services", { required: true })}
              placeholder="Оберіть спосіб отримання відповіді."
              />
              <label htmlFor="services_second" className={styles[check_color]}>
              </label>
            </div>

          </div>

          <div className={styles.conteiner_radio}>
            <label htmlFor="services_third" className={styles.lable_radio}>
              Допомога з документами: написання заяв, позовів, договорів, тощо
              (від 2000 грн.)
            </label>
            <div className={`${styles.check_border} ${styles[border_check_color]}`}>
              <div className={styles.check_border_befor}></div>
            <input
              onClick={handleToggleRadio}
              className={styles.radio_btn}
              type="radio"
              value="Допомога з документами: написання заяв, позовів, договорів, тощо (від 2000 грн.)"
              id="services_third"
              {...register("services", { required: true })}
              placeholder="Оберіть спосіб отримання відповіді."
              />
              <label htmlFor="services_third" className={styles[check_color]}>
              </label>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.btn_wrapper}>
        <Button type="submit" text="надіслати запит" style="button_service" typeStyle={type}/>
      </div>
      </form>
      {isStep && <ModalThanks type={type} setIsStep={setIsStep} setIsOpenModal={setIsOpenModal} />}
  </>
  );
}
