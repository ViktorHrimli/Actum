"use client";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "@/libs/hooks/hooks";
import { getFormById } from "@/shared/helpers/helpers";

import Button from "@/libs/components/button/Button";

import Logo from "@/assets/svg/Actum_HERO.png";

import { footerEnums } from "./libs/enums";

import styles from "./Footer.module.scss";
import ModalForm from "@/libs/modal/modalForm/modalForm";

export default function Footer() {
  const [isStyleFooter, setIsStyleFooter] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScroll, setIsScroll] = useState(null);

  const path = usePathname().replace("/", "");

  const handleClickOnBtn = () => {
    getFormById("form_section");

    if (path === "home") {
      setIsOpenModal(false);
    } else if (path === "paid-priority-family"){
      setIsOpenModal(false);
    } else if (path === "paid-priority-army"){
      setIsOpenModal(false);
    } else if (path === "paid-priority-crime"){
      setIsOpenModal(false);
    } else if (path === "book"){
      setIsOpenModal(false);
    } else {
      setIsOpenModal(true);
    }
  };

  useEffect(() => {
    setTimeout(() => setIsClient(true), 3800);
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
    <>
    <section className={styles.footer_section}>
      {isClient && (
        <>
          <div
            className={`${styles[isStyleFooter]} ${styles.footer_gradient}`}
          ></div>
          <div className={styles.footer_container}>
            <div className={styles.box_logo}>
              <Image
                src={Logo}
                alt="Logo"
                width={400}
                height={117}
                className={styles.footer_logo}
              />
              <p className={styles.footer_logo_text}>Адвокатське об’Єднання</p>
              <div className={styles.policy_mob_none}>
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
            </div>

            <div className={styles.footer_text_box}>
              <p className={styles.footer_title_phone_only}>
                <span className={styles.footer_title_bold_phone_only}>
                  Головний офіс:
                </span>{" "}
                Україна, м. Київ, вул. Оболонська набережна 15, корпус 5
              </p>
              <div className={styles.display_none}>
                <p className={styles.footer_title}>Головний офіс:</p>
                <p className={styles.footer_text}>
                  Україна, м. Київ, вул. Оболонська набережна 15, корпус 5
                </p>
              </div>
              <p className={styles.footer_title}>Філії по містах:</p>

              <p className={styles.footer_text}>
                Львів, Дніпро, Миколаїв, Житомир, Кривий Ріг, Херсон, Покровськ
              </p>
            </div>
            <div className={styles.footer_contact_box}>
              <div className={styles.footer_contact}>
                <p className={styles.footer_contact_title}>Phone:</p>
                <div>
                  <a className={styles.phone} href="tel:+380671797213">
                    +38-067-179-72-13
                  </a>
                  <a className={styles.phone} href="tel:+380503334897">
                    +38-050-333-48-97
                  </a>
                </div>
              </div>
              <div className={styles.footer_contact}>
                <p className={styles.footer_contact_title}>Email:</p>
                <a className={styles.email} href="mailto:info@actum.com.ua">
                  info@actum.com.ua
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
                    text={"замовити консультацію"}
                    type={"button"}
                    typeStyle={
                      isStyleFooter === "footer_army_gradient"
                        ? "army"
                        : "family"
                    }
                  />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
      {isOpenModal && (
        <ModalForm
          type={"home"}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
        />
      )}
    </>
  );
}
