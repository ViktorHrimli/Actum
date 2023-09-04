"use client";

import { motion } from "framer-motion";

import NavSelectItem from "../NavSelectItem/NavSelectItem";

import styles from "./Select.module.scss";

export default function Select({ routes }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={styles.conteiner}
    >
      <ul className={styles.list}>
        {routes &&
          routes.map((item, id) => (
            <NavSelectItem key={id} {...item} motion={motion} />
          ))}
      </ul>
    </motion.div>
  );
}
