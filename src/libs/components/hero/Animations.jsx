"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import femida from "@/assets/svg/HERO_FEMIDA.png";
import watemark from "@/assets/svg/Actum_HERO.png";

import {
  useState,
  useIsBig,
  useIsTabOrSmallLaptop,
  useEffect,
} from "@/libs/hooks/hooks";

import Button from "../button/Button";
import Gradients from "./Gradients";

import styles from "./Hero.module.scss";

import {
  desktopAnimateWatemark,
  mobileAnimateWatemark,
  desktopTitleTextWatemark,
  desktopWatemarkLine,
  desktopWatemarkText,
  mobileTitleTextWatemark,
  mobileWatemarkLine,
  mobileWatemarkText,
  gradientVariants,
} from "./libs/enums/enums";

export default function Animations({ isSessionStorageSave = true }) {
  const [isStep, setIsStep] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [screenWidth, setscreenWidth] = useState(0);
  const [isLoad, setIsLoad] = useState(false);

  const isDesktop = useIsBig();
  const isSmallLaptopOrTab = useIsTabOrSmallLaptop();

  const watemarkAnimated = isDesktop
    ? desktopAnimateWatemark
    : mobileAnimateWatemark;
  const titleWatemarkAnimated = isDesktop
    ? desktopTitleTextWatemark
    : mobileTitleTextWatemark;
  const watemarTextkAnimated = isDesktop
    ? desktopWatemarkText
    : mobileWatemarkText;
  const watemarkLineAnimated = isDesktop
    ? desktopWatemarkLine
    : mobileWatemarkLine;

  useEffect(() => {
    setIsClient(true);
    setscreenWidth(window.innerWidth);

    setTimeout(() => setIsStep(true), 1000);
    setTimeout(() => setIsLoad(true), isDesktop ? 3000 : 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      sessionStorage.setItem("hero_page", "false");
    }, 3000);
  }, []);

  return (
    <>
      {isClient && (
        <motion.div
          key={"watemark"}
          animate={
            isSessionStorageSave ? watemarkAnimated["animate"](isStep) : false
          }
          variants={watemarkAnimated["variants"]}
          initial={
            isSessionStorageSave
              ? watemarkAnimated["initial"](isSmallLaptopOrTab, screenWidth)
              : false
          }
          transition={watemarkAnimated["transition"]}
          className={styles.conteiner_wordmark}
        >
          <Image
            src={watemark}
            alt="ACTUM"
            fetchPriority="high"
            priority={true}
            placeholder="blur"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 250px, (max-width: 1280px) 500px, 700px"
            fill
          />
        </motion.div>
      )}

      {isClient && (
        <motion.div
          key={"femida"}
          className={styles.image_conteiner}
          animate={isSessionStorageSave ? "open" : false}
          variants={{ open: { x: 0, opacity: 1 } }}
          initial={
            isSessionStorageSave
              ? { x: isDesktop ? 500 : 50, opacity: 0 }
              : false
          }
          transition={{
            duration: isDesktop ? 1 : 0.5,
            delay: 1.5,
          }}
        >
          <Image
            src={femida}
            alt="Femida"
            priority={true}
            placeholder="blur"
            fetchPriority="high"
            sizes="(max-width: 768px) 700px, (max-width: 1280px) 900px, 1300px"
            fill
          />
        </motion.div>
      )}

      <Gradients
        gradientVariants={gradientVariants}
        isClient={isClient}
        isDesktop={isDesktop}
        isLoad={isLoad}
      />

      {isClient ? (
        <motion.h2
          key={"title_text"}
          animate={
            isSessionStorageSave
              ? titleWatemarkAnimated["animate"](isStep)
              : false
          }
          variants={titleWatemarkAnimated["variants"]}
          initial={
            isSessionStorageSave
              ? titleWatemarkAnimated["initial"](screenWidth)
              : false
          }
          transition={titleWatemarkAnimated["transition"]}
          className={styles.title_text}
        >
          Адвокатське об’Єднання
        </motion.h2>
      ) : (
        <div style={{ height: "90px" }}></div>
      )}

      {isClient ? (
        <motion.div
          key={"under_line"}
          animate={
            isSessionStorageSave
              ? watemarkLineAnimated["animate"](isStep)
              : false
          }
          variants={watemarkLineAnimated["variants"]}
          initial={
            isSessionStorageSave
              ? watemarkLineAnimated["initial"](screenWidth)
              : false
          }
          transition={watemarkLineAnimated["transition"]}
          className={styles.under_line}
        ></motion.div>
      ) : (
        <div style={{ height: "21px" }}></div>
      )}

      {isClient ? (
        <motion.div
          key={"text"}
          animate={
            isSessionStorageSave
              ? watemarTextkAnimated["animate"](isStep)
              : false
          }
          variants={watemarTextkAnimated["variants"]}
          initial={
            isSessionStorageSave
              ? watemarTextkAnimated["initial"](screenWidth)
              : false
          }
          transition={watemarTextkAnimated["transition"]}
          className={styles.text}
        >
          Дія задля результату
        </motion.div>
      ) : (
        <div style={{ height: "400px" }}></div>
      )}

      {isClient && (
        <motion.div
          animate={isSessionStorageSave ? isStep && "open" : false}
          onClick={() => setIsOpenModal(true)}
          key={"btn_wrapper"}
          variants={{ open: { y: "0", opacity: 1 } }}
          initial={isSessionStorageSave ? { y: "90px", opacity: 0 } : false}
          transition={{
            duration: 0.6,
            delay: 1.1,
          }}
          className={styles.btn_wrapper}
        >
          <Button
            onClick={() => {}}
            type={"button"}
            text="замовити консультацію"
            style="button_prymary"
          />
        </motion.div>
      )}
    </>
  );
}
