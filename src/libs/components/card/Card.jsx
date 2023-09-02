import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Card.module.scss";

export default function Card({ name, photo, date, body, isStart }) {
  return (
    <AnimatePresence>
      <motion.li
        key={name}
        className={styles.conteiner}
        initial={{ opacity: 0, x: isStart ? 200 : -200 }}
        variants={{ open: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.7 }}
        exit={{ x: -200, opacity: 0 }}
        animate={"open"}
      >
        <div className={styles.wrapper_image}>
          <Image src={photo} alt="Person" fill loading="lazy" />
        </div>

        <p className={styles.text_name}>{name}</p>
        <p className={styles.text}>{body}</p>

        <span className={styles.date}>{date}</span>
      </motion.li>
    </AnimatePresence>
  );
}
