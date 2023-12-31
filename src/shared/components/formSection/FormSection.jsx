import styles from "./FormSection.module.scss";

import LeftBar from "@/shared/components/left_bar_text/LeftBar";
import Form from "@/shared/components/form/Form";

import { borderEnums } from "@/shared/components/form/enumsForm/enumsForm";

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
          <LeftBar text={formData.block_title} type={type} />
        </div>

        <Form type={type} {...formData} />

        <div className={styles.info_block}>
          <p className={styles.text} style={{maxWidth: 350}}>{discriptions}</p>
          <div className={styles.block_info}>
            <div className={styles.phone_wrapper}>
              <p className={`${styles.title_info} ${styles[color_text]}`}>
                Phone:
              </p>
              <div className={styles.text_wrapper_info}>
                <a href={`tel:${phones["KiyvStar"]}`} target="_blank">
                  
                  <p className={`${styles.text} ${"binct-phone-number-2"}`}>{phones["KiyvStar"]}</p>
                </a>
                <a href={`tel:${phones["Vodafone"]}`} target="_blank">
                  <p className={`${styles.text} ${"binct-phone-number-1"}`}>{phones["Vodafone"]}</p>
                </a>
              </div>
            </div>
            <div className={styles.email_wrapper}>
              <p className={`${styles.title_info} ${styles[color_text]}`}>
                Email:
              </p>
              <a target="_blank" href={`mailto:${email}`}>
                <p className={styles.text}>{email}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
