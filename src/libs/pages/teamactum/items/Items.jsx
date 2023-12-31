"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import IconMap from "./IconMap";
import Button from "@/libs/components/button/Button";

import styles from "./Items.module.scss";

import { cityEnum } from "../libs/enums/enums";
import { iconEnum } from "@/shared/enums/enum";
import ModalForm from "@/libs/modal/modalForm/modalForm";

export default function Items({
  title,
  photo,
  button,
  city,
  city_enums,
  side_picture,
  description,
  type,
  form,
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

  const handleClickOnBtn = () => {
      setIsOpenModal(true);
  };

  return (
    <>
    <li style={{ position: "relative" }}>
      <div className={styles.conteiner_card}>
        <div className={styles.text_wrapper}>
          <h2 className={styles.title_text}>{title}</h2>

          {/* <p className={styles.lawyer_text}>adad</p> */}

          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        <div className={styles.map_wrapper}>
          <IconMap />
          <div className={`${styles.conteiner_pin} ${styles[cityEnum[city_enums]]}`}>
            {city_enums.length > 12 ?
              <>
                {iconEnum["pin"]()}
                <p>{city_enums}</p>
              </>
              :
              <>
                {city_enums === "Луцьк" ?
                  <>
                    {iconEnum["pin"]()}
                    <p>{city_enums}</p>
                  </>
                  :
                  <>
                    {city_enums === "Львів" ?
                    <>
                      {iconEnum["pin"]()}
                      <p>{city_enums}</p>
                    </>
                    :
                    <>
                      {city_enums === "Ужгород" ?
                      <>
                        {iconEnum["pin"]()}
                        <p>{city_enums}</p>
                      </>
                      :
                      <>
                        {city_enums === "Одеса" ?
                        <>
                          {iconEnum["pin"]()}
                          <p>{city_enums}</p>
                        </>
                        :
                        <>
                          {city_enums === "Тернопіль" ?
                          <>
                            {iconEnum["pin"]()}
                            <p>{city_enums}</p>
                          </>
                          :
                          <>
                            {city_enums === "Хмельницький" ?
                            <>
                              {iconEnum["pin"]()}
                              <p>{city_enums}</p>
                            </>
                            :
                            <>
                              {city_enums === "Чернівці" ?
                              <>
                                {iconEnum["pin"]()}
                                <p>{city_enums}</p>
                              </>
                              :
                              <>
                                {city_enums === "Чернігів" ?
                                <>
                                  {iconEnum["pin"]()}
                                  <p>{city_enums}</p>
                                </>
                                :
                                <>
                                  <p>{city_enums}</p>
                                  {iconEnum["pin"]()}
                              </>
                              }
                          </>
                          }
                        </>
                      }
                    </>
                      }
                    </>
                      }
                    </>
                      }
                    </>
                  }
                </>
                }
              </>
            }
          </div>
        </div>

        <div className={`${styles.image_conteiner} ${styles[side_picture]}`}>
          <Image
            src={photo["data"]["attributes"]["url"]}
            alt={title}
            quality={100}
            fill
            sizes="(max-width: 767px) 160px, (max-width: 1280px) 500px, 400px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      {/* <div className={styles.btn_wrapper}>
        <Link href={button["link"]}>
          <Button type="button" text="зв’язатися" style="button_service" />
        </Link>
      </div> */}

      <div className={styles.btn_wrapper_lawyer} onClick={handleClickOnBtn}>
        {/* <Link href={button["link"]}> */}
          <Button type="button" text={button["text"]} style="button_service" />
        {/* </Link> */}
      </div>
      </li>
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
