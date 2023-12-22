"use client";

import { useEffect, useRouter } from "@/shared/hooks/hooks";

import styles from "./page.module.scss";

export default function NotFound() {
  const route = useRouter();
  const clickPush = () => {
    route.push("/");
  };
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

      <div className={styles.error_text} onClick={clickPush}>
        <h2>Повернутися на головну</h2>
      </div>
    </div>
  );
}
