"use client";

import { useRef, MouseEvent } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/data";
import styles from "@/styles/components.module.css";
import type { Service } from "@/types";

const ICONS: Record<string, React.ReactNode> = {
  scissors: (
    <svg viewBox="0 0 52 52" fill="none" className={styles.serviceIcon}>
      <circle cx="14" cy="38" r="8" stroke="#C9A84C" strokeWidth="1.5" />
      <circle cx="38" cy="38" r="8" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M20 32L26 24L32 32M26 24L38 8M26 24L14 8" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  beard: (
    <svg viewBox="0 0 52 52" fill="none" className={styles.serviceIcon}>
      <rect x="8" y="8" width="36" height="36" rx="6" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M16 24h20M16 30h20M20 36h12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="26" cy="18" r="4" stroke="#C9A84C" strokeWidth="1.5" />
    </svg>
  ),
  razor: (
    <svg viewBox="0 0 52 52" fill="none" className={styles.serviceIcon}>
      <rect x="20" y="4" width="12" height="44" rx="3" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M20 14h12M20 38h12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 24h36" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  fade: (
    <svg viewBox="0 0 52 52" fill="none" className={styles.serviceIcon}>
      <path d="M10 44L20 8h12l10 36" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 32h24M12 38h28M16 26h20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  scalp: (
    <svg viewBox="0 0 52 52" fill="none" className={styles.serviceIcon}>
      <path d="M26 10c-10 0-18 6.7-18 15 0 4.8 2.6 9 6.8 11.8L13 44h26l-1.8-7.2C41.4 34 44 29.8 44 25c0-8.3-8-15-18-15z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 44v4M32 44v4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  crown: (
    <svg viewBox="0 0 52 52" fill="none" className={styles.serviceIcon}>
      <path d="M8 36L14 16l12 14 12-14 6 20H8z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 40h40" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="16" r="2.5" fill="#C9A84C" />
      <circle cx="38" cy="16" r="2.5" fill="#C9A84C" />
      <circle cx="26" cy="30" r="2.5" fill="#C9A84C" />
    </svg>
  ),
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = ((y / rect.height) - 0.5) * -10;
    const rotY = ((x / rect.width) - 0.5) * 10;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
    }
  };

  return (
    <FadeIn delay={index * 80}>
      <div
        ref={cardRef}
        className={styles.serviceCard}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: "transform 0.15s ease, background 0.4s", transformStyle: "preserve-3d" }}
      >
        <span className={styles.serviceNum}>0{service.id}</span>
        {ICONS[service.icon]}
        <div className={styles.serviceName}>{service.name}</div>
        <p className={styles.serviceDesc}>{service.description}</p>
        <div className={styles.servicePrice}>
          {service.price}
          <span className={styles.servicePriceSub}>/ {service.duration}</span>
        </div>
      </div>
    </FadeIn>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{ padding: "120px 80px", background: "var(--dark-2)" }}
    >
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "flex-end",
          marginBottom: 80,
        }}
      >
        <div>
          <FadeIn>
            <SectionLabel>What We Offer</SectionLabel>
          </FadeIn>
          <FadeIn delay={100}>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(38px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: "#F5F0E8",
              }}
            >
              Craft That{" "}
              <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Speaks</em>
              <br />
              For Itself
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={200} direction="right">
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.85,
              color: "rgba(245,240,232,0.55)",
              maxWidth: 420,
            }}
          >
            Every service is performed by master barbers using premium tools and
            hand-selected products. This is more than a haircut — it&apos;s a ritual.
          </p>
        </FadeIn>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
        }}
      >
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
