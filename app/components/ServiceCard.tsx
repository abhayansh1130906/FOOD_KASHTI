"use client";

import Link from "next/link";
import { Icon } from "./Icon";

interface ServiceCardProps {
  icon: string;
  color: string;
  iconColor: string;
  hoverBg: string;
  hoverIcon: string;
  title: string;
  desc: string;
  link: string;
}

export default function ServiceCard({
  icon,
  color,
  iconColor,
  hoverBg,
  hoverIcon,
  title,
  desc,
  link,
}: ServiceCardProps) {
  return (
    <div
      style={{
        background: "var(--color-surface-container-lowest)",
        borderRadius: "16px",
        padding: "32px",
        border: "1px solid rgba(222,192,177,0.4)",
        boxShadow: "0 4px 20px rgba(154,70,0,0.05)",
        transition: "transform 0.3s, box-shadow 0.3s",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 32px rgba(154,70,0,0.12)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 4px 20px rgba(154,70,0,0.05)";
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          background: color,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          transition: "background 0.25s",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = hoverBg;
          const iconEl = el.querySelector("span");
          if (iconEl) iconEl.style.color = hoverIcon;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = color;
          const iconEl = el.querySelector("span");
          if (iconEl) iconEl.style.color = iconColor;
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "32px", color: iconColor, transition: "color 0.25s" }}
        >
          {icon}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-literata), serif",
          fontSize: "22px",
          fontWeight: 600,
          color: "var(--color-on-surface)",
          marginBottom: "12px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-plus-jakarta), sans-serif",
          fontSize: "15px",
          lineHeight: "24px",
          color: "var(--color-on-surface-variant)",
          marginBottom: "24px",
          flex: 1,
        }}
      >
        {desc}
      </p>
      <Link
        href="#contact-form"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          color: "var(--color-primary)",
          fontFamily: "var(--font-plus-jakarta), sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        {link}
        <Icon name="arrow_forward" size={18} />
      </Link>
    </div>
  );
}
