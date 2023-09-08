"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import Button from "@/libs/components/button/Button";

import watemark from "@/assets/svg/Actum_HERO.png";

import styles from "./NestedHero.module.scss";
import Link from "next/link";

export default function NestedHero({ img, text }) {
  return (
    <section className={styles.section}>
      <Image
        src={img}
        alt="bacground photo"
        fill
        priority={true}
        style={{ zIndex: -1, objectFit: "cover" }}
        sizes="100vw"
      />

      <div className={styles.conteiner_hero_watemark}>
        <motion.div
          animate={"start"}
          variants={{ start: { scale: 1, opacity: 1 } }}
          initial={{ scale: 0.5, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className={styles.title_wotemark}
        >
          <Image src={watemark} alt="ACTUM" fill loading="eager" />
        </motion.div>
        <motion.h2
          animate={"open"}
          variants={{ open: { x: 0, y: 0, opacity: 1 } }}
          initial={{ x: "100%", opacity: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className={styles.title_text}
        >
          {text}
        </motion.h2>
      </div>

      <div className={styles.wrapper_btn}>
        <Link href={"/book"}>
          <Button
            type="button"
            text="замовити консультацію"
            style="button_prymary"
          />
        </Link>
      </div>

      <div className={styles.section_background}></div>
    </section>
  );
}
