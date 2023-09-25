"use client";
import { useRouter } from "next/navigation";

import styles from "@/app/page.module.scss";
export default function NotFound() {
  const router = useRouter();

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
      <p className={styles.error_text} onClick={() => router.push("/")}>
        На главную
      </p>
    </div>
  );
}
