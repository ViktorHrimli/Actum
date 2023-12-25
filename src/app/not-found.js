import Link from "next/link";

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
      }}
    >
      <h2>Нічого не знайденно(:</h2>
      <Link href="/">Повернутися на головну.</Link>
    </div>
  );
}
