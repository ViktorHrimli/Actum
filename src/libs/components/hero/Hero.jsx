"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { useEffect, useState, useIsBig, useIsSmall } from "@/libs/hooks/hooks";

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
} from "./libs/enums/enums";

import watemark from "@/assets/svg/Actum_HERO.png";
import femida from "@/assets/svg/HERO_FEMIDA.png";

import styles from "./Hero.module.scss";

export default function Hero() {
  const [isStep, setIsStep] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const isDesktop = useIsBig();

  useEffect(() => {
    setIsClient(true);

    setTimeout(() => setIsStep(true), 2000);
  }, []);

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

  return (
    <section className={styles.hero_section}>
      {isClient && (
        <motion.div
          animate={isStep ? "step" : "open"}
          variants={watemarkAnimated["variants"]}
          initial={watemarkAnimated["initial"]}
          transition={watemarkAnimated["transition"]}
          className={styles.conteiner_wordmark}
        >
          <Image
            src={watemark}
            alt="ACTUM"
            priority={true}
            placeholder="blur"
            fill
          />
        </motion.div>
      )}
      <motion.div
        className={styles.image_conteiner}
        animate={"open"}
        variants={{ open: { x: 0, y: "0px" } }}
        initial={{ x: "100%", y: "0px" }}
        transition={{ ease: "easeIn", duration: 0.8, delay: isDesktop ? 3 : 1 }}
      >
        <Image
          src={femida}
          alt="Femida"
          priority={true}
          placeholder="blur"
          fill
        />
      </motion.div>

      {/* GRADIENTS */}
      <motion.div
        className={styles.main_gradient}
        animate={"open"}
        variants={{ open: { x: 0, y: "0px", opacity: 1 } }}
        initial={{ x: "100%", y: "0px", opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.8, delay: isDesktop ? 3 : 1 }}
      ></motion.div>
      <motion.div
        animate={"open"}
        variants={{ open: { x: 0, y: "0px", opacity: 1 } }}
        initial={{ x: "100%", y: "0px", opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.8, delay: isDesktop ? 3 : 1 }}
        className={styles.second_gradient}
      ></motion.div>
      <motion.div
        animate={"open"}
        variants={{ open: { x: 0, y: "0px", opacity: 1 } }}
        initial={{ x: "100%", y: "0px", opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.8, delay: isDesktop ? 3 : 1 }}
        className={styles.thirhd_gradient}
      ></motion.div>
      <motion.div
        animate={"open"}
        variants={{ open: { x: 0, y: "0px", opacity: 1 } }}
        initial={{ x: "100%", y: "0px", opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.8, delay: isDesktop ? 3 : 1 }}
        className={styles.fourth_gradient}
      ></motion.div>

      <motion.h2
        animate={isStep ? "step" : "open"}
        variants={titleWatemarkAnimated["variants"]}
        initial={titleWatemarkAnimated["initial"]}
        transition={titleWatemarkAnimated["transition"]}
        className={styles.title_text}
      >
        Адвокатське об’Єднання
      </motion.h2>
      <motion.div
        animate={watemarkLineAnimated["animate"]}
        variants={watemarkLineAnimated["variants"]}
        initial={watemarkLineAnimated["initial"]}
        transition={watemarkLineAnimated["transition"]}
        className={styles.under_line}
      ></motion.div>
      <motion.div
        animate={watemarTextkAnimated["animate"]}
        variants={watemarTextkAnimated["variants"]}
        initial={watemarTextkAnimated["initial"]}
        transition={watemarTextkAnimated["transition"]}
        className={styles.text}
      >
        Дія задля результату
      </motion.div>

      <motion.div
        animate={"open"}
        variants={{ open: { y: "0", opacity: 1 } }}
        initial={{ y: "90px", opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.8, delay: isDesktop ? 3 : 1 }}
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
