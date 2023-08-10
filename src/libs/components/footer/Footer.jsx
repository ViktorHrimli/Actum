import Image from "next/image";
import styles from "./Footer.module.scss";

import { FooterEnums } from "./libs/enums";

import Logo from "@/assets/svg/ActumLogotypeVertical.png";
import Button from "../button/Button";

export default function Footer({ type }) {
  const style = FooterEnums[type];
  return (
    <div className={styles.footer_section}>
      <div className={styles[style]}></div>

      <div className={styles.footer_container}>
        <div className={styles.box_logo}>
        <Image src={Logo} alt="Logo" width={400} height={117} className={styles.footer_logo} />
        <div className={styles.policy_mob_none}>
            <a className={styles.policy_text} href="">
              Політика конфідеційності
            </a>
            <a className={styles.policy_text} href="">
              Правила надання онлайн-консультації
            </a>
            <a className={styles.policy_text} href="">
              Мапа сайту
            </a>
          </div>
        </div>
        
        <div className={styles.footer_text_box}>
          
          <p className={styles.footer_title_phone_only}><span className={styles.footer_title_bold_phone_only}>Головний офіс:</span> Україна, м. Київ, вул. Оболонська набережна 15, корпус 5</p>
          <div className={styles.display_none}>
            <p className={styles.footer_title}>Головний офіс:</p>
            <p className={styles.footer_text}>Україна, м. Київ, вул. Оболонська набережна 15, корпус 5</p>
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
            <a className={styles.email} href="email:info@actum.com.ua">
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
            <a className={styles.policy_text} href="">
              Мапа сайту
            </a>
          </div>
          <div>
            <Button
            style={"button_prymary"}
            text={"замовити консультацію"}
            type={"button"}
            />
          </div>

          
        </div>
      </div>
    </div>
  );
}
