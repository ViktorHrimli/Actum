import styles from "./Description.module.scss";
import { descriptionEnums } from "./libs/enums";

export default function Descrition({ type, title, description}) {
  const { line, background, gradient, text } = descriptionEnums[type];
  return (
    <section className={styles[background]}>
      <div className={styles.container}>
        <div className={styles[gradient]}></div>
        <div className={styles.container_text}>
          <div className={styles[line]}></div>
          <div className={styles.container_title}>
            <p className={styles[text]}>{description}</p>
          </div>
          <div className={styles[line]}></div>
        </div>
      </div>
    </section>
  );
}
