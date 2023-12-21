import styles from "./SideBar.module.scss";

import Image from "next/image";

import { useEffect, useState, usePathname } from "@/shared/hooks/hooks";
import { colorImg } from "./libs/enums";

import ModalForm from "@/libs/modal/modalForm/modalForm";

import Telegram from "@/assets/svg/telegram.svg";
import iconF from "@/assets/svg/Form.png";

export default function SideBar({ children, isStyleHeader, ruForm, uaForm }) {
  const [type, setIsType] = useState("family");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);
  const path = usePathname();


  const { background } = colorImg[type];

  useEffect(() => {
    switch (isStyleHeader) {
      case "main_gradient_army":
        setIsType("army");
        break;
      case "main_gradient_criminal":
        setIsType("crime");
        break;
      default:
        setIsType("family");
        break;
    }
  }, [type]);

  useEffect(() => {
    if (path.includes("/ru")) {
      localStorage.setItem("locale", "ru");
    } else {
      localStorage.removeItem("locale");
    }
    const languageData = localStorage.getItem("locale");

    if (languageData) {
      setIsLanguage(true);
    } else {
      setIsLanguage(false);
    }
  }, [path]);

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
            src={background}
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
                <a href="https://t.me/actum_help" target="_blank">
                  <Image src={Telegram} alt="Telegram" width={34} height={34} />
                </a>
              </li>
              <li onClick={() => setIsOpenModal(true)}>
                <a>
                  <Image src={iconF} alt="FormIcon" width={34} height={34} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <ModalForm
          type={type}
          form={isLanguage ? ruForm : uaForm}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </>
  );
}
