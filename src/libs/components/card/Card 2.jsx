import Image from "next/image";

import styles from "./Card.module.scss";

export default function Card({ name, photo, date, body }) {
  return (
    <li className={styles.conteiner}>
      <div className={styles.wrapper_image}>
        <Image src={photo} alt="Person" fill loading="lazy" />
      </div>

      <p className={styles.text_name}>{name}</p>
      <p className={styles.text}>{body}</p>

      <span className={styles.date}>{date}</span>
    </li>
  );
}
