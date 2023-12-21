"use client";
import Image from "next/image";

import { getFormById } from "@/shared/helpers/helpers";

import styles from "./StepsLawyers.module.scss";
import Button from "@/libs/components/button/Button";

export default function StepsLawyers({
  type,
  background_photo,
  blocks,
  button,
}) {
  const handleClickOnBtn = () => {
    getFormById("form_section");
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <div className={styles.img}>
        <Image
          className={styles.img_pc}
          src={background_photo["data"]["attributes"]["url"]}
          alt={"our team"}
          fill
          quality={100}
          sizes="100vw"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.container}>
        <ul className={styles.list}>
          {blocks.map(({ title, description, number }, id) => (
            <li className={styles.link} key={id}>
              <div className={styles.container_number}>
                <p className={styles.number}>{number}</p>
              </div>
              <div className={styles.container_text}>
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.box_btn} onClick={handleClickOnBtn}>
          <Button
            style={"button_service"}
            text={button["text"]}
            type={"button"}
            typeStyle={type}
          />
        </div>
      </div>
    </section>
  );
}
