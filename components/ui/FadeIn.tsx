"use client";

import { useInView } from "@/hooks";
import { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  style?: CSSProperties;
}

const getInitial = (dir: Props["direction"]) => {
  switch (dir) {
    case "left":  return "translate(-40px, 0)";
    case "right": return "translate(40px, 0)";
    case "none":  return "translate(0, 0)";
    default:      return "translate(0, 36px)";
  }
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
}: Props) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0,0)" : getInitial(direction),
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
