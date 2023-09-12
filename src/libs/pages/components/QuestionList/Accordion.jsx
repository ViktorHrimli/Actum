"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "@/libs/hooks/hooks";

import arrow from "@/assets/svg/arrow_up.svg";

import styles from "./Accordion.module.scss";

import ClickIcon from "@/libs/components/click/Click";

const colorType = {
  family: "#E32F7A",
  army: "#536641",
  crime: "#3F2E64",
};

export default function Accordion({ title, text, type }) {
  const [isOpen, setIsOpen] = useState(false);

  const color = colorType[type];

  const handleClickOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.div
        initial={false}
        className={styles.header_conteiner}
        animate={{
          backgroundColor: isOpen ? color : "rgba(15, 2, 28, 0.80)",
        }}
        onClick={handleClickOpen}
      >
        <p className={styles.header_text}>{title}</p>
        <motion.div
          animate={{ rotate: isOpen ? "180deg" : "0deg" }}
          transition={{ duration: 0.5 }}
          className={styles.conteiner_icon}
        >
          <Image
            src={arrow}
            alt="arrow"
            fill
            loading="lazy"
            className={styles.icon}
          />
        </motion.div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial={{
              opacity: 0,
              height: 0,
              y: 0,
            }}
            animate={isOpen ? "open" : "close"}
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0, y: "0" },
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className={styles.conteiner_text}>
              <p className={styles.text}>{text}</p>
              <div style={{ marginTop: "50px", display: "block" }}>
                <ClickIcon path={"/test"} color={color} />
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
