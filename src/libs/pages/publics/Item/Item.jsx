"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "@/shared/hooks/hooks";

import styles from "./Item.module.scss";

export default function Item({ description, title, photo, date, link }) {
  const pathName = usePathname();

  return (
    <article className={styles.card}>
      <h2 className={styles.title_text}>
        <Link href={`${pathName}/${link}`}>
          <strong>{title}</strong>
        </Link>
      </h2>
      <section className={styles.conteiner_text}>
        <div className={styles.image_conteiner}>
          <Image
            src={photo["data"]["attributes"]["url"]}
            alt={title}
            fill
            fetchPriority="low"
            style={{ objectFit: "cover" }}
          />
        </div>
        <article className={styles.description_wrapper}>
          <p className={styles.text}>
            {description}
            <Link href={`${pathName}/${link}`} className={styles.link_item}>
              читати повністю
            </Link>
          </p>
        </article>
      </section>
      <span className={styles.date}>{date}</span>
    </article>
  );
}
