"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, usePathname, useEffect } from "@/shared/hooks/hooks";

import styles from "./Accordion.module.scss";

import arrow from "@/assets/svg/arrow_up.svg";
import ClickIcon from "@/shared/components/click/Click";

import { themsColor } from "@/shared/enums/enum";

export default function Accordion({
  title,
  description,
  type,
  link,
  id,
  isCurent,
  setIsCurent,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname().replace("/", "");

  const { fill } = themsColor[type];

  const handleClickOpen = () => setIsCurent(isOpen ? false : id);

  useEffect(() => {
    if (isCurent === id) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isCurent, id]);

  return (
    <>
      <motion.div
        initial={false}
        className={styles.header_conteiner}
        animate={{
          backgroundColor: isOpen ? fill : "rgba(15, 2, 28, 0.80)",
        }}
        onClick={handleClickOpen}
      >
        <h2 className={styles.header_text}>{title}</h2>
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
              <p className={styles.text}>{description}</p>
              <div style={{ marginTop: "50px", display: "block" }}>
                <ClickIcon
                  path={link ? `${pathName}/${link}` : false}
                  color={fill}
                />
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
