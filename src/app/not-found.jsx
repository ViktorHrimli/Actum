"use client";
import Link from "next/link";
import styles from "./page.module.scss";

export default function NotFound() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0F021C",
        gap: "40px",
        overflow: "hidden",
      }}
    >
      <h1>Щось сталось (:</h1>

      <div
        className={styles.error_text}
        onClick={() => window.location.reload()}
      >
        <h2>Повернутися на головну</h2>
      </div>
    </div>
  );
}
