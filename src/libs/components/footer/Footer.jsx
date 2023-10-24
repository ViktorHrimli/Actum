"use client";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useClient, useEffect, useState } from "@/shared/hooks/hooks";
import { getFormById } from "@/shared/helpers/helpers";

import Button from "@/libs/components/button/Button";

import Logo from "@/assets/svg/Actum_HERO.png";

import { footerEnums } from "./libs/enums";

import styles from "./Footer.module.scss";
import ModalForm from "@/libs/modal/modalForm/modalForm";
import ScrollButtonUp from "@/libs/components/contactPanel/halpers/showScrollButtonUp";

export default function Footer({
  address,
  City,
  LOGO_TITLE,
  LOGO_TEXT,
  Links,
  Phones,
  Email,
  Button: btnText,
}) {
  const [isStyleFooter, setIsStyleFooter] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScroll, setIsScroll] = useState(null);

  const path = usePathname().replace("/", "");

  const handleClickOnBtn = () => {
    getFormById("form_section");

    switch (path) {
      case "home":
        setIsOpenModal(false);
        break;
      case "paid-priority-family":
        setIsOpenModal(false);
        break;
      case "paid-priority-army":
        setIsOpenModal(false);
        break;
      case "paid-priority-crime":
        setIsOpenModal(false);
        break;
      case "book":
        setIsOpenModal(false);
        break;
      default:
        setIsOpenModal(true);
        break;
    }
  };

  let isFristRender = true;

  if (typeof window !== "undefined") {
    isFristRender = JSON.parse(sessionStorage.getItem("hero_page") || true);
  }

  useEffect(() => {
    if (isFristRender) {
      setTimeout(() => setIsClient(true), 3800);
    } else {
      setTimeout(() => setIsClient(true), 1000);
    }
  }, []);

  useEffect(() => {
    if (footerEnums[path]) {
      setIsStyleFooter(footerEnums[path]);
    } else {
      setIsStyleFooter(null);
    }
  }, [path]);

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

  return (
    isClient && (
      <section className={styles.footer_section}>
        <div
          className={`${styles[isStyleFooter]} ${styles.footer_gradient}`}
        ></div>
        <div className={styles.footer_container}>
          <div className={styles.box_logo}>
            <Image
              src={LOGO_TITLE["data"]["attributes"]["url"] || Logo}
              alt="Logo"
              width={400}
              height={117}
              className={styles.footer_logo}
            />
            <p className={styles.footer_logo_text}>{LOGO_TEXT["Title"]}</p>
            <div className={styles.policy_mob_none}>
              <a className={styles.policy_text} href="">
                {Links[0]["title"]}
              </a>
              <a className={styles.policy_text} href="">
                {Links[1]["title"]}
              </a>
              <a className={styles.policy_text} href={Links[2]["path"]}>
                {Links[2]["title"]}
              </a>
            </div>
          </div>

          <div className={styles.footer_text_box}>
            <p className={styles.footer_title_phone_only}>
              <span className={styles.footer_title_bold_phone_only}>
                Головний офіс:
              </span>{" "}
              {address}
            </p>
            <div className={styles.display_none}>
              <p className={styles.footer_title}>Головний офіс:</p>
              <p className={styles.footer_text}>{address}</p>
            </div>
            <p className={styles.footer_title}>Філії по містах:</p>

            <p className={styles.footer_text}>{City}</p>
          </div>
          <div className={styles.footer_contact_box}>
            <div className={styles.footer_contact}>
              <p className={styles.footer_contact_title}>Phone:</p>
              <div>
                <a className={styles.phone} href="tel:+380671797213">
                  {Phones[0]["KiyvStar"]}
                </a>
                <a className={styles.phone} href="tel:+380503334897">
                  {Phones[0]["Vodafone"]}
                </a>
              </div>
            </div>
            <div className={styles.footer_contact}>
              <p className={styles.footer_contact_title}>Email:</p>
              <a className={styles.email} href="mailto:info@actum.com.ua">
                {Email[0]["Email"]}
              </a>
            </div>

            <div className={styles.policy}>
              <a className={styles.policy_text} href="">
                Політика конфідеційності
              </a>
              <a className={styles.policy_text} href="">
                Правила надання онлайн-консультації
              </a>
              <a className={styles.policy_text} href="/html-sitemap">
                Мапа сайту
              </a>
            </div>
            <div className={styles.btn_wrapper} onClick={handleClickOnBtn}>
              <Button
                style={"button_prymary"}
                text={btnText[0]["text"]}
                type={"button"}
                typeStyle={
                  isStyleFooter === "footer_army_gradient" ? "army" : "family"
                }
              />
            </div>
            <div className={styles.scroll_button_up}>
              <div className={styles.icon_up}>
                <ScrollButtonUp />
              </div>
            </div>
          </div>
        </div>
        {isOpenModal && (
          <ModalForm
            type={"home"}
            setIsOpenModal={setIsOpenModal}
            isOpenModal={isOpenModal}
          />
        )}
      </section>
    )
  );
}
