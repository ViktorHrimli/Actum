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
        overflow: "hidden",
      }}
    >
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
