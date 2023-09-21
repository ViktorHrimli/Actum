"use client";
import Image from "next/image";

import tabBack from "@/assets/svg/background-tab.png";
import tabBackFilter from "@/assets/svg/background-tab-filter.png";


import desctopBack from "@/assets/svg/desctop_backround.png";
import desctopBackFilter from "@/assets/svg/desctop-filter.png";


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
          animate={
            isSessionStorageSave ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={isSessionStorageSave ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
        >
            <Image className={styles.back_tab} src={tabBack} alt="background" fill loading="eager" />
            <Image className={styles.back_desctop} src={desctopBack} alt="background" fill loading="eager" />
        </motion.div>

        <motion.div
          key={"second_gradient"}
          animate={
            isSessionStorageSave ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={isSessionStorageSave ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
        >
          <Image className={styles.teb_back_filter} src={tabBackFilter} alt="background-filter" fill loading="eager"/>
          <Image className={styles.back_desctop_filter} src={desctopBackFilter} alt="background-filter" fill loading="eager"/>
        </motion.div>
      </>
    )
  );
}
