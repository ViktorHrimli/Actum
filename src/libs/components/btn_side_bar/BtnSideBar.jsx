import { motion } from "framer-motion";

import styles from "./BtnSideBar.module.scss";

export default function BtnSideBar({ onClick, isBarSide }) {
  return (
    <motion.div
      className={styles.burger_menu}
      onClick={onClick}
      animate={"open"}
      variants={{
        open: { x: "0", y: "0", opacity: 1 },
      }}
      initial={{ x: "0px", y: "-55px", opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
    >
      <div
        className={
          isBarSide ? `${styles.bar} ${styles.crossed_left}` : styles.bar
        }
      ></div>
      <div
        className={
          isBarSide ? `${styles.bar} ${styles.crossed_right}` : styles.bar
        }
      ></div>
    </motion.div>
  );
}
