"use client";

import { motion, AnimatePresence } from "framer-motion";

import NavSelectItem from "../NavSelectItem/NavSelectItem";

import styles from "./Select.module.scss";

export default function Select({ routes, isOpen, onClick }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isOpen ? "open" : "step"}
        variants={{ open: { y: 0, opacity: 1 }, step: { opacity: 0, y: -50 } }}
        transition={{ duration: 0.7 }}
        className={styles.conteiner}
      >
        {routes && (
          <ul className={styles.list}>
            {routes.map((item, id) => (
              <NavSelectItem key={id} {...item} onClick={onClick} />
            ))}
          </ul>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
