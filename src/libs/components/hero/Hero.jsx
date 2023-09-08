"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { useEffect, useState, useIsBig, usePathname } from "@/libs/hooks/hooks";

import Button from "../button/Button";

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

import watemark from "@/assets/svg/Actum_HERO.png";

import Images from "./Images";

import styles from "./Hero.module.scss";

export default function Hero() {
  const [isStep, setIsStep] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [screenWidth, setscreenWidth] = useState(0);
  const [isRender, setIsRender] = useState(false);

  const isDesktop = useIsBig();
  const path = usePathname();

  const isHome = path === "/";

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

    document.body.style.overflow = "hidden";
    document.body.style.maxHeight = "100vh";

    setTimeout(
      () => {
        document.body.style.overflowX = "hidden";
        document.body.style.maxHeight = "";
      },
      isDesktop ? 4000 : 2000
    );

    setTimeout(() => setIsStep(true), 2000);
    setTimeout(() => setIsRender(true), isDesktop ? 3500 : 1200);
  }, []);

  return (
    <section className={styles.hero_section}>
      {isClient && (
        <motion.div
          key={"watemark"}
          animate={isHome ? watemarkAnimated["animate"](isStep) : false}
          variants={isHome ? watemarkAnimated["variants"] : false}
          initial={isHome ? watemarkAnimated["initial"] : false}
          transition={watemarkAnimated["transition"]}
          className={styles.conteiner_wordmark}
        >
          <Image
            src={watemark}
            alt="ACTUM"
            priority={true}
            placeholder="blur"
            // sizes="(min-width: 320px) 20vw, (min-width: 768px) 50vw, (min-width: 1280px) 50vw"
            fill
          />
        </motion.div>
      )}

      <motion.div
        key={"femida"}
        className={styles.image_conteiner}
        animate={"open"}
        variants={{ open: { x: 0, y: "0px", opacity: 1 } }}
        initial={{ x: "50px", y: "0px", opacity: 0 }}
        transition={{
          type: "keyframes",
          ease: "easeInOut",
          stiffness: 400,
          duration: isDesktop ? 0.8 : 3.5,
          delay: isDesktop ? 3.5 : 0.5,
        }}
      >
        <Images />
        {/* <Image
          src={femida}
          alt="Femida"
          fetchPriority="low"
          placeholder="blur"
          fill
          sizes="(min-width: 320px) 90vw, (min-width: 768px) 100vw, (min-width: 1280px) 60vw"
        /> */}
      </motion.div>

      {/* GRADIENTS */}

      <motion.div
        key={"main_gradient"}
        className={styles.main_gradient}
        animate={gradientVariants["animate"]}
        variants={gradientVariants["variants"]}
        initial={gradientVariants["initial"]}
        transition={gradientVariants["transition"](isDesktop)}
      ></motion.div>

      <motion.div
        key={"second_gradient"}
        animate={gradientVariants["animate"]}
        variants={gradientVariants["variants"]}
        initial={gradientVariants["initial"]}
        transition={gradientVariants["transition"](isDesktop)}
        className={styles.second_gradient}
      ></motion.div>

      <motion.div
        key={"thirhd_gradient"}
        animate={gradientVariants["animate"]}
        variants={gradientVariants["variants"]}
        initial={gradientVariants["initial"]}
        transition={gradientVariants["transition"](isDesktop)}
        className={styles.thirhd_gradient}
      ></motion.div>

      <motion.div
        key={"fourth_gradient"}
        animate={gradientVariants["animate"]}
        variants={gradientVariants["variants"]}
        initial={gradientVariants["initial"]}
        transition={gradientVariants["transition"](isDesktop)}
        className={styles.fourth_gradient}
      ></motion.div>

      {/* GRADIENT END */}
      {isClient ? (
        <motion.h2
          key={"title_text"}
          animate={isHome ? titleWatemarkAnimated["animate"](isStep) : false}
          variants={titleWatemarkAnimated["variants"]}
          initial={
            isHome ? titleWatemarkAnimated["initial"](screenWidth) : false
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
          animate={isHome ? watemarkLineAnimated["animate"] : false}
          variants={watemarkLineAnimated["variants"]}
          initial={
            isHome ? watemarkLineAnimated["initial"](screenWidth) : false
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
          animate={isHome ? watemarTextkAnimated["animate"] : false}
          variants={watemarTextkAnimated["variants"]}
          initial={
            isHome ? watemarTextkAnimated["initial"](screenWidth) : false
          }
          transition={watemarTextkAnimated["transition"]}
          className={styles.text}
        >
          Дія задля результату
        </motion.div>
      ) : (
        <div style={{ height: "400px" }}></div>
      )}

      <motion.div
        animate={"open"}
        key={"btn_wrapper"}
        variants={{ open: { y: "0", opacity: 1 } }}
        initial={{ y: "90px", opacity: 0 }}
        transition={{
          ease: "easeIn",
          duration: isDesktop ? 1 : 2,
          delay: isDesktop ? 3 : 0,
        }}
        className={styles.btn_wrapper}
      >
        <Link href={"/book"}>
          <Button
            onClick={() => {}}
            type={"button"}
            text="замовити консультацію"
            style="button_prymary"
          />
        </Link>
      </motion.div>
    </section>
  );
}
