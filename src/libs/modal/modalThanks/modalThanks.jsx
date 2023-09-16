"use client";
import styles from "./modalThanks.module.scss";

import { colorEnums } from "../modalForm/enumsForm/enumsForm";

import { useEffect } from "react";

export default function ModalThanks({
  type,
  setIsStep,
  isOpenModal,
  setIsOpenModal = () => {},
}) {
  const { color, border } = colorEnums[type];

  const handleToggle = () => {
    setIsStep(false);
    setIsOpenModal(false);
  };

  useEffect(() => {
    const header = document.getElementById("header");

    if (isOpenModal) {
      header.style.display = "none";
    }

    return () => {
      header.style.display = "flex";
    };
  }, [isOpenModal]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles[border]}>
          <div className={styles.closed} onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill={color}
            >
              <path
                d="M23.3327 23.3327L4.66602 4.66602M23.3327 4.66602L4.66602 23.3327"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className={styles.container_text}>
            <p className={styles.title}>
              ваш запит успішно надіслано, чекайте на вашу віповідь.
            </p>
            <p className={styles.description}>
              Ми намагаємося відповідати дуже оперативно, але маємо багато
              запитів, саме тому будемо вдячні за очікування!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
