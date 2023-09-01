"use client";
import Image from "next/image";
import ScrollAwareSection from '@/libs/components/contactPanel/halpers/logic';
import {colorGradient} from "@/libs/components/contactPanel/libs/enums"

import Telegram from "@/assets/svg/telegram.svg";
import Viber from "@/assets/svg/Viber.png";
import Whatsapp from "@/assets/svg/Whatsapp.png";
import Form from "@/assets/svg/Form.png";

import {useState} from '@/libs/hooks/hooks'

import styles from "./ContactPanel.module.scss";
import ScrollButtonUp from "./halpers/showScrollButtonUp";

export default function ContactPanel({ type }) {
  const { gradient } = colorGradient[type];
  
  const [isTrue, setIsTrue] = useState(false);

  return (
    <section className={isTrue ? styles.contact_panel_section_height : styles.contact_panel_section}>
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

          <li className={styles.link}>
            <a href="">
              <Image src={Form} alt="Form" width={34} height={34} />
            </a>
          </li>
          
        </ul>
        <ScrollAwareSection hideOnScrollEnd={setIsTrue}>
        <ul className={styles.list_panel_phone} >
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
      </section>
    
  )
}
