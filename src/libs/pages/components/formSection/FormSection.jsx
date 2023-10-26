import styles from "./FormSection.module.scss";

import LeftBar from "@/shared/components/left_bar_text/LeftBar";
import Form from "@/libs/pages/components/form/Form";

import { borderEnums } from "../form/enumsForm/enumsForm";

export default function FormSection({
  type,
  formData,
  discriptions,
  email,
  phones,
}) {
  const { color_text } = borderEnums[type];
  return (
    <section className={styles.section} id="form_section" name="form">
      <div className={styles.conteiner}>
        <div className={styles.wrapper_title}>
          <LeftBar text={"контактна форма"} type={type} />
        </div>

        <Form type={type} {...formData} />

        <div className={styles.info_block}>
          <p className={styles.text}>{discriptions}</p>
          <div className={styles.block_info}>
            <div className={styles.phone_wrapper}>
              <p className={`${styles.title_info} ${styles[color_text]}`}>
                Phone:
              </p>
              <div className={styles.text_wrapper_info}>
                <p className={styles.text}>{phones["KiyvStar"]}</p>
                <p className={styles.text}>{phones["Vodafone"]}</p>
              </div>
            </div>
            <div className={styles.email_wrapper}>
              <p className={`${styles.title_info} ${styles[color_text]}`}>
                Email:
              </p>
              <p className={styles.text}>{email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
