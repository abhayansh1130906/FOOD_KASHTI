"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const IMAGES = [
  {
    src: "/image_1.jpeg",
    alt: "Food Kashti – home kitchen fresh meal",
  },
  {
    src: "/image_2.jpeg",
    alt: "Food Kashti – freshly prepared thali",
  },
  {
    src: "/image_3.jpeg",
    alt: "Food Kashti – homemade food served with love",
  },
  {
    src: "/image_4.jpeg",
    alt: "Food Kashti – delicious vegetarian spread",
  },
];

const AUTO_PLAY_INTERVAL = 1000; // ms

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        borderRadius: "inherit",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {IMAGES.map((img, i) => (
        <div
          key={img.src}
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 0.8s ease",
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? "auto" : "none",
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Previous image"
        style={{
          position: "absolute",
          left: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(0,0,0,0.40)",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          color: "#fff",
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.65)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.40)")}
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next image"
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(0,0,0,0.40)",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          color: "#fff",
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.65)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.40)")}
      >
        ›
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",          // sits above the quote box
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          gap: "8px",
        }}
      >
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            style={{
              width: i === current ? "22px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              border: "none",
              background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s, background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
