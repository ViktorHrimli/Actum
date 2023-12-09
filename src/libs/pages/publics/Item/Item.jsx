"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "@/shared/hooks/hooks";

import styles from "./Item.module.scss";

export default function Item({ description, title, photo, date, link }) {
  const pathName = usePathname();

  return (
    <div className={styles.card}>
      <h2 className={styles.title_text}>
        <Link href={`${pathName}/${link}`}>{title}</Link>
      </h2>
      <div className={styles.conteiner_text}>
        <div className={styles.image_conteiner}>
          <Image
            src={photo["data"]["attributes"]["url"] ?? img}
            alt={title}
            fill
            fetchPriority="low"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.description_wrapper}>
          <p className={styles.text}>
            {description}
            <Link href={`${pathName}/${link}`} className={styles.link_item}>
              читати повністю
            </Link>
          </p>
        </div>
      </div>
      <span className={styles.date}>{date}</span>
    </div>
  );
}
