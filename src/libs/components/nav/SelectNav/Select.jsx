"use client";

import { motion, AnimatePresence } from "framer-motion";

import NavSelectItem from "../NavSelectItem/NavSelectItem";

import styles from "./Select.module.scss";

export default function Select({ routes, isOpen, onClick, isMobile }) {
  return (
    <AnimatePresence>
      <motion.div
        key={"menu_conteiner"}
        initial={{ opacity: 0, y: -50 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        exit={{ opacity: 0, y: -50 }}
        className={styles.conteiner}
      >
        {routes && isOpen && (
          <>
            {!isMobile && (
              <div className={styles.hidden_wrapper} onClick={onClick}></div>
            )}
            <ul className={styles.list}>
              {routes.map((item, id) => (
                <NavSelectItem key={id} {...item} onClick={onClick} />
              ))}
            </ul>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
