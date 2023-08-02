import styles from "./SideBar.module.scss";

import Image from "next/image";

import Telegram from "@/assets/svg/telegram.svg";
import Viber from "@/assets/svg/Viber.png";
import Whatsapp from "@/assets/svg/Whatsapp.png";
import Form from "@/assets/svg/Form.png";

export default function SideBar({ children }) {
  return (
    <div className={styles.menu}>
      <div className={styles.conteiner}>{children}</div>

      <div className={styles.wrapper_info}>
        <div className={styles.phone_conteiner}>
          <a href="tel:+380671797213">
            <p className={styles.text}>+38-067-179-72-13</p>
          </a>
          <a href="tel:+380503334897">
            <p className={styles.text}>+38-050-333-48-97</p>
          </a>
        </div>
        <ul className={styles.icon_list}>
          <li>
            <a href="">
              <Image src={Telegram} alt="Telegram" width={34} height={34} />
            </a>
          </li>

          <li>
            <a href="">
              <Image src={Viber} alt="Viber" width={34} height={34} />
            </a>
          </li>

          <li>
            <a href="">
              <Image src={Whatsapp} alt="Whatsapp" width={34} height={34} />
            </a>
          </li>

          <li>
            <a href="">
              <Image src={Form} alt="Form" width={34} height={34} />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.main_gradient}></div>
    </div>
  );
}
