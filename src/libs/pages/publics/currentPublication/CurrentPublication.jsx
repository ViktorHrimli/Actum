"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./CurrentPublication.module.scss";

import Button from "@/libs/components/button/Button";

import ModalForm from "@/libs/modal/modalForm/modalForm";

export default function CurrentPublication({
  button,
  title,
  description,
  topic_text,
  picture,
  form,
  type,
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScroll, setIsScroll] = useState(0);

  useEffect(() => {
    if (isOpenModal) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isOpenModal]);

  const modalOnClick = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.conteiner}>
          <h2 className={styles.title_text}>{title}</h2>
          <div className={styles.wrapper_content}>
            <div className={styles.text_conteiner}>
              <p className={styles.text}>{description}</p>

              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: topic_text }}
              ></div>
            </div>

            <div className={styles.image_wrapper}>
              <Image
                src={picture["data"]["attributes"]["url"]}
                alt={"photo thems"}
                fill
                sizes="(max-width: 767px) 280px, (max-width: 1280px) 663px, 500px"
                fetchPriority="low"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.btn_wrapper} onClick={modalOnClick}>
                <Button
                  style={"button_service"}
                  text={button["text"]}
                  type={"button"}
                />
              </div>
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
        />
      )}
    </>
  );
}
