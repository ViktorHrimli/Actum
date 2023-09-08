import Image from "next/image";

import styles from "./Item.module.scss";

export default function Item({ description, title, img, date }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title_text}>{title}</h2>
      <div className={styles.conteiner_text}>
        <div className={styles.image_conteiner}>
          <Image
            src={img}
            alt={title}
            fill
            fetchPriority="low"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className={styles.text}>{description}</p>
      </div>
      <span className={styles.date}>{date}</span>
    </div>
  );
}
