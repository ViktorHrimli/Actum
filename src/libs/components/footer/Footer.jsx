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
  const [isStyleFooter, setIsStyleFooter] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isLocale, setIsLocale] = useState("");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScroll, setIsScroll] = useState(null);

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
  const army = path.includes("army");
  const family = path.includes("fami");
  const admin = path.includes("admin");
  const credit = path.includes("credit");
  const dtp = path.includes("dtp");
  const land = path.includes("land");
  const reality = path.includes("reality");

  const handleClickOnBtn = () => {
    getFormById("form_section");

    switch (path) {
      case "home":
        setIsOpenModal(false);
        break;
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
    if (isFristRender) {
      setTimeout(() => setIsClient(true), 3800);
    } else {
      setTimeout(() => setIsClient(true), 1000);
    }
  }, [isFristRender]);

  useEffect(() => {
    setIsLocale(localStorage.getItem("locale") || "");
    switch (true) {
      case army:
        setIsStyleFooter(footerEnums["army"]);
        return;

      case crime:
        setIsStyleFooter(footerEnums["crime"]);
        return;

      case family:
        setIsStyleFooter(footerEnums["family"]);
        return;

      case admin:
        setIsStyleFooter(footerEnums["other"]);
        return;

      case credit:
        setIsStyleFooter(footerEnums["other"]);
        return;

      case dtp:
        setIsStyleFooter(footerEnums["other"]);
        return;

      case land:
        setIsStyleFooter(footerEnums["other"]);
        return;

      case reality:
        setIsStyleFooter(footerEnums["other"]);
        return;

      default:
        setIsStyleFooter(null);
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

  return (
    isClient && (
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
            </p>
            <div className={styles.display_none}>
              <p className={styles.footer_title}>
                {isLocale ? "Главный офис" : "Головний офіс"}:
              </p>
              <p className={styles.footer_text}>
                {isLocale ? ruFooterData.address : uaFooterData.address}
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
                <Link
                  className={styles.phone}
                  href={`tel:${uaFooterData.Phones["KiyvStar"]}`}
                >
                  {uaFooterData.Phones["KiyvStar"]}
                </Link>
                <Link
                  className={styles.phone}
                  href={`tel:${uaFooterData.Phones["Vodafone"]}`}
                >
                  {uaFooterData.Phones["Vodafone"]}
                </Link>
              </div>
            </div>
            <div className={styles.footer_contact}>
              <p className={styles.footer_contact_title}>Email:</p>
              <Link
                className={styles.email}
                href={`mailto:${uaFooterData.email}`}
              >
                {uaFooterData.email}
              </Link>
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
    )
  );
}
