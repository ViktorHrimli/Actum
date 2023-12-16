import Image from "next/image";
import Link from "next/link";

import styles from "./Card.module.scss";

import { enumsColor } from "./libs/enumsColor";

export default function Card({ name, photo, date, body, type, link }) {
  const { color } = enumsColor[type];

  return (
    <li key={name} className={styles.list_conteiner}>
      <div className={styles.conteiner}>
        <Link href={link ? link : ""} target="_blank">
          <div className={styles.wrapper_image}>
            <Image
              src={photo}
              alt="Person"
              fill
              loading="eager"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </Link>

        <Link
          href={link ? link : ""}
          target="_blank"
          className={styles.text_name}
        >
          <p className={styles[color]}>{name}</p>
        </Link>

        <div className={styles.box_text}>
          <p className={styles.text}>{body}</p>
          <Link href={link ? link : ""} className={styles.date} target="_blank">
            <span className={styles[color]}>{date}</span>
          </Link>
        </div>
      </div>
    </li>
  );
}
