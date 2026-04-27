"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "@/styles/components.module.css";
import { STATS } from "@/lib/data";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handler = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1) translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Background image with parallax */}
      <div className={styles.heroBg} ref={bgRef}>
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&q=85"
          alt="Barber at work"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
      </div>
      <div className={styles.heroOverlay} />

      {/* Content */}
      <div className={styles.heroContent}>
        <div
          className={styles.heroTag}
          style={{ animation: "fadeUp 0.8s ease 0.4s both" }}
        >
          Est. 2008 — Karachi, Pakistan
        </div>

        <h1
          className={styles.heroH1}
          style={{ animation: "fadeUp 0.9s ease 0.6s both" }}
        >
          Precision
          <em className={styles.heroH1Em}>Cuts.</em>
          Flawless Style.
        </h1>

        <p
          className={styles.heroSub}
          style={{ animation: "fadeUp 0.9s ease 0.8s both" }}
        >
          Where every cut is a statement. Premium grooming for the modern
          gentleman — blending tradition with artisan technique.
        </p>

        <div
          className={styles.heroActions}
          style={{ animation: "fadeUp 0.9s ease 1s both" }}
        >
          <Link href="#booking" className={styles.btnPrimary}>
            <span>Book Your Cut</span>
          </Link>
          <Link href="#services" className={styles.btnOutline}>
            Explore Services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={styles.heroScroll}
        style={{ animation: "fadeIn 1s ease 1.6s both" }}
      >
        <span className={styles.scrollLine} />
        Scroll to explore
      </div>

      {/* Stats */}
      <div
        className={styles.heroStats}
        style={{ animation: "fadeIn 1s ease 1.3s both" }}
      >
        {STATS.map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
