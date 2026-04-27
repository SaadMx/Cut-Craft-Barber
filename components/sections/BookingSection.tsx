"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "@/styles/components.module.css";

export default function BookingSection() {
  const [form, setForm] = useState({
    name: "", phone: "", service: "", barber: "", date: "", time: "10:00 AM",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.service) return;
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      style={{
        padding: "120px 80px",
        background: "var(--dark)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 100,
        alignItems: "center",
      }}
    >
      {/* Left image */}
      <FadeIn direction="left">
        <div style={{ position: "relative" }}>
          {/* Decorative border */}
          <div
            style={{
              position: "absolute",
              top: -20,
              left: -20,
              right: 20,
              bottom: 20,
              border: "1px solid rgba(201,168,76,0.25)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=85"
              alt="Premium barbershop interior"
              width={700}
              height={875}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Rotating badge */}
          <div
            style={{
              position: "absolute",
              bottom: -24,
              right: -24,
              width: 110,
              height: 110,
              borderRadius: "50%",
              background: "#C9A84C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "rotateBadge 12s linear infinite",
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                fontSize: 13,
                color: "#0A0A0A",
                lineHeight: 1.3,
                textAlign: "center",
              }}
            >
              Book<br />Now
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes rotateBadge {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>
      </FadeIn>

      {/* Right — form */}
      <FadeIn direction="right">
        <SectionLabel>Appointments</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#F5F0E8",
            marginBottom: 16,
          }}
        >
          Reserve Your{" "}
          <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Chair</em>
        </h2>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.5)",
            marginBottom: 40,
            maxWidth: 440,
          }}
        >
          Walk-ins are welcome, but slots fill fast. Book ahead to guarantee your
          preferred barber and time.
        </p>

        {submitted ? (
          <div
            style={{
              padding: 40,
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.3)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 16 }}>✓</div>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 22,
                color: "#C9A84C",
                marginBottom: 8,
              }}
            >
              Booking Confirmed!
            </p>
            <p style={{ fontSize: 14, color: "rgba(245,240,232,0.6)", lineHeight: 1.7 }}>
              Thank you, <strong style={{ color: "#F5F0E8" }}>{form.name}</strong>. We&apos;ll
              call you shortly to confirm your slot. See you at the chair!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className={styles.btnPrimary}
              style={{ marginTop: 24, cursor: "pointer", border: "none" }}
            >
              <span>Book Another</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Row 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888880" }}>
                  Full Name *
                </label>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888880" }}>
                  Phone
                </label>
                <input
                  className="input-field"
                  type="tel"
                  placeholder="+92 300 0000000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888880" }}>
                  Service *
                </label>
                <select
                  className="input-field select-field"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  required
                >
                  <option value="">Select service</option>
                  <option>Signature Cut — Rs 1,200</option>
                  <option>Beard Sculpt — Rs 900</option>
                  <option>Hot Towel Shave — Rs 1,500</option>
                  <option>Fade & Taper — Rs 1,000</option>
                  <option>Scalp Treatment — Rs 800</option>
                  <option>Full Grooming — Rs 3,200</option>
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888880" }}>
                  Barber
                </label>
                <select
                  className="input-field select-field"
                  value={form.barber}
                  onChange={(e) => setForm({ ...form, barber: e.target.value })}
                >
                  <option value="">Any barber</option>
                  <option>Zain Khan</option>
                  <option>Omar Farooq</option>
                  <option>Bilal Raza</option>
                  <option>Hamza Ali</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888880" }}>
                  Date
                </label>
                <input
                  className="input-field"
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888880" }}>
                  Time
                </label>
                <select
                  className="input-field select-field"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                >
                  {["10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className={styles.btnPrimary}
              style={{ marginTop: 8, width: "100%", textAlign: "center", cursor: "pointer", border: "none" }}
            >
              <span>Confirm Booking</span>
            </button>
          </form>
        )}
      </FadeIn>
    </section>
  );
}
