import Image from "next/image";
import Link from "next/link";

import styles from "./Card.module.scss";

import { enumsColor } from "./libs/enumsColor";

export default function Card({ name, photo, date, body, type, link }) {
  const { color } = enumsColor[type];

  return (
    <li key={name} className={styles.conteiner}>
      <div className={styles.wrapper_image}>
        <Link href={link} target="_blank">
          <Image
            src={photo}
            alt="Person"
            fill
            loading="eager"
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </div>

      <Link href={link} target="_blank">
        <p className={`${styles.text_name} ${styles[color]}`}>{name}</p>
      </Link>

      <div className={styles.box_text}>
        <p className={styles.text}>{body}</p>
        <Link href={link} target="_blank">
          <span className={`${styles.date} ${styles[color]}`}>{date}</span>
        </Link>
      </div>
    </li>
  );
}
