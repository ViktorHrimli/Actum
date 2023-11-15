"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useReducer, useEffect, useState } from "@/shared/hooks/hooks";

import NavSelectItem from "../NavSelectItem/NavSelectItem";

import styles from "./Select.module.scss";

const reducer = (_, action) => {
  switch (action.type) {
    case "/paid-priority-family":
      return {
        "/paid-priority-family": action.payload,
        "/paid-priority-crime": false,
        "/paid-priority-army": false,
        "/paid-priority-dtp": false,
      };
    case "/paid-priority-crime":
      return {
        "/paid-priority-family": false,
        "/paid-priority-crime": action.payload,
        "/paid-priority-dtp": false,

        "/paid-priority-army": false,
      };
    case "/paid-priority-army":
      return {
        "/paid-priority-family": false,
        "/paid-priority-crime": false,
        "/paid-priority-dtp": false,
        "/paid-priority-army": action.payload,
      };
    case "/paid-priority-dtp":
      return {
        "/paid-priority-family": false,
        "/paid-priority-crime": false,
        "/paid-priority-army": false,
        "/paid-priority-dtp": action.payload,
      };
  }
};

const initital = {
  "/paid-priority-family": false,
  "/paid-priority-crime": false,
  "/paid-priority-army": false,
  "/paid-priority-dtp": false,
};

export default function Select({ routes, isOpen, onClick, isMobile }) {
  const [isOpenIndex, dispatch] = useReducer(reducer, initital);

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
                  dispatch={dispatch}
                  id={id}
                  isOpenIndex={isOpenIndex}
                  {...item}
                  onClick={onClick}
                />
              ))}
            </ul>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
