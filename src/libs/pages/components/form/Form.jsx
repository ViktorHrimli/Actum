"use client";
import { useForm } from "react-hook-form";

import LeftBar from "@/libs/components/left_bar_text/LeftBar";

import styles from "./Form.module.scss";

export default function Form({ type }) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {};

  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <LeftBar text={"контактна форма"} type={type} />
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
                className={styles.input}
                id="name"
                type="text"
                {...register("name", { required: true })}
                placeholder="Ім'я"
              />
              <input
                className={styles.input}
                id="surname"
                type="text"
                placeholder="Прізвище"
                {...register("surname", { required: true })}
              />
            </div>
          </div>

          <div className={styles.wrapper_name}>
            <label htmlFor="textarea" className={styles.lable}>
              Ваше питання
            </label>
            <div className={styles.conteiner_name}>
              <textarea
                className={styles.textarea}
                id="textarea"
                {...register("textarea", { required: true })}
                placeholder="Будь ласка, напишіть ваше питання. Від якості переданої інформації буде залежати і якість відповіді експерта."
              />
            </div>
          </div>

          <div className={styles.wrapper_name}>
            <label htmlFor="phone" className={styles.lable}>
              Номер телефону
            </label>
            <div className={styles.conteiner_name}>
              <input
                className={styles.input}
                type="tel"
                id="phone"
                {...register("phone", { required: true })}
                placeholder="Вкажіть номер, на якому встановлений Вайбер або Телеграм."
              />
            </div>
          </div>

          <div className={styles.wrapper_name}>
            <label htmlFor="message" className={styles.lable}>
              Месенджер
            </label>
            <div className={styles.conteiner_name}>
              <input
                className={styles.input}
                type="text"
                id="message"
                {...register("message", { required: true })}
                placeholder="Оберіть спосіб отримання відповіді."
              />
            </div>
          </div>

          <div className={styles.wrapper_name}>
            <label htmlFor="radio" className={styles.lable}>
              Месенджер
            </label>
            <div className={styles.conteiner_name}>
              <input
                type="radio"
                id="radio"
                {...register("radio", { required: true })}
                placeholder="Оберіть спосіб отримання відповіді."
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
