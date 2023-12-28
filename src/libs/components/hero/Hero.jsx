"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  useEffect,
  useState,
  useIsBig,
  useIsSmall,
} from "@/shared/hooks/hooks";

import ModalForm from "@/libs/modal/modalForm/modalForm";

const Animations = dynamic(() => import("./Animations"), { ssr: false });

import styles from "./Hero.module.scss";

import back from "@/assets/svg/mobile_background_gradient.png";
import backFilter from "@/assets/svg/hero-background_filter.png";

export default function Hero({
  type,
  title_text,
  underline_text,
  Actum_Logo,
  button,
  form,
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScroll, setIsScroll] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const isDesktop = useIsBig();
  const isMobile = useIsSmall();

  let isSessionStorageSave = true;

  if (typeof window !== "undefined") {
    isSessionStorageSave = JSON.parse(
      sessionStorage.getItem("hero_page") || true
    );
  }

  useEffect(() => {
    const scrollY = document.body.style.top;
    const hero = document.getElementById("hero_section");

    if (isSessionStorageSave) {
      hero.style.overflowY = "hidden";
      document.body.style.position = "fixed";

      document.body.style.left = "50%";
      document.body.style.transform = "translateX(-50%)";

      document.body.style.overflow = "hidden";

      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    setTimeout(
      () => {
        hero.style.overflowY = "";
        document.body.style.overflow = "";
        document.body.style.height = "auto";
        document.body.style.left = "0%";
        document.body.style.transform = "";

        document.body.style.position = "initial";
        document.body.style.top = "";
      },
      isDesktop ? 4000 : 3500
    );

    // FUCKING CRUTHC >>>>>>>>>>>>>>>>>>>>
    setTimeout(() => setIsClient(true), 300);
  }, [isDesktop]);

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
    <>
      <section className={styles.hero_section}>
        {isClient && isMobile && (
          <motion.div
            animate={isSessionStorageSave ? { opacity: 1 } : false}
            transition={{ duration: 0.5, delay: 1.5 }}
            initial={isSessionStorageSave ? { opacity: 0 } : false}
            className={styles.wrapper_image}
          >
            <div className={styles.background_page}></div>
            <Image
              src={back}
              alt="background"
              fill
              priority={true}
              fetchPriority="high"
              loading="eager"
            />
            <Image
              src={backFilter}
              alt="background-filter"
              fill
              priority={true}
              fetchPriority="high"
              loading="eager"
              style={{ zIndex: "5" }}
            />
          </motion.div>
        )}

        <article id="hero_section" className={styles.hero_conteiner}>
          <h2 hidden>
            <strong>{title_text}</strong>
            {underline_text}
          </h2>
          <Animations
            isSessionStorageSave={isSessionStorageSave}
            setIsOpenModal={setIsOpenModal}
            title_text={title_text}
            underline_text={underline_text}
            Actum_Logo={Actum_Logo}
            button={button}
          />
        </article>
      </section>
      {isOpenModal && (
        <ModalForm
          type={type}
          form={form}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
        />
      )}
    </>
  );
}
