import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { TESTIMONIALS } from "@/lib/data";
import styles from "@/styles/components.module.css";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{ padding: "120px 80px", background: "var(--dark-2)" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 100,
          alignItems: "start",
        }}
      >
        {/* Left — heading + rating */}
        <div>
          <FadeIn>
            <SectionLabel>Reviews</SectionLabel>
          </FadeIn>
          <FadeIn delay={100}>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(36px, 4.5vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.08,
                color: "#F5F0E8",
                marginBottom: 24,
              }}
            >
              What They{" "}
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Say</em>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.5)",
                marginBottom: 48,
              }}
            >
              Over 8,000 satisfied clients and counting. Don&apos;t take our word
              for it — hear it straight from them.
            </p>
          </FadeIn>

          {/* Rating card */}
          <FadeIn delay={300}>
            <div
              style={{
                padding: 36,
                border: "1px solid rgba(201,168,76,0.2)",
                background: "var(--dark-3)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at top right, rgba(201,168,76,0.06), transparent 60%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: 60,
                  fontWeight: 900,
                  color: "#C9A84C",
                  lineHeight: 1,
                }}
              >
                4.9
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: "#C9A84C",
                  letterSpacing: 6,
                  margin: "10px 0",
                }}
              >
                ★★★★★
              </div>
              <div
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontSize: 11,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#888880",
                }}
              >
                Google Rating · 1,200+ Reviews
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right — testimonials */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.id} delay={i * 100} direction="right">
              <div className={styles.testimonialCard}>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 56,
                    color: "#C9A84C",
                    lineHeight: 0.5,
                    display: "block",
                    marginBottom: 14,
                  }}
                >
                  &ldquo;
                </span>
                <div
                  style={{
                    color: "#C9A84C",
                    fontSize: 13,
                    letterSpacing: 4,
                    marginBottom: 16,
                  }}
                >
                  {"★".repeat(t.rating)}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "rgba(245,240,232,0.72)",
                    marginBottom: 24,
                  }}
                >
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ position: "relative", width: 44, height: 44, flexShrink: 0 }}>
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "2px solid #C9A84C",
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        color: "#F5F0E8",
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#888880", marginTop: 2 }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
