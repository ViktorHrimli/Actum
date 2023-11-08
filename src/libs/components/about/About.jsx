"use client";

import Image from "next/image";
import { useState, useEffect } from "@/shared/hooks/hooks";

import Button from "@/libs/components/button/Button";
import Quotes from "@/shared/components/quotes/Quotes";
import { getFormById } from "@/shared/helpers/helpers";

import styles from "./About.module.scss";

export default function About({
  type = "family",
  title,
  description,
  photo,
  button,
}) {
  const [markDown, setMarkDown] = useState("");

  const colorObj = {
    army: "#536641",
    crime: "#3F2E64",
    family: "#E32F7A",
  };

  const handleClickOnBtn = () => {
    getFormById("form_section");
  };

  useEffect(() => {
    document.getElementById("description_title_about").innerHTML = description;
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <div className={styles.conteiner_text}>
          <div className={styles.conteiner_title}>
            <div className={styles.icons_conteiner}>
              <Quotes color={colorObj[type]} />
            </div>
            <h2 className={styles.title_text}>{title}</h2>
          </div>
          <div
            className={styles.conteiner_description}
            id="description_title_about"
          ></div>
        </div>

        <div className={styles.image_wrapper}>
          <Image
            src={photo["data"]["attributes"]["url"]}
            loading="lazy"
            alt="natalia"
            fill
            style={{
              objectFit: "cover",
              borderRadius: "4px",
            }}
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
