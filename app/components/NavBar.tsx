"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: "rgba(252,249,244,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(222,192,177,0.3)",
        transition: "box-shadow 0.3s",
        boxShadow: scrolled ? "0 4px 24px rgba(154,70,0,0.12)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 24px",
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Logo */}
        <Link
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-literata), serif",
            fontSize: "24px",
            fontWeight: 700,
            color: "var(--color-primary)",
            textDecoration: "none",
          }}
        >
          <Image src="/logo.svg" alt="Food Kashti logo" width={36} height={36} />
          Food Kashti
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }} className="nav-desktop">
          {[
            { label: "Services", href: "#services" },
            { label: "Our Story", href: "#story" },
            { label: "Process", href: "#founder" },
            { label: "Testimonials", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "var(--color-on-surface-variant)")
              }
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact-form"
            style={{
              background: "var(--color-primary-container)",
              color: "var(--color-on-primary-container)",
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background 0.25s, color 0.25s",
              boxShadow: "0 2px 8px rgba(154,70,0,0.15)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--color-primary)";
              el.style.color = "var(--color-on-primary)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--color-primary-container)";
              el.style.color = "var(--color-on-primary-container)";
            }}
          >
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-primary)",
            padding: "8px",
          }}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(252,249,244,0.98)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(222,192,177,0.3)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {[
            { label: "Services", href: "#services" },
            { label: "Our Story", href: "#story" },
            { label: "Process", href: "#founder" },
            { label: "Testimonials", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact-form"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "var(--color-primary)",
              color: "var(--color-on-primary)",
              textAlign: "center",
              padding: "12px",
              borderRadius: "8px",
              fontWeight: 600,
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              textDecoration: "none",
            }}
          >
            Order Now
          </Link>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
