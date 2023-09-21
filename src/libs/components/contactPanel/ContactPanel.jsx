"use client";
import Image from "next/image";

import { useState, useIsBig } from "@/libs/hooks/hooks";
import { motion } from "framer-motion";

import ModalForm from "@/libs/modal/modalForm/modalForm";

import ScrollAwareSection from "@/libs/components/contactPanel/halpers/logic";

import Telegram from "@/assets/svg/telegram.svg";
import Viber from "@/assets/svg/Viber.png";
import Whatsapp from "@/assets/svg/Whatsapp.png";
import Form from "@/assets/svg/Form.png";

import styles from "./ContactPanel.module.scss";

import { colorGradient } from "@/libs/components/contactPanel/libs/enums";
import ScrollButtonUp from "./halpers/showScrollButtonUp";

import { useEffect } from "@/libs/hooks/hooks";

export default function ContactPanel({ type }) {
  const { gradient } = colorGradient[type];

  const [isTrue, setIsTrue] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScroll, setIsScroll] = useState(null);
  const isDesktop = useIsBig();

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
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: isDesktop ? 2.8 : 3.5 }}
        className={
          isTrue
            ? styles.contact_panel_section_height
            : styles.contact_panel_section
        }
      >
        <div className={styles[gradient]}></div>
        <div className={styles.contact_panel_conteiner}>
          <ul className={styles.list_panel}>
            <li className={styles.link}>
              <a href="https://t.me/actum_help">
                <Image src={Telegram} alt="Telegram" width={30} height={30} />
              </a>
            </li>

            <li className={styles.link}>
              <a href="https://invite.viber.com/?g2=AQAIAxhPHjjf809lW9EPmDdLNrTBIB8uE1N0EfCEBTA5C3kI7AdyB85tcGxAzay%2F&lang=ru">
                <Image src={Viber} alt="Viber" width={34} height={34} />
              </a>
            </li>

            <li className={styles.link}>
              <a href="https://www.instagram.com/actum.com.ua/">
                <Image src={Whatsapp} alt="Whatsapp" width={34} height={34} />
              </a>
            </li>

            <li className={styles.link} onClick={() => setIsOpenModal(true)}>
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
          <ScrollButtonUp />
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
  );
}
