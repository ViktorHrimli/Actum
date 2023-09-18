"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import Button from "@/libs/components/button/Button";

import watemark from "@/assets/svg/Actum_HERO.png";

import { getFormById } from "@/shared/helpers/helpers";
import { useEffect } from "@/libs/hooks/hooks";

import styles from "./NestedHero.module.scss";

export default function NestedHero({ img, text }) {
  const handleClickOnBtn = () => {
    getFormById("form_section");
  };

  let IS_FIRST_RENDER = JSON.parse(sessionStorage.getItem(text) || true);

  useEffect(() => {
    sessionStorage.setItem(text, "false");
  }, []);

  return (
    <section className={styles.section}>
      <Image
        src={img}
        alt="background photo"
        fill
        priority={true}
        style={{ zIndex: -1, objectFit: "cover" }}
        loading="eager"
        sizes="100vw"
      />

      <div className={styles.conteiner_hero_watemark}>
        <motion.div
          animate={IS_FIRST_RENDER ? "start" : false}
          viewport={{ once: true }}
          variants={{ start: { scale: 1, opacity: 1 } }}
          initial={IS_FIRST_RENDER ? { scale: 0.5, opacity: 0 } : false}
          transition={{ delay: 0.5, duration: 0.7 }}
          className={styles.title_wotemark}
        >
          <Image
            src={watemark}
            alt="ACTUM"
            fill
            loading="eager"
            priority={true}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 250px, (max-width: 1280px) 500px, 700px"
          />
        </motion.div>
        <motion.h2
          animate={IS_FIRST_RENDER ? "open" : false}
          variants={{ open: { x: 0, y: 0, opacity: 1 } }}
          initial={IS_FIRST_RENDER ? { x: "100%", opacity: 0 } : false}
          transition={{ delay: 1, duration: 0.7 }}
          className={styles.title_text}
        >
          {text}
        </motion.h2>
      </div>

      <div className={styles.wrapper_btn} onClick={handleClickOnBtn}>
        <Button
          type="button"
          text="замовити консультацію"
          style="button_prymary"
        />
      </div>

      <div className={styles.section_background}></div>
    </section>
  );
}
