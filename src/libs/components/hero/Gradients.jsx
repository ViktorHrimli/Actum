"use client";

import { motion } from "framer-motion";

import styles from "./Hero.module.scss";

export default function Gradients({
  gradientVariants,
  isLoad = true,
  isDesktop,
  isClient,
  isSessionStorageSave,
}) {
  return (
    isClient && (
      <>
        <motion.div
          key={"main_gradient"}
          className={styles.main_gradient}
          animate={
            isSessionStorageSave ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={isSessionStorageSave ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
        ></motion.div>

        <motion.div
          key={"second_gradient"}
          animate={
            isSessionStorageSave ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={isSessionStorageSave ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
          className={styles.second_gradient}
        ></motion.div>

        <motion.div
          key={"thirhd_gradient"}
          animate={
            isSessionStorageSave ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={isSessionStorageSave ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
          className={styles.thirhd_gradient}
        ></motion.div>

        <motion.div
          key={"fourth_gradient"}
          animate={
            isSessionStorageSave ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={isSessionStorageSave ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
          className={styles.fourth_gradient}
        ></motion.div>
        <motion.div
          key={"moz_gradient_second"}
          animate={
            isSessionStorageSave ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={isSessionStorageSave ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
          className={styles.moz_gradient_second}
        ></motion.div>
        <motion.div
          key={"moz_gradient_thirhd"}
          animate={
            isSessionStorageSave ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={isSessionStorageSave ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
          className={styles.moz_gradient_thirhd}
        ></motion.div>
      </>
    )
  );
}
