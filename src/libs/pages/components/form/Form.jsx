"use client";
import { useForm } from "react-hook-form";
import { useState } from "@/libs/hooks/hooks";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPhone,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faViber, faTelegram } from "@fortawesome/free-brands-svg-icons";

import LeftBar from "@/libs/components/left_bar_text/LeftBar";
import Button from "@/libs/components/button/Button";

import styles from "./Form.module.scss";

export default function Form({ type }) {
  const [selectValue, setSelectValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleCLickOnSelect = (event) => {
    setSelectValue(event.currentTarget.innerText);
    setIsOpen(false);
  };

  const handleToggleSelect = () => {
    setIsOpen(!isOpen);
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
  };

  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <div className={styles.wrapper_title}>
          <LeftBar text={"контактна форма"} type={type} />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          autoFocus={false}
          className={styles.form}
        >
          <div className={styles.wrapper_name}>
            <label htmlFor="name" className={styles.lable}>
              Вкажіть ім'я і прізвище
            </label>

            <div className={styles.conteiner_name}>
              <input
                className={
                  errors.name
                    ? { ...styles.input, ...styles.error_input }
                    : styles.input
                }
                id="name"
                type="text"
                {...register("name", {
                  required: true,
                })}
                placeholder="Ім'я"
              />
              {errors.name && (
                <div className={styles.error_name}>
                  <p style={{ color: "#000" }}>Заповніть Ім'я</p>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className={styles.error_icon}
                  />
                </div>
              )}

              <input
                className={
                  errors.surname
                    ? `${styles.input} ${styles.error_input}`
                    : styles.input
                }
                id="surname"
                type="text"
                placeholder="Прізвище"
                {...register("surname", { required: true })}
              />

              {errors.surname && (
                <div className={styles.error_surname}>
                  <p style={{ color: "#000" }}>Заповніть прізвище</p>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className={styles.error_icon}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={styles.wrapper_name}>
            <label htmlFor="textarea" className={styles.lable}>
              Ваше питання
            </label>
            <div className={styles.conteiner_name}>
              <textarea
                className={
                  errors.textarea
                    ? `${styles.textarea} ${styles.error_input}`
                    : styles.textarea
                }
                id="textarea"
                {...register("textarea", { required: true })}
                placeholder="Будь ласка, напишіть ваше питання. Від якості переданої інформації буде залежати і якість відповіді експерта."
              />

              {errors.textarea && (
                <div className={styles.error_textarea}>
                  <p style={{ color: "#000" }}>Опишіть своє питання</p>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className={styles.error_icon}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={styles.wrapper_name}>
            <label htmlFor="phone" className={styles.lable}>
              Номер телефону
            </label>
            <div className={styles.conteiner_name}>
              <input
                className={
                  errors.phone
                    ? `${styles.input} ${styles.second_input} ${styles.error_input}`
                    : `${styles.input} ${styles.second_input}`
                }
                type="tel"
                id="phone"
                {...register("phone", { required: true })}
                placeholder="Вкажіть номер, на якому встановлений Вайбер або Телеграм."
              />
              {errors.phone && (
                <div className={styles.error_phone}>
                  <p style={{ color: "#000" }}>Заповніть номер телефону</p>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className={styles.error_icon}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={styles.wrapper_name}>
            <label htmlFor="message" className={styles.lable}>
              Месенджер
            </label>
            <div className={styles.conteiner_name}>
              <input
                onClick={handleToggleSelect}
                value={selectValue}
                readOnly
                {...register("message", { required: true })}
                className={
                  errors.message
                    ? `${styles.input} ${styles.second_input} ${styles.select} ${styles.error_input}`
                    : `${styles.input} ${styles.second_input} ${styles.select}`
                }
                placeholder="Оберіть спосіб отримання відповіді"
              />

              {errors.message && (
                <div className={styles.error_message}>
                  <p style={{ color: "#000" }}>Виберіть мессенджер</p>
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
                <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
              </motion.div>
              {isOpen && (
                <motion.div className={styles.options_conteiner}>
                  <div onClick={handleCLickOnSelect} className={styles.options}>
                    Viber
                    <FontAwesomeIcon
                      icon={faViber}
                      className={styles.options_icon}
                    />
                  </div>
                  <div onClick={handleCLickOnSelect} className={styles.options}>
                    Telegram
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className={styles.options_icon}
                    />
                  </div>
                  <div onClick={handleCLickOnSelect} className={styles.options}>
                    Телефон
                    <FontAwesomeIcon
                      icon={faPhone}
                      className={styles.options_icon}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div className={styles.wrapper_name}>
            <label htmlFor="services" className={styles.lable}>
              Оберіть послугу
            </label>
            {errors.services && (
              <div className={styles.error_services}>
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className={styles.error_icon}
                />
              </div>
            )}

            <div className={styles.conteiner_radio_groupe}>
              <div className={styles.conteiner_radio}>
                <label htmlFor="services_first" className={styles.lable_radio}>
                  Консультація Адвоката. Дзвінок або зустріч в офісі (550-950
                  грн.)
                </label>
                <input
                  type="radio"
                  value="Консультація Адвоката. Дзвінок або зустріч в офісі (550-950 грн.)"
                  id="services_first"
                  {...register("services", { required: true })}
                  placeholder="Оберіть спосіб отримання відповіді."
                />
              </div>

              <div className={styles.conteiner_radio}>
                <label htmlFor="services_second" className={styles.lable_radio}>
                  Вирішення питань через суд: розлучення, аліменти, майно,
                  батьківські права, тощо (від 5000 грн.)
                </label>

                <input
                  type="radio"
                  value="Вирішення питань через суд: розлучення, аліменти, майно, батьківські права, тощо (від 5000 грн.)"
                  id="services_second"
                  {...register("services", { required: true })}
                  placeholder="Оберіть спосіб отримання відповіді."
                />
              </div>

              <div className={styles.conteiner_radio}>
                <label htmlFor="services_third" className={styles.lable_radio}>
                  Допомога з документами: написання заяв, позовів, договорів,
                  тощо (від 2000 грн.)
                </label>
                <input
                  type="radio"
                  value="Допомога з документами: написання заяв, позовів, договорів, тощо (від 2000 грн.)"
                  id="services_third"
                  {...register("services", { required: true })}
                  placeholder="Оберіть спосіб отримання відповіді."
                />
              </div>
            </div>
          </div>
          <div className={styles.btn_wrapper}>
            <Button
              type="submit"
              text="надіслати запит"
              style="button_service"
            />
          </div>
        </form>

        <div className={styles.info_block}>
          <p className={styles.text}>
            Заповніть форму для отримання консультації або зв’язку з адвокатом
            або скористайтесь для зв’язку поштою та нашими номерами телефону.
          </p>
          <div className={styles.block_info}>
            <div className={styles.phone_wrapper}>
              <p className={styles.title_info}>Phone:</p>
              <div className={styles.text_wrapper_info}>
                <p className={styles.text}>+38-067-179-72-13</p>
                <p className={styles.text}>+38-050-333-48-97</p>
              </div>
            </div>
            <div className={styles.email_wrapper}>
              <p className={styles.title_info}>Email:</p>
              <p className={styles.text}>info@actum.com.ua</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
