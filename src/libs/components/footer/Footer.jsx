"use client";
import Image from "next/image";
import Link from "next/link";

import Button from "@/libs/components/button/Button";
import ModalForm from "@/libs/modal/modalForm/modalForm";
import ScrollButtonUp from "@/libs/components/contactPanel/halpers/showScrollButtonUp";

import { useEffect, useState, usePathname } from "@/shared/hooks/hooks";
import { footerEnums } from "@/shared/enums/enum";
import { getFormById } from "@/shared/helpers/helpers";

import styles from "./Footer.module.scss";

export default function Footer({ ruFooter, uaFooter, ruForm, uaForm }) {
  const [isStyleFooter, setIsStyleFooter] = useState("other");
  const [isClient, setIsClient] = useState(false);
  const [isLocale, setIsLocale] = useState("");
  const [isPhoneBin, setIsPhoneBin] = useState(false);


  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScroll, setIsScroll] = useState(0);

  const path = usePathname().replace("/", "");

  const {
    data: {
      attributes: { Footer: ruFooterData },
    },
  } = ruFooter;

  const {
    data: {
      attributes: { Footer: uaFooterData },
    },
  } = uaFooter;

  const crime = path.includes("crim");
  const kryminalnyi = path.includes("kryminalnyi");
  const army = path.includes("army");
  const family = path.includes("simeinyk");

  const home = path === "";
  const homeRu = path === "ru";

  const services = path === "services";
  const RUservices = path === "ru/services";

  const teamactum = path.includes("teamactum");
  const book = path.includes("book");
  const contacts = path.includes("contacts");
  const blog = path.includes("blog");
  const sitemap = path.includes("sitemap");

  const handleClickOnBtn = () => {
    getFormById("form_section");

    switch (path) {
      case "paid-priority-family":
        setIsOpenModal(false);
        break;
      case "paid-priority-army":
        setIsOpenModal(false);
        break;
      case "paid-priority-crime":
        setIsOpenModal(false);
        break;
      case "book":
        setIsOpenModal(false);
        break;

      default:
        setIsOpenModal(true);
        break;
    }
  };

  let isFristRender = true;

  if (typeof window !== "undefined") {
    isFristRender = JSON.parse(sessionStorage.getItem("hero_page") || true);
  }

  useEffect(() => {
    // FUCK I HAVnot use another way blyat so sorry for me beacame of future but dont touch pidor) joke...lol
    if (home || homeRu) {
      if (isFristRender) {
        // setTimeout(() => setIsClient(true), 3800);
        setTimeout(() => setIsClient(true), 1000);
      } else {
        // setTimeout(() => setIsClient(true), 1000);
        setTimeout(() => setIsClient(true), 1000);
      }
    } else {
      setIsClient(true);
    }
  }, [isFristRender]);

  // binotel page contacts

  useEffect(() => {
    switch (path) {
    
      case "contacts":
        setIsPhoneBin(true);
        break;
      
      case "ru/contacts":
        setIsPhoneBin(true);
        break;
      
      // case "book":
      //   setIsPhoneBin(true);
      //   break;
      
      // case "ru/book":
      //   setIsPhoneBin(true);
      //   break;
      
      default:
        setIsPhoneBin(false);
        break;
    }
  }, [path]);

  useEffect(() => {
    setIsLocale(localStorage.getItem("locale") || "");
    // Look and never... listen? NEVER blyat dont do this...but we are have not chois (:

    switch (true) {
      case home:
        setIsStyleFooter(footerEnums["family"]);
        return;

      case homeRu:
        setIsStyleFooter(footerEnums["family"]);
        return;

      case army:
        setIsStyleFooter(footerEnums["army"]);
        return;

      case crime:
        setIsStyleFooter(footerEnums["crime"]);
        return;

      case kryminalnyi:
        setIsStyleFooter(footerEnums["crime"]);
        return;

      case family:
        setIsStyleFooter(footerEnums["family"]);
        return;

      case sitemap:
        setIsStyleFooter(footerEnums["family"]);
        return;

      case services:
        setIsStyleFooter(footerEnums["family"]);
        return;

      case RUservices:
        setIsStyleFooter(footerEnums["family"]);
        return;

      case teamactum:
        setIsStyleFooter(footerEnums["family"]);
        return;

      case book:
        setIsStyleFooter(footerEnums["family"]);
        return;

      case contacts:
        setIsStyleFooter(footerEnums["family"]);
        return;

      case blog:
        setIsStyleFooter(footerEnums["family"]);
        return;

      default:
        setIsStyleFooter(footerEnums["other"]);
        return;
    }
  }, [path]);

  useEffect(() => {
    // Ok its fine)

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
      <div style={{ position: "relative" }}>
        <section className={styles.footer_section}>
          <div
            className={`${styles[isStyleFooter]} ${styles.footer_gradient}`}
          ></div>
          <div className={styles.footer_container}>
            <div className={styles.box_logo}>
              <Image
                src={uaFooterData.LOGO_TITLE["data"]["attributes"]["url"]}
                alt="Logo"
                width={400}
                height={117}
                className={styles.footer_logo}
              />
              <p className={styles.footer_logo_text}>
                {isLocale
                  ? ruFooterData.LOGO_TEXT["Title"]
                  : uaFooterData.LOGO_TEXT["Title"]}
              </p>
              <div className={styles.policy_mob_none}>
                {isLocale
                  ? ruFooterData.Links.map((item, id) => (
                      <Link
                        key={id}
                        className={styles.policy_text}
                        href={item.path}
                      >
                        {item.Title}
                      </Link>
                    ))
                  : uaFooterData.Links.map((item, id) => (
                      <Link
                        key={id}
                        className={styles.policy_text}
                        href={item.path}
                      >
                        {item.Title}
                      </Link>
                    ))}
              </div>
            </div>

            <div className={styles.footer_text_box}>
              <p className={styles.footer_title_phone_only}>
                <span className={styles.footer_title_bold_phone_only}>
                  {isLocale ? "Главный офис" : "Головний офіс"}:
                </span>
                {isLocale ? ruFooterData.address : uaFooterData.address}
                <span style={{ display: "block" }}>
                  без вихідних з 8:00 до 22:00
                </span>
              </p>
              <div className={styles.display_none}>
                <p className={styles.footer_title}>
                  {isLocale ? "Главный офис" : "Головний офіс"}:
                </p>
                <p className={styles.footer_text}>
                  {isLocale ? ruFooterData.address : uaFooterData.address}
                  <span style={{ display: "block" }}>
                    без вихідних з 8:00 до 22:00
                  </span>
                </p>
              </div>
              <p className={styles.footer_title}>
                {isLocale ? "Филии по городам" : "Філії по містах"}:
              </p>

              <p className={styles.footer_text}>
                {isLocale ? ruFooterData.City : uaFooterData.City}
              </p>
            </div>
            <div className={styles.footer_contact_box}>
              <div className={styles.footer_contact}>
                <p className={styles.footer_contact_title}>Phone:</p>
                <div>
                  <a
                    className={`${styles.phone} ${"binct-phone-number-2"}`}
                    href={`tel:${uaFooterData.Phones["KiyvStar"]}`}
                  >
                    {uaFooterData.Phones["KiyvStar"]}
                  </a>
                  <a
                    className={`${styles.phone} ${"binct-phone-number-1"}`}
                    href={`tel:${uaFooterData.Phones["Vodafone"]}`}
                  >
                    {uaFooterData.Phones["Vodafone"]}
                  </a>
                </div>
              </div>
              <div className={styles.footer_contact}>
                <p className={styles.footer_contact_title}>Email:</p>
                <a
                  className={styles.email}
                  href={`mailto:${uaFooterData.email}`}
                >
                  {uaFooterData.email}
                </a>
              </div>

              <div className={styles.policy}>
                {isLocale
                  ? ruFooterData.Links.map((item, id) => (
                      <Link
                        key={id}
                        className={styles.policy_text}
                        href={item.path}
                      >
                        {item.Title}
                      </Link>
                    ))
                  : uaFooterData.Links.map((item, id) => (
                      <Link
                        key={id}
                        className={styles.policy_text}
                        href={item.path}
                      >
                        {item.Title}
                      </Link>
                    ))}
              </div>
              <div className={styles.btn_wrapper} onClick={handleClickOnBtn}>
                <Button
                  style={"button_prymary"}
                  text={
                    isLocale
                      ? ruFooterData.Button["text"]
                      : uaFooterData.Button["text"]
                  }
                  type={"button"}
                  typeStyle={
                    isStyleFooter === "footer_army_gradient"
                      ? "army"
                      : isStyleFooter === "footer_gradient_other"
                      ? "other"
                      : "family"
                  }
                />
              </div>
              <div className={styles.scroll_button_up}>
                <div className={styles.icon_up}>
                  <ScrollButtonUp />
                </div>
              </div>
            </div>
          </div>

          {isOpenModal && (
            <ModalForm
              type={"home"}
              form={isLocale ? ruForm : uaForm}
              setIsOpenModal={setIsOpenModal}
              isOpenModal={isOpenModal}
            />
          )}
        </section>

        {/* <div className={path === "contacts" ? styles.container_binatel_contacts
          : path === "ru/contacts" ? styles.container_binatel_contacts
            : styles.container_binatel_other}>
          
          <div style={isPhoneBin ? {display: "block"} : {display: "none"}}>
            <a
              className={`${path === "contacts" ? styles.phone_bin_contacts
                : path === "ru/contacts" ? styles.phone_bin_contacts
                  : styles.phone_binatel_other} ${"binct-phone-number-2"}`}
              
              style={{ color: "black" }}
              href={`tel:${uaFooterData.Phones["KiyvStar"]}`}
            >
              {uaFooterData.Phones["KiyvStar"]}
            </a>
            <a
              className={`${path === "contacts" ? styles.phone_bin_contacts
                : path === "ru/contacts" ? styles.phone_bin_contacts
                  : styles.phone_binatel_other} ${"binct-phone-number-1"}`}    
              
              style={{ color: "black" }}
              href={`tel:${uaFooterData.Phones["Vodafone"]}`}
            >
              {uaFooterData.Phones["Vodafone"]}
            </a>
          </div>
        </div> */}
      </div>
    )
  );
}
