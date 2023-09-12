"use client";

import styles from "./SideBar.module.scss";
import { motion } from "framer-motion";

export default function MainGradient({ isStyleHeader }) {
  return <div className={styles[isStyleHeader] || styles.main_gradient}></div>;
}
