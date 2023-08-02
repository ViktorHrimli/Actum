import Image from "next/image";
import styles from "./Footer.module.scss";

import Logo from "@/assets/svg/ActumLogotypeVertical.png";
import Button from "../button/Button";

export default function Footer() {
  return (
    <div className={styles.footer_section}>
      <div className={styles.footer_container}>
        <Image src={Logo} alt="Logo" width={400} height={117} />
        <div>
          <p className={styles.footer_title}>Головний офіс:</p>
          
        <p className={styles.footer_text}>Україна, м. Київ, вул. Оболонська набережна 15, корпус 5</p>
        
          <p className={styles.footer_title}>Філії по містах:</p>

          <p className={styles.footer_text}>
            Львів, Дніпро, Миколаїв, Житомир, Кривий Ріг, Херсон, Покровськ
          </p>
          <div className={styles.footer_gradient}></div>
        </div>
        <div>
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
          </div>

          <Button
            style={"button_prymary"}
            text={"замовити консультацію"}
            type={"button"}
          />
        </div>
      </div>
    </div>
  );
}
