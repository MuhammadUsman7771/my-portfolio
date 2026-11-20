import { ImageResponse } from "next/og";
export const alt = "Muhammad Usman — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#111113",
        color: "#ececef",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 30, display: "flex" }}>
        mu<span style={{ color: "#b6a3ed" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -4,
        }}
      >
        <span>Designed to feel.</span>
        <span style={{ color: "#b6a3ed" }}>Engineered to work.</span>
      </div>
      <div style={{ fontSize: 22, color: "#aaaab3" }}>
        Muhammad Usman / MERN Stack & Next.js Developer
      </div>
    </div>,
    size,
  );
}
