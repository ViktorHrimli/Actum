import Image from "next/image";
import Link from "next/link";

import styles from "./Item.module.scss";

export default function Item({ description, title, img, date, path = "test" }) {
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
        <div className={styles.description_wrapper}>
          <p className={styles.text}>
            {description}
            <Link href={`/blog-3-1/${path}`} className={styles.link_item}>
              читати повністю
            </Link>
          </p>
        </div>
      </div>
      <span className={styles.date}>{date}</span>
    </div>
  );
}
