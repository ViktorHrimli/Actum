import styles from "./Lawyers.module.scss";

import Items from "./items/Items";

export default function Lawyers({ list, title, desk, button }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.gradient_first}></div>
        <div className={styles.gradient_second}></div>
        <div className={styles.gradient_third}></div>

        <div className={styles.container_text}>
          <div className={styles.line}></div>
          <div className={styles.container_title}>
            <p className={styles.title}>{title}</p>
          </div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.conteiner_list}>
          <Items desk={desk} items={list} button={button} />
        </div>
      </div>
    </section>
  );
}
