import styles from "./SideBar.module.scss";

import Image from "next/image";

import { useEffect, useState } from "@/libs/hooks/hooks";

import ModalForm from "@/libs/modal/modalForm/modalForm";

import back from "@/assets/svg/background_mobile_side_bar.png";
import Telegram from "@/assets/svg/telegram.svg";
import Viber from "@/assets/svg/Viber.png";
import Whatsapp from "@/assets/svg/Whatsapp.png";
import Form from "@/assets/svg/Form.png";

export default function SideBar({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.wrapper_background}>
          <Image
            style={{ objectFit: "cover" }}
            alt="background"
            fill
            sizes="100vw"
            loading="eager"
            src={back}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
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
                <a href="https://t.me/actum_help">
                  <Image src={Telegram} alt="Telegram" width={34} height={34} />
                </a>
              </li>

              <li>
                <a href="https://invite.viber.com/?g2=AQAIAxhPHjjf809lW9EPmDdLNrTBIB8uE1N0EfCEBTA5C3kI7AdyB85tcGxAzay%2F&lang=ru">
                  <Image src={Viber} alt="Viber" width={34} height={34} />
                </a>
              </li>

              <li>
                <a href="">
                  <Image src={Whatsapp} alt="Whatsapp" width={34} height={34} />
                </a>
              </li>

              <li onClick={() => setIsOpenModal(true)}>
                <a>
                  <Image src={Form} alt="Form" width={34} height={34} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <ModalForm
          type={type}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </>
  );
}
