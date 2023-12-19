"use client";

import Link from "next/link";

export default function Custom500() {
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
      <Link
        className={styles.error_text}
        href={"/"}
        onClick={() => window.location.reload()}
      >
        <h2>Повернутися на головну</h2>
      </Link>
    </div>
  );
}
