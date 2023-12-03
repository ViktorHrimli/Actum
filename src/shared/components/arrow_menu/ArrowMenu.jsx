"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import arrow from "@/assets/svg/arrow_up.svg";

import styles from "./ArrowMenu.module.scss";

export default function ArrowMenu({
  isOpenSelect = false,
  setIsCurrent = () => {},
  id = 0,
  setIsOpen = () => {},
  isOpen = false,
  isHaveList = true,
}) {
  return (
    <motion.div
      onClick={() =>
        (isOpenSelect ? setIsCurrent(false) : setIsCurrent(id)) &
        setIsOpen(!isOpen)
      }
      className={styles.img_wrapper}
      animate={{
        rotate: isOpenSelect || isOpen ? "180deg" : "0deg",
        scale: isOpenSelect || isOpen ? 1.2 : 1,
      }}
      initial={{ x: 0 }}
      transition={{ duration: 0.8 }}
      aria-pressed={isOpenSelect}
      style={{
        opacity: isHaveList ? 1 : 0,
        pointerEvents: isHaveList ? "all" : "none",
      }}
      role="button"
    >
      <Image src={arrow} alt="arrow" fill loading="lazy" sizes="24px" />
    </motion.div>
  );
}
