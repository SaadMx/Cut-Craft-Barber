"use client";

import React from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { BARBERS } from "@/lib/data";
import styles from "@/styles/components.module.css";

export default function BarbersSection() {
  return (
    <section
      id="barbers"
      style={{ padding: "120px 80px", background: "var(--dark-2)" }}
    >
      <div style={{ maxWidth: 520, marginBottom: 80 }}>
        <FadeIn>
          <SectionLabel>Meet the Team</SectionLabel>
        </FadeIn>
        <FadeIn delay={100}>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(38px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#F5F0E8",
              marginBottom: 16,
            }}
          >
            Masters of{" "}
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>
              Their
            </em>{" "}
            Craft
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.5)",
            }}
          >
            Trained, talented and passionate — our barbers bring years of
            experience and a meticulous eye for detail to every client in the chair.
          </p>
        </FadeIn>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}
      >
        {BARBERS.map((barber, i) => (
          <FadeIn key={barber.id} delay={i * 100}>
            <div className={styles.barberCard}>
              <div className={styles.barberImgWrap}>
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.barberOverlay} />
                <span className={styles.barberExp}>{barber.experience}</span>
              </div>

              <div className={styles.barberInfo}>
                <div className={styles.barberName}>{barber.name}</div>
                <div className={styles.barberRole}>{barber.role}</div>
                <div className={styles.barberExtra}>{barber.bio}</div>

                {/* Specialties */}
                <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                  {barber.specialties.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontSize: 9,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        padding: "3px 8px",
                        border: "1px solid rgba(201,168,76,0.3)",
                        color: "rgba(201,168,76,0.8)",
                        opacity: 0,
                        transition: "opacity 0.4s ease 0.1s",
                      }}
                      className="barber-tag"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <style jsx>{`
        :global(.barberCard:hover .barber-tag) {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
