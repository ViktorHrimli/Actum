"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { useEffect, useState } from "@/libs/hooks/hooks";

import Button from "../button/Button";

import watemark from "@/assets/svg/Actum_HERO.png";
import femida from "@/assets/svg/HERO_FEMIDA.png";

import styles from "./Hero.module.scss";
import Link from "next/link";

export default function Hero() {
  const [isStep, setIsStep] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsStep(true), 2000);
  }, []);
  return (
    <section className={styles.hero_section}>
      <motion.div
        animate={isStep ? "step" : "open"}
        variants={{
          open: { x: "300px" },
          step: { x: "0", y: "0", scale: 1 },
        }}
        initial={{ x: "200%", y: "90px", scale: 1.2 }}
        exit={{ x: "0", y: "0px", scale: 1 }}
        transition={{ ease: "easeIn", duration: 0.8, delay: 1 }}
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

      <motion.div
        className={styles.image_conteiner}
        animate={"open"}
        variants={{ open: { x: 0, y: "0px" } }}
        initial={{ x: "100%", y: "0px" }}
        transition={{ ease: "easeIn", duration: 0.8, delay: 3 }}
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
        transition={{ ease: "easeIn", duration: 0.8, delay: 3 }}
      ></motion.div>
      <motion.div
        animate={"open"}
        variants={{ open: { x: 0, y: "0px", opacity: 1 } }}
        initial={{ x: "100%", y: "0px", opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.8, delay: 3 }}
        className={styles.second_gradient}
      ></motion.div>
      <motion.div
        animate={"open"}
        variants={{ open: { x: 0, y: "0px", opacity: 1 } }}
        initial={{ x: "100%", y: "0px", opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.8, delay: 3 }}
        className={styles.thirhd_gradient}
      ></motion.div>
      <motion.div
        animate={"open"}
        variants={{ open: { x: 0, y: "0px", opacity: 1 } }}
        initial={{ x: "100%", y: "0px", opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.8, delay: 3 }}
        className={styles.fourth_gradient}
      ></motion.div>

      <motion.h2
        animate={isStep ? "step" : "open"}
        variants={{ open: { x: "250px" }, step: { x: "0", y: "0" } }}
        initial={{ x: "110%", y: "90px" }}
        exit={{ x: "0", y: "0px" }}
        transition={{ ease: "easeIn", duration: 0.8, delay: 1 }}
        className={styles.title_text}
      >
        Адвокатське об’Єднання
      </motion.h2>
      <motion.div
        animate={"open"}
        variants={{ open: { x: "0" } }}
        initial={{ x: "-150%" }}
        exit={{ x: "0", y: "0px" }}
        transition={{ ease: "easeIn", duration: 0.8, delay: 3 }}
        className={styles.under_line}
      ></motion.div>
      <motion.div
        animate={"open"}
        variants={{ open: { x: "0" } }}
        initial={{ x: "-100%" }}
        exit={{ x: "0", y: "0px" }}
        transition={{ ease: "easeIn", duration: 0.8, delay: 3 }}
        className={styles.text}
      >
        Дія задля результату
      </motion.div>

      <motion.div
        animate={"open"}
        variants={{ open: { y: "0", opacity: 1 } }}
        initial={{ y: "90px", opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.8, delay: 3 }}
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
