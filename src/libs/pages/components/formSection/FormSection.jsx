import styles from "./FormSection.module.scss";

import LeftBar from "@/shared/components/left_bar_text/LeftBar";
import Form from "@/libs/pages/components/form/Form";

import { borderEnums } from "../form/enumsForm/enumsForm";

export default function FormSection({ type }) {
  const { color_text } = borderEnums[type];
  return (
    <section className={styles.section} id="form_section" name="form">
      <div className={styles.conteiner}>
        <div className={styles.wrapper_title}>
          <LeftBar text={"контактна форма"} type={type} />
        </div>

        <Form type={type} />

        <div className={styles.info_block}>
          <p className={styles.text}>
            Заповніть форму для отримання консультації або зв’язку з адвокатом
            або скористайтесь для зв’язку поштою та нашими номерами телефону.
          </p>
          <div className={styles.block_info}>
            <div className={styles.phone_wrapper}>
              <p className={`${styles.title_info} ${styles[color_text]}`}>
                Phone:
              </p>
              <div className={styles.text_wrapper_info}>
                <p className={styles.text}>+38-067-179-72-13</p>
                <p className={styles.text}>+38-050-333-48-97</p>
              </div>
            </div>
            <div className={styles.email_wrapper}>
              <p className={`${styles.title_info} ${styles[color_text]}`}>
                Email:
              </p>
              <p className={styles.text}>info@actum.com.ua</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
