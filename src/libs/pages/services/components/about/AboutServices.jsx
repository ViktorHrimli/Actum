import styles from "./AboutServices.module.scss";
import Items from "./Items";

export default function AboutServices({ locale = "ua", list, title }) {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <div className={styles.about_border_text_conteiner}>
          <span className={styles.borders}></span>
          <p className={styles.text}>{title}</p>
          <span className={styles.borders}></span>
        </div>
        <Items items={list} />
      </div>
    </section>
  );
}
