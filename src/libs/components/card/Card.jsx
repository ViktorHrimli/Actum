import Image from "next/image";

import styles from "./Card.module.scss";
import { enumsColor } from "./libs/enumsColor";

export default function Card({ name, photo, date, body, type }) {
  const { color } = enumsColor[type];

  return (
    <li key={name} className={styles.conteiner}>
      <div className={styles.wrapper_image}>
        <Image src={photo} alt="Person" fill loading="lazy" />
      </div>

      <p className={`${styles.text_name} ${styles[color]}`}>{name}</p>
      <p className={styles.text}>{body}</p>

      <span className={`${styles.date} ${styles[color]}`}>{date}</span>
    </li>
  );
}
