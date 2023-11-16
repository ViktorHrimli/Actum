import Image from "next/image";

import styles from "./Card.module.scss";

import { enumsColor } from "./libs/enumsColor";

export default function Card({ name, photo, date, body, type }) {
  const { color } = enumsColor[type];

  return (
    <li key={name} className={styles.conteiner}>
      <div className={styles.wrapper_image}>
        <Image
          src={photo}
          alt="Person"
          fill
          loading="eager"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <p className={`${styles.text_name} ${styles[color]}`}>{name}</p>

    <div className={styles.box_text}>
      <p className={styles.text}>{body}</p>
      <span className={`${styles.date} ${styles[color]}`}>{date}</span>
    </div>
        
    </li>
  );
}
