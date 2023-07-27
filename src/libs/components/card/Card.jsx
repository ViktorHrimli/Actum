import Image from "next/image";

import styles from "./Card.module.scss";

export default function Card({ name, photo, date, body }) {
  return (
    <li className={styles.conteiner}>
      <Image src={photo} alt="Person" width={73} height={73} loading="lazy" />

      <p>{name}</p>
      <p>{body}</p>

      <span>{date}</span>
    </li>
  );
}
