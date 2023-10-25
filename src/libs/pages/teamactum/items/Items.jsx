import Image from "next/image";
import Link from "next/link";

import IconMap from "./IconMap";
import Button from "@/libs/components/button/Button";

import styles from "./Items.module.scss";

import { cityEnum } from "../libs/enums/enums";

export default function Items({ title, photo, button, texts }) {
  return (
    <li style={{ position: "relative" }}>
      <div className={styles.conteiner_card}>
        <div className={styles.text_wrapper}>
          <h2 className={styles.title_text}>{title}</h2>

          <p className={styles.lawyer_text}>{button["style"]}</p>

          {texts.map((item, id) => (
            <p className={styles.text} key={id}>
              {item.text}
            </p>
          ))}
        </div>
        <div className={styles.map_wrapper}>
          <IconMap />
          <div className={`${styles.conteiner_pin} ${styles[button["style"]]}`}>
            <p>{cityEnum[button["style"]]}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.99935 1.33301C6.59405 1.33294 5.24552 1.88751 4.24684 2.8762C3.24817 3.86489 2.68007 5.20778 2.66602 6.61301C2.66602 10.2663 7.36602 14.333 7.56602 14.5063C7.68677 14.6096 7.84045 14.6664 7.99935 14.6664C8.15825 14.6664 8.31193 14.6096 8.43268 14.5063C8.66602 14.333 13.3327 10.2663 13.3327 6.61301C13.3186 5.20778 12.7505 3.86489 11.7519 2.8762C10.7532 1.88751 9.40464 1.33294 7.99935 1.33301ZM7.99935 13.0997C6.88602 12.0397 3.99935 9.09967 3.99935 6.61301C3.99935 5.55214 4.42078 4.53473 5.17092 3.78458C5.92107 3.03444 6.93848 2.61301 7.99935 2.61301C9.06021 2.61301 10.0776 3.03444 10.8278 3.78458C11.5779 4.53473 11.9993 5.55214 11.9993 6.61301C11.9993 9.07967 9.11268 12.0397 7.99935 13.0997Z"
                fill="#F8F5F5"
              />
              <path
                d="M7.99935 4C7.53786 4 7.08673 4.13685 6.70302 4.39324C6.3193 4.64963 6.02024 5.01404 5.84363 5.44041C5.66703 5.86677 5.62082 6.33592 5.71085 6.78854C5.80088 7.24117 6.02311 7.65693 6.34943 7.98325C6.67576 8.30957 7.09152 8.5318 7.54414 8.62183C7.99676 8.71186 8.46592 8.66566 8.89228 8.48905C9.31864 8.31245 9.68306 8.01338 9.93945 7.62966C10.1958 7.24595 10.3327 6.79482 10.3327 6.33333C10.3327 5.71449 10.0869 5.121 9.64927 4.68342C9.21168 4.24583 8.61819 4 7.99935 4ZM7.99935 7.33333C7.80157 7.33333 7.60823 7.27468 7.44378 7.1648C7.27933 7.05492 7.15116 6.89874 7.07547 6.71602C6.99978 6.53329 6.97998 6.33222 7.01856 6.13824C7.05715 5.94426 7.15239 5.76608 7.29224 5.62623C7.4321 5.48637 7.61028 5.39113 7.80426 5.35255C7.99824 5.31396 8.19931 5.33377 8.38203 5.40945C8.56476 5.48514 8.72094 5.61331 8.83082 5.77776C8.9407 5.94221 8.99935 6.13555 8.99935 6.33333C8.99935 6.59855 8.89399 6.8529 8.70646 7.04044C8.51892 7.22798 8.26457 7.33333 7.99935 7.33333Z"
                fill="#F8F5F5"
              />
            </svg>
          </div>
        </div>

        <div className={styles.image_conteiner}>
          <Image
            src={photo["data"]["attributes"]["url"]}
            alt="Коровіна Наталя Георгіївна"
            fill
            sizes="(max-width: 767px) 160px, (max-width: 1280px) 500px, 400px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className={styles.btn_wrapper}>
        <Link href={button["link"]}>
          <Button type="button" text="зв’язатися" style="button_service" />
        </Link>
      </div>

      <div className={styles.btn_wrapper_lawyer}>
        <Link href={button["link"]}>
          <Button type="button" text={button["text"]} style="button_service" />
        </Link>
      </div>
    </li>
  );
}
