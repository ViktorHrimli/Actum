"use client";
import styles from "./modalThanks.module.scss";

import { colorEnums } from "../modalForm/enumsForm/enumsForm";

import { useEffect } from "react";
import Button from "@/libs/components/button/Button";
import Link from "next/link";

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
              ваш запит успішно надіслано, чекайте на нашу віповідь.
            </p>
            {/* <p className={styles.description}>
              Ми намагаємося відповідати дуже оперативно, але маємо багато
              запитів, саме тому будемо вдячні за очікування!
            </p> */}
            <p className={styles.description}>
              Щоб отримати відповідь за 5 хвилин, заходьте у телеграмм за
              посиланням та привітайтесь з помічником.
            </p>
            <p className={styles.description}>
              Увага! Питання писати не потрібно, воно вже у нас.
            </p>
            <div className={styles.btn_wrapper}>
              <Link href={"https://t.me/helpactum"}>
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      className={styles.icon_telegram}
                      d="M9.5 0C4.25363 0 0 4.25363 0 9.5C0 14.7464 4.25363 19 9.5 19C14.7464 19 19 14.7464 19 9.5C19 4.25363 14.7464 0 9.5 0ZM14.1661 6.50829L12.6065 13.855C12.4917 14.3759 12.1814 14.5025 11.7483 14.2571L9.37333 12.5075L8.22858 13.6111C8.17249 13.6837 8.10052 13.7425 8.01818 13.783C7.93585 13.8235 7.84533 13.8446 7.75358 13.8447H7.74962L7.91825 11.4269L12.3199 7.45117C12.5099 7.28254 12.2772 7.18675 12.0246 7.35538L6.58667 10.7801L4.24333 10.0486C3.73667 9.88792 3.72242 9.54196 4.35021 9.29338L13.5066 5.76413C13.9325 5.60896 14.303 5.86546 14.1653 6.50908L14.1661 6.50829Z"
                      fill="#E32F7A"
                    />
                  </svg>
                </div>
                <Button
                  style={"button_service"}
                  text={"телеграмм"}
                  type={"button"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
