"use client";

import styles from "./SideBar.module.scss";
import { motion } from "framer-motion";

export default function MainGradient() {
  return (
    <motion.div
      className={styles.main_gradient}
      key={"main_gradient_side_Bar"}
      animate={"open"}
      variants={{ open: { x: 0, y: "0px", opacity: 1 } }}
      initial={{ x: 0, y: "0px", opacity: 0 }}
      transition={{
        ease: "easeIn",
        type: "keyframes",
        stiffness: 20,
      }}
    ></motion.div>
  );
}
