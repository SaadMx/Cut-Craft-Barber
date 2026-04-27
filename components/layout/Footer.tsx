"use client";
import Link from "next/link";
import styles from "@/styles/components.module.css";

const footerLinks = {
  Services: [
    "Signature Cut",
    "Beard Sculpt",
    "Hot Towel Shave",
    "Fade & Taper",
    "Full Grooming",
  ],
  Navigate: ["Home", "Our Team", "Gallery", "Reviews", "Book Now"],
  Contact: [
    "DHA Phase 5, Karachi",
    "Mon–Sat: 10am – 9pm",
    "Sun: 11am – 6pm",
    "+92 21 3500 0000",
    "info@cutsandcraft.pk",
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--dark)",
        borderTop: "1px solid rgba(201,168,76,0.12)",
        padding: "80px 80px 40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 60,
          marginBottom: 60,
        }}
      >
        {/* Brand */}
        <div>
          <Link href="#" className={styles.logo} style={{ marginBottom: 16, display: "block" }}>
            CUTS<span> &amp; CRAFT</span>
          </Link>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(245,240,232,0.45)", maxWidth: 300, marginTop: 16 }}>
            Premium barbershop services in Karachi since 2008. Where precision
            meets passion — your transformation starts here.
          </p>
          {/* Social icons */}
          <div style={{ display: "flex", gap: 16, marginTop: 28 }}>
            {["IG", "FB", "TT", "YT"].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  width: 36,
                  height: 36,
                  border: "1px solid rgba(201,168,76,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontFamily: "var(--font-barlow-condensed)",
                  letterSpacing: 1,
                  color: "rgba(245,240,232,0.5)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#C9A84C";
                  (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.25)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.5)";
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: 11,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#C9A84C",
                marginBottom: 20,
              }}
            >
              {title}
            </h4>
            <ul style={{ listStyle: "none" }}>
              {links.map((link) => (
                <li key={link} style={{ marginBottom: 12 }}>
                  <a href="#" className={styles.footerLink}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <p style={{ fontSize: 13, color: "rgba(245,240,232,0.3)" }}>
          © {new Date().getFullYear()} Cuts &amp; Craft. All rights reserved.
        </p>
        <p style={{ fontSize: 13, color: "rgba(245,240,232,0.2)" }}>
          Crafted with precision in Karachi.
        </p>
      </div>
    </footer>
  );
}
