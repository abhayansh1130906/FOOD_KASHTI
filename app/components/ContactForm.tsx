"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--color-surface-container-low)",
  border: "1px solid var(--color-outline-variant)",
  borderRadius: "8px",
  padding: "10px 16px",
  fontSize: "16px",
  fontFamily: "var(--font-plus-jakarta), sans-serif",
  color: "var(--color-on-surface)",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("success");
  }

  return (
    <div
      style={{
        background: "var(--color-surface-container-lowest)",
        padding: "32px",
        borderRadius: "16px",
        boxShadow: "0 2px 16px rgba(154,70,0,0.07)",
        border: "1px solid rgba(222,192,177,0.3)",
      }}
    >
      {status === "success" ? (
        <div
          style={{
            textAlign: "center",
            padding: "48px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "64px",
              color: "var(--color-secondary)",
              fontVariationSettings: "'FILL' 1",
            }}
          >
            check_circle
          </span>
          <h3
            style={{
              fontFamily: "var(--font-literata), serif",
              fontSize: "24px",
              fontWeight: 600,
              color: "var(--color-on-surface)",
            }}
          >
            Message Sent!
          </h3>
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              color: "var(--color-on-surface-variant)",
              fontSize: "16px",
            }}
          >
            Thank you for reaching out. We&apos;ll get back to you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            style={{
              background: "var(--color-primary-container)",
              color: "var(--color-on-primary-container)",
              border: "none",
              borderRadius: "8px",
              padding: "10px 24px",
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Name + Phone row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label
                htmlFor="contact-name"
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--color-on-surface-variant)",
                }}
              >
                Full Name
              </label>
              <input id="contact-name" type="text" placeholder="Enter your name" style={inputStyle} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label
                htmlFor="contact-phone"
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--color-on-surface-variant)",
                }}
              >
                Phone Number *
              </label>
              <input id="contact-phone" type="tel" placeholder="Your phone number" required style={inputStyle} />
            </div>
          </div>

          {/* Email */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label
              htmlFor="contact-email"
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--color-on-surface-variant)",
              }}
            >
              Email Address
            </label>
            <input id="contact-email" type="email" placeholder="email@example.com" style={inputStyle} />
          </div>

          {/* Service type */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label
              htmlFor="contact-service"
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--color-on-surface-variant)",
              }}
            >
              Service Type
            </label>
            <select id="contact-service" style={{ ...inputStyle, appearance: "none" }}>
              <option value="train-food">Train Food</option>
              <option value="local-delivery">Local Delivery</option>
              <option value="catering">Catering</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label
              htmlFor="contact-message"
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--color-on-surface-variant)",
              }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              placeholder="How can we help you?"
              rows={5}
              style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              background: "var(--color-primary-container)",
              color: "var(--color-on-primary-container)",
              border: "none",
              borderRadius: "8px",
              padding: "14px",
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.25s, color 0.25s, transform 0.1s",
              marginTop: "8px",
              boxShadow: "0 4px 12px rgba(154,70,0,0.15)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--color-primary)";
              el.style.color = "var(--color-on-primary)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--color-primary-container)";
              el.style.color = "var(--color-on-primary-container)";
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(0.98)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Send Message
          </button>

          <style>{`
            @media (max-width: 640px) {
              .form-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </form>
      )}
    </div>
  );
}
