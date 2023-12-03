"use client";
import Image from "next/image";

import Button from "@/libs/components/button/Button";
import Quotes from "@/shared/components/quotes/Quotes";

import { getFormById } from "@/shared/helpers/helpers";
import { themsColor } from "@/shared/enums/enum";

import styles from "./About.module.scss";

export default function About({
  type = "family",
  title,
  description,
  photo,
  button,
}) {
  const handleClickOnBtn = () => {
    getFormById("form_section");
  };

  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <div className={styles.conteiner_text}>
          <div className={styles.conteiner_title}>
            <div className={styles.icons_conteiner}>
              <Quotes color={themsColor[type]["fill"]} />
            </div>
            <h2 className={styles.title_text}>{title}</h2>
          </div>
          <div
            className={styles.conteiner_description}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        <div className={styles.box}>
          <Image
            src={photo["data"]["attributes"]["url"]}
            loading="lazy"
            quality={100}
            alt="natalia"
            fill
          />
          <div className={styles.btn_wrapper} onClick={handleClickOnBtn}>
            <Button
              style={"button_service"}
              text={button["text"]}
              type={type}
              typeStyle={type}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
