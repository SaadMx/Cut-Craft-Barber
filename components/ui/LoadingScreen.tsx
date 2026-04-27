"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1800);
    const t2 = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="loading-screen"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.6s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Animated scissors SVG */}
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        style={{
          animation: "spin 1.5s ease-in-out forwards",
          marginBottom: 24,
        }}
      >
        <style>{`@keyframes spin { from{transform:rotate(-30deg)}to{transform:rotate(0deg)} }`}</style>
        <circle cx="18" cy="42" r="8" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="42" cy="42" r="8" stroke="#C9A84C" strokeWidth="1.5" />
        <path
          d="M24 36L30 30L36 36M30 30L42 12M30 30L18 12"
          stroke="#C9A84C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: 8,
          color: "#C9A84C",
          textTransform: "uppercase",
        }}
      >
        CUTS<span style={{ color: "#F5F0E8" }}> & CRAFT</span>
      </div>

      <div
        style={{
          marginTop: 20,
          width: 160,
          height: 1,
          background: "rgba(201,168,76,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            animation: "shimmerLoad 1.5s ease forwards",
          }}
        />
        <style>{`@keyframes shimmerLoad{from{transform:translateX(-100%)}to{transform:translateX(100%)}}`}</style>
      </div>
    </div>
  );
}
