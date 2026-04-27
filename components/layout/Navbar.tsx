"use client";

import Link from "next/link";
import { useScrollY } from "@/hooks";
import { NAV_LINKS } from "@/lib/data";
import styles from "@/styles/components.module.css";

export default function Navbar() {
  const scrollY = useScrollY();
  const scrolled = scrollY > 60;

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* Logo */}
      <Link href="#hero" className={styles.logo}>
        CUTS<span> &amp; CRAFT</span>
      </Link>

      {/* Links */}
      <ul className={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link href="#booking" className={styles.navCta}>
        <span>Book Now</span>
      </Link>
    </nav>
  );
}
