"use client";
import Image from "next/image";

import {
  useState,
  useEffect,
  usePathname,
  useClient,
} from "@/shared/hooks/hooks";
import { motion } from "framer-motion";

import Button from "@/libs/components/button/Button";
import ModalForm from "@/libs/modal/modalForm/modalForm";

import styles from "./NestedHero.module.scss";
import { getFormById } from "@/shared/helpers/helpers";

export default function NestedHero({
  type,
  background_photo,
  description,
  title,
  actum,
  button,
  form = {},
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScroll, setIsScroll] = useState(0);
  const [isPaymentHero, setIsPaymentHero] = useState(false);
  const isClient = useClient();

  const path = usePathname();
  const patnName = path.replace("/", "");

  const handleClickOnBtn = () => {
    getFormById("form_section");

    if (patnName === "book") {
      setIsOpenModal(false);
    } else if (patnName === "ru/book") {
      setIsOpenModal(false);
    } else {
      setIsOpenModal(true);
    }
  };

  let IS_FIRST_RENDER;

  if (typeof window !== "undefined") {
    IS_FIRST_RENDER = JSON.parse(sessionStorage.getItem(title) || true);
  }

  useEffect(() => {
    sessionStorage.setItem(title, "false");

    if (patnName === "payment-success") {
      setIsPaymentHero(true);
    }
  }, [patnName, title]);

  useEffect(() => {
    if (isOpenModal) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isOpenModal, isScroll]);

  return (
    <section>
      <h5 hidden>
        <strong>{title}</strong>
      </h5>
      <div className={styles.background_page}></div>

      <article className={styles.section}>
        <Image
          src={background_photo["data"]["attributes"]["url"]}
          alt="background photo"
          fill
          // priority={true}
          style={{ zIndex: -1, objectFit: "cover" }}
          loading="lazy"
          sizes="100vw"
        />

        <section
          className={styles.conteiner_hero_watemark}
          style={isPaymentHero ? { marginTop: "74px" } : { marginTop: "0px" }}
        >
          <motion.div
            // animate={IS_FIRST_RENDER ? "start" : false}
            animate={false}
            viewport={{ once: true }}
            variants={{ start: { scale: 1, opacity: 1 } }}
            // initial={IS_FIRST_RENDER ? { scale: 0.5, opacity: 0 } : false}
            initial={false}
            transition={{ delay: 0.5, duration: 0.7 }}
            className={styles.title_wotemark}
          >
            <Image
              src={actum["data"]["attributes"]["url"]}
              alt="ACTUM"
              fill
              loading="lazy"
              // priority={true}
              sizes="(max-width: 768px) 250px, (max-width: 1280px) 500px, 700px"
            />
          </motion.div>
          {patnName === "blog-3-1" || patnName === "ru/blog-3-1" ? 
            <motion.p
              // animate={IS_FIRST_RENDER ? "open" : false}
              animate={false}
              variants={{ open: { x: 0, y: 0, opacity: 1 } }}
              // initial={IS_FIRST_RENDER ? { x: "100%", opacity: 0 } : false}
              initial={false}
              transition={{ delay: 1, duration: 0.7 }}
              className={styles.title_text}
            >
              {title}
            </motion.p>
            :
            <motion.h1
              // animate={IS_FIRST_RENDER ? "open" : false}
              animate={false}
              variants={{ open: { x: 0, y: 0, opacity: 1 } }}
              // initial={IS_FIRST_RENDER ? { x: "100%", opacity: 0 } : false}
              initial={false}
              transition={{ delay: 1, duration: 0.7 }}
              className={styles.title_text}
            >
              {title}
            </motion.h1>
            } 
          <motion.p
            // animate={IS_FIRST_RENDER ? "open" : false}
            animate={false}
            variants={{ open: { x: 0, y: 0, opacity: 1 } }}
            // initial={IS_FIRST_RENDER ? { x: "100%", opacity: 0 } : false}
            initial={false}
            transition={{ delay: 1, duration: 0.7 }}
            className={styles.paragraph}
          >
            {description && description}
          </motion.p>
        </section>
        {!isPaymentHero && isClient && (
          <div className={styles.wrapper_btn} onClick={handleClickOnBtn}>
            <Button
              type="button"
              text={button["text"]}
              style="button_prymary"
            />
          </div>
        )}
        <div className={styles.section_background}></div>
      </article>
      {isOpenModal && (
        <ModalForm
          type={type}
          form={form}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
        />
      )}
    </section>
  );
}
