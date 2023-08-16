"use client";
import { useForm, Controller } from "react-hook-form";
import Select, { StylesConfig } from "react-select";

import LeftBar from "@/libs/components/left_bar_text/LeftBar";

import styles from "./Form.module.scss";
import Countries from "./select/Select";
import { socialMediaEnums } from "./select/libs/enums/enums";

export default function Form({ type }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const colourStyles = {
    // control: () => styles.input,
    // option: (styled, { data, isDisabled, isFocused, isSelected }) => {
    //   return styles.input;
    // },
    input: (styled) => styles.input,
    //  placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
    //  singleValue: ,
  };

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
              {/* <Controller
                name="message"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={socialMediaEnums}
                    defaultInputValue={"Messangers"}
                    defaultMenuIsOpen="adawd"
                    placeholder="Message"
                    styles={colourStyles}
                  />
                )}
              /> */}

              <select
                {...register("message")}
                className={styles.input}
                inputMode="text"
                placeholder="Оберіть спосіб отримання відповіді"
                title="Оберіть спосіб отримання відповіді"
              >
                <option hidden={true}></option>
                <option value="viber">viber</option>
                <option value="telegram">telegram</option>
              </select>
            </div>
          </div>

          <div className={styles.wrapper_name}>
            <label htmlFor="services" className={styles.lable}>
              Оберіть послугу
            </label>
            <div className={styles.conteiner_name}>
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
          <input type="submit" />
        </form>
      </div>
    </section>
  );
}
