"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import {
  useState,
  useIsBig,
  useEffect,
  useClient,
  usePathname,
  useSearchParams,
} from "@/shared/hooks/hooks";

import ModalForm from "@/libs/modal/modalForm/modalForm";
import ScrollAwareSection from "@/libs/components/contactPanel/halpers/logic";
import ScrollButtonUp from "./halpers/showScrollButtonUp";

import Form from "@/assets/svg/Form.png";

import { storage, coockiesManager } from "@/shared/helpers/helpers";

import { iconEnum } from "@/shared/enums/enum";
import { colorGradient } from "@/libs/components/contactPanel/libs/enums";
import styles from "./ContactPanel.module.scss";

export default function ContactPanel({ Telephones, Icons, ruForm, uaForm }) {
  const [setIsStylePanel, setsetIsStylePanel] = useState("family");
  const [isStyleModal, setIsStyleModal] = useState(null);

  const [isTrue, setIsTrue] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isPhoneMob, setIsPhoneMob] = useState(false);

  const [isLanguage, setIsLanguage] = useState(false);
  const [isScroll, setIsScroll] = useState(0);

  const isDesktop = useIsBig();
  const path = usePathname();
  const isClient = useClient();
  const isHome = path === "/ru";
  const searchParams = useSearchParams();

  const crime = path.includes("crim");
  const kryminalnyi = path.includes("kryminalnyi");

  const army = path.includes("army");
  const family = path.includes("simeinyk");

  let isSessionStorageSave;

  const FIRST_ICON = Icons[0];
  const SECOND_ICON = Icons[1];

  const sendFormByMessenger = (type) => {
    // const makeObjParams = storage.getInfo(searchParams);
    var theObjParams = coockiesManager.getCoockies();

    const msgObj = {
      ...theObjParams,
      type,
    };

    const data = storage.sendObjData(msgObj);

    axios.post("/api/form", data);
  };

  const hanldeChangeLocale = () => {
    localStorage.setItem("locale", "ru");
  };

  const handleClearLocale = () => {
    localStorage.removeItem("locale");
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
    switch (true) {
      case army:
        setsetIsStylePanel(colorGradient["army"]);
        setIsStyleModal("army");
        return;

      case crime:
        setsetIsStylePanel(colorGradient["crime"]);
        setIsStyleModal("crime");
        return;

      case kryminalnyi:
        setsetIsStylePanel(colorGradient["crime"]);
        setIsStyleModal("crime");
        return;

      case family:
        setsetIsStylePanel(colorGradient["family"]);
        setIsStyleModal("family");
        return;

      default:
        setsetIsStylePanel(colorGradient["home"]);
        setIsStyleModal("home");
        return;
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

  //  in scrol mob
  useEffect(() => {
    const handleScroll = () => {
      if (isPhoneMob) {
        setIsPhoneMob(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPhoneMob]);

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
          <div className={styles[setIsStylePanel["gradient"]]}></div>
          <div className={styles.contact_panel_conteiner}>
            <ul className={styles.list_panel}>
              <li className={`${styles.link} ${styles.link_translator}`}>
                <Link
                  href={
                    path.includes("/ru")
                      ? path.replace("/ru", isHome ? "/" : "") +
                        window.location.search
                      : path + window.location.search
                  }
                >
                  <p
                    className={styles.focus}
                    onClick={handleClearLocale}
                    style={isLanguage ? {} : { fontWeight: "700" }}
                  >
                    UA
                  </p>
                </Link>
                <p
                  className={styles.focus}
                  onClick={hanldeChangeLocale}
                  style={isLanguage ? { fontWeight: "700" } : {}}
                >
                  <Link
                    href={
                      path.includes("/ru")
                        ? path + window.location.search
                        : `/ru${path}` + window.location.search
                    }
                  >
                    RU
                  </Link>
                </p>
              </li>
              <li
                className={styles.link}
                onClick={() => sendFormByMessenger(FIRST_ICON["icon"])}
              >
                <a target="_blank" referrerPolicy="" href={FIRST_ICON["link"]}>
                  <FontAwesomeIcon
                    icon={iconEnum[FIRST_ICON["icon"]]}
                    className={styles.options_icon}
                    style={{ width: 30, height: 30 }}
                  />
                </a>
              </li>
              <li
                className={`${styles.link} ${styles.mob_none}`}
                onClick={() => sendFormByMessenger(SECOND_ICON["icon"])}
              >
                <a target="_blank" referrerPolicy="" href={SECOND_ICON["link"]}>
                  <FontAwesomeIcon
                    icon={iconEnum[SECOND_ICON["icon"]]}
                    className={styles.options_icon}
                    style={{ width: 30, height: 30 }}
                  />
                </a>
              </li>
              <li
                className={`${styles.link} ${styles.mob_yes}`}
                onClick={() => hanldePhoneNumber()}
              >
                <motion.ul
                  className={styles.list_phone}
                  style={isPhoneMob ? { display: "flex" } : { display: "none" }}
                >
                  <li className={styles.link_panel_phone}>
                    <a
                      className="binct-phone-number-2"
                      // target="_blank"
                      referrerPolicy=""
                      href={`tel:${Telephones["KiyvStar"]}`}

                    >
                      {Telephones["KiyvStar"]}
                    </a>
                  </li>
                  <li className={styles.link_panel_phone}>
                    <a
                      className="binct-phone-number-1"
                      // target="_blank"
                      referrerPolicy=""
                      href={`tel:${Telephones["Vodafone"]}`}

                    >
                      {Telephones["Vodafone"]}

                    </a>
                  </li>
                </motion.ul>

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
              <li
                className={styles.link}
                onClick={() => setIsOpenModal(true) & setIsPhoneMob(false)}
              >
                <Image src={Form} alt="Form" width={34} height={34} />
              </li>
            </ul>
            <ScrollAwareSection hideOnScrollEnd={setIsTrue}>
              <ul className={styles.list_panel_phone}>
                <li className={styles.link_panel_phone}>
                  <a
                    className="binct-phone-number-2"
                    referrerPolicy=""
                    href={`tel:${Telephones["KiyvStar"]}`}
                  >
                    {Telephones["KiyvStar"]}
                  </a>
                </li>
                <li className={styles.link_panel_phone}>
                  <a
                    className="binct-phone-number-1"
                    referrerPolicy=""
                    href={`tel:${Telephones["Vodafone"]}`}
                  >
                    {Telephones["Vodafone"]}
                  </a>
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
            type={isStyleModal}
            form={isLanguage ? ruForm : uaForm}
            setIsOpenModal={setIsOpenModal}
            isOpenModal={isOpenModal}
          />
        )}
      </>
    )
  );
}
