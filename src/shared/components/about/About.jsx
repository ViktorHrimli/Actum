"use client";
import Image from "next/image";
import { useState } from "react";

import Button from "@/libs/components/button/Button";
import Quotes from "@/shared/components/quotes/Quotes";

import { getFormById } from "@/shared/helpers/helpers";
import { themsColor } from "@/shared/enums/enum";

import styles from "./About.module.scss";
import ModalForm from "@/libs/modal/modalForm/modalForm";

export default function About({
  type = "family",
  title,
  description,
  photo,
  button,
  form,
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickOnBtn = () => {
    // getFormById("form_section");
    setIsOpenModal(true);
  };

  return (
    <>
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
      {isOpenModal && (
        <ModalForm
          type={type}
          form={form}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
        />)}
    </>
  );
}
