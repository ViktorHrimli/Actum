"use client";
import Image from "next/image";

import styles from "./Direction.module.scss";


export default function Direction() {
  return <section className={styles.direction_section}>
    <div className={styles.direction_container}>
      <div>
        <span className={styles.direction_line}></span>
          <p>наші напрями</p>
        <span className={styles.direction_line}></span>
      </div>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <button></button>
    </div>
  </section>
}