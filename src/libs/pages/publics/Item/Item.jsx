import Image from "next/image";

import styles from "./Item.module.scss";

export default function Item({ description, title, img, date }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.image_conteiner}>
        <Image
          src={img}
          alt={title}
          fill
          fetchPriority="low"
          style={{ objectFit: "cover" }}
        />
      </div>
      <p>{description}</p>

      <span>{date}</span>
    </div>
  );
}
