import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { GALLERY_IMAGES } from "@/lib/data";
import styles from "@/styles/components.module.css";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      style={{ padding: "120px 80px", background: "var(--dark)" }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 60,
        }}
      >
        <div>
          <FadeIn>
            <SectionLabel>Portfolio</SectionLabel>
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
              The{" "}
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Work</em>{" "}
              Speaks
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={200} direction="right">
          <Link
            href="#booking"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: 12,
              letterSpacing: "3px",
              textTransform: "uppercase",
              background: "#C9A84C",
              color: "#0A0A0A",
              padding: "16px 40px",
              textDecoration: "none",
              fontWeight: 700,
              transition: "background 0.3s",
              display: "inline-block",
            }}
          >
            Book a Session
          </Link>
        </FadeIn>
      </div>

      {/* Masonry grid */}
      <FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: 4,
          }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.id}
              className={styles.galleryItem}
              style={{
                gridRow: i === 0 ? "span 2" : undefined,
                minHeight: i === 0 ? 600 : 295,
                position: "relative",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.galleryItemOverlay}>
                <span className={styles.galleryPlus}>+</span>
              </div>
              {/* Category tag */}
              <span
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  fontFamily: "var(--font-barlow-condensed)",
                  fontSize: 10,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  background: "rgba(10,10,10,0.7)",
                  color: "#C9A84C",
                  backdropFilter: "blur(4px)",
                  zIndex: 2,
                }}
              >
                {img.category}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Bottom note */}
      <FadeIn delay={200}>
        <p
          style={{
            textAlign: "center",
            marginTop: 32,
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: 11,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(245,240,232,0.3)",
          }}
        >
          Follow @cutsandcraft on Instagram for daily updates
        </p>
      </FadeIn>
    </section>
  );
}
