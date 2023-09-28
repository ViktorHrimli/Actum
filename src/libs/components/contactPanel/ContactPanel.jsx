"use client";
import Image from "next/image";

import {
  useState,
  useIsBig,
  useEffect,
  useClient,
  usePathname,
  useRouter,
} from "@/libs/hooks/hooks";

import { motion } from "framer-motion";

import ModalForm from "@/libs/modal/modalForm/modalForm";

import ScrollAwareSection from "@/libs/components/contactPanel/halpers/logic";

import Telegram from "@/assets/svg/telegram.svg";
import Viber from "@/assets/svg/Viber.png";
// import Whatsapp from "@/assets/svg/Whatsapp.png";
import Form from "@/assets/svg/Form.png";

import styles from "./ContactPanel.module.scss";

import { colorGradient } from "@/libs/components/contactPanel/libs/enums";
import ScrollButtonUp from "./halpers/showScrollButtonUp";

export default function ContactPanel({ type }) {
  const { gradient } = colorGradient[type];

  const [isTrue, setIsTrue] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isPhoneMob, setIsPhoneMob] = useState(false);

  const [isScroll, setIsScroll] = useState(null);
  const isDesktop = useIsBig();

  const path = usePathname();
  const router = useRouter();
  const isClient = useClient();

  let isSessionStorageSave;

  const hanldeChangeLocale = () => {
    localStorage.setItem("locale", "ru");
    const newUrl = path.replace("/", "/ru/");

    router.push(newUrl, { scroll: true });
  };

  const handleClearLocale = () => {
    localStorage.removeItem("locale");

    const lengthUrl = path.length > 3;
    const newUrl = path.replace("/ru", lengthUrl ? "" : "/");

    router.push(newUrl, { scroll: true });
  };

  const hanldePhoneNumber = () => {
    setIsPhoneMob(!isPhoneMob);
  };

  if (typeof window !== "undefined") {
    isSessionStorageSave = JSON.parse(
      sessionStorage.getItem("hero_heder") || true
    );
  }

  useEffect(() => {
    setTimeout(() => {
      sessionStorage.setItem("hero_heder", "false");
    }, 3000);
  }, []);

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
      <>
        {isPhoneMob && (
          <div
            className={styles.on_click_closed}
            onClick={() => setIsPhoneMob(false)}
          ></div>
        )}
        <motion.section
          initial={isSessionStorageSave ? { opacity: 0 } : false}
          animate={isSessionStorageSave ? { opacity: 1 } : false}
          transition={{ duration: 0.6, delay: isDesktop ? 2.8 : 3.5 }}
          className={
            isTrue
              ? styles.contact_panel_section_height
              : `${styles.contact_panel_section} ${
                  isPhoneMob && styles.phone_mob
                }`
          }
        >
          <div className={styles[gradient]}></div>
          <div className={styles.contact_panel_conteiner}>
            <ul className={styles.list_panel}>
              <li
                className={styles.link}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "30px",
                  height: "30px",
                }}
              >
                <p className={styles.focus} onClick={handleClearLocale}>
                  UA
                </p>
                <p className={styles.focus} onClick={hanldeChangeLocale}>
                  RU
                </p>
              </li>
              <li className={styles.link} onClick={() => setIsPhoneMob(false)}>
                <a href="https://t.me/helpactum">
                  <Image src={Telegram} alt="Telegram" width={30} height={30} />
                </a>
              </li>
              <li className={`${styles.link} ${styles.mob_none}`}>
                <a href="https://invite.viber.com/?g2=AQAIAxhPHjjf809lW9EPmDdLNrTBIB8uE1N0EfCEBTA5C3kI7AdyB85tcGxAzay%2F&lang=ru">
                  <Image src={Viber} alt="Viber" width={34} height={34} />
                </a>
              </li>
              <li
                className={`${styles.link} ${styles.mob_yes}`}
                onClick={() => hanldePhoneNumber()}
              >
                {isPhoneMob && (
                  <motion.ul className={styles.list_phone}>
                    <li className={styles.link_panel_phone}>
                      <a href="tel:+380671797213">+38-067-179-72-13</a>
                    </li>
                    <li className={styles.link_panel_phone}>
                      <a href="tel:+380503334897">+38-050-333-48-97</a>
                    </li>
                  </motion.ul>
                )}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#F8F5F5"
                    d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"
                  />
                </svg>
              </li>
              {/* <li className={styles.link}>
              <a href="">
                <Image src={Whatsapp} alt="Whatsapp" width={34} height={34} />
              </a>
            </li> */}
              <li
                className={styles.link}
                onClick={() => setIsOpenModal(true) & setIsPhoneMob(false)}
              >
                <a>
                  <Image src={Form} alt="Form" width={34} height={34} />
                </a>
              </li>
            </ul>

            <ScrollAwareSection hideOnScrollEnd={setIsTrue}>
              <ul className={styles.list_panel_phone}>
                <li className={styles.link_panel_phone}>
                  <a href="tel:+380671797213">+38-067-179-72-13</a>
                </li>
                <li className={styles.link_panel_phone}>
                  <a href="tel:+380503334897">+38-050-333-48-97</a>
                </li>
              </ul>
            </ScrollAwareSection>
            <div onClick={() => setIsPhoneMob(false)}>
              <ScrollButtonUp />
            </div>
          </div>
        </motion.section>
        {isOpenModal && (
          <ModalForm
            type={type}
            setIsOpenModal={setIsOpenModal}
            isOpenModal={isOpenModal}
          />
        )}
      </>
    )
  );
}
