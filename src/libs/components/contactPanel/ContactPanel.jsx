"use client";
import Image from "next/image";

import Telegram from "@/assets/svg/telegram.svg";
import Viber from "@/assets/svg/Viber.png";
import Whatsapp from "@/assets/svg/Whatsapp.png";
import Form from "@/assets/svg/Form.png";
import ArrowUp from "@/assets/svg/Arrow-up.png";




import styles from "./ContactPanel.module.scss";

export default function ContactPanel() {
  return <section className={styles.contact_panel_section}>
    <div className={styles.contact_panel_conteiner}>
      <ul className={styles.list_panel}>
        <li><a href="">
          <Image src={Telegram} alt="Telegram" width={34} height={34} />
        </a></li>

        <li><a href="">
          <Image src={Viber} alt="Viber" width={34} height={34} />
        </a></li>

        <li><a href="">
          <Image src={Whatsapp} alt="Whatsapp" width={34} height={34} />
        </a></li>

        <li><a href="">
          <Image src={Form} alt="Form" width={34} height={34} />
        </a></li>
      </ul>
      <ul className={styles.list_panel_phone}>
        <li className={styles.link_panel_phone}><a href="tel:+380671797213">+38-067-179-72-13</a></li>
        <li className={styles.link_panel_phone_2}><a href="tel:+380503334897">+38-050-333-48-97</a></li>
      </ul>
      <a href="">
        <Image src={ArrowUp} alt="Arrow-up" width={34} height={34} />
      </a>
      </div>
  </section>;
}