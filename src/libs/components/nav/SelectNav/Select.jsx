"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "@/shared/hooks/hooks";

import NavSelectItem from "../NavSelectItem/NavSelectItem";

import styles from "./Select.module.scss";

export default function Select({ routes, isOpen, onClick, isMobile, locale }) {
  const [isCurrent, setisCurrent] = useState(null);

  return (
    <AnimatePresence>
      <motion.div
        key={"menu_conteiner"}
        initial={{ opacity: 0, y: -50 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        exit={{ opacity: 0, y: -50 }}
        className={styles.conteiner}
        aria-expanded={isOpen}
      >
        {routes && isOpen && (
          <>
            {!isMobile && (
              <div className={styles.hidden_wrapper} onClick={onClick}></div>
            )}
            <ul className={styles.list} aria-expanded={isOpen}>
              {routes.map((item, id) => (
                <NavSelectItem
                  key={id}
                  id={id}
                  locale={locale}
                  setisCurrent={setisCurrent}
                  isCurrent={isCurrent}
                  onClick={onClick}
                  {...item}
                />
              ))}
            </ul>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
