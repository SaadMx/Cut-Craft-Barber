"use client";

import React from "react";


const items = [
  "Classic Cuts",
  "Beard Grooming",
  "Hot Towel Shave",
  "Hair Styling",
  "Scalp Treatment",
  "Fade & Taper",
  "Skin Fades",
  "Hair Colour",
];

export default function MarqueeSection() {
  return (
    <div
      style={{
        padding: "28px 0",
        background: "var(--gold)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 64,
          animation: "marquee 25s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: 13,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#0A0A0A",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            {item}
            <span style={{ fontSize: 8, opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to   { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
