"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { trackWhatsAppClick } from "@/utils/pixel";

const WA_HREF =
  "https://wa.me/971508057484?text=Hi%20Paloma!%20I%27d%20like%20to%20book%20an%20appointment";

const PLACEHOLDER_BG = "#ede8e0";
const PLACEHOLDER_BORDER = "1.5px dashed #c9b8a8";

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reveals = section.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.06 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--paloma-cream)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}
        <div className="reveal text-center mb-14">
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--paloma-dark)",
              letterSpacing: "-0.01em",
            }}
          >
            Our Work
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "16px",
              color: "var(--paloma-brown)",
            }}
          >
            Real results from real clients at Paloma Salon, Barsha Heights
          </p>
        </div>

        {/* ── Scattered photo grid ─────────────────────────────────── */}
        <div className="gallery-photo-grid">
          {/* Hero — full-width on mobile, 2×2 on desktop */}
          <Cell
            src="/images/Gallery/IMG_3821.JPG"
            alt="Gelish nail art at Paloma Salon Dubai"
            className="gallery-photo-hero"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
            priority
          />
          <Cell
            src="/images/Gallery/IMG_3845.JPG"
            alt="Soft gel manicure at Paloma Salon Barsha Heights"
            className="gallery-photo-cell gallery-cell-b"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <Cell
            src="/images/Gallery/IMG_3847.JPG"
            alt="Hair colour treatment at Paloma Ladies Salon"
            className="gallery-photo-cell gallery-cell-c"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <Cell
            src="/images/Gallery/20260515_114758.jpg"
            alt="Hair styling at Paloma Ladies Salon Dubai"
            className="gallery-photo-cell gallery-cell-d"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <Cell
            src="/images/Gallery/20260515_134942.jpg"
            alt="Eyebrow threading at Paloma Salon Barsha Heights"
            className="gallery-photo-cell gallery-cell-e"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>

        {/* ── Video strip ─────────────────────────────────────────── */}
        <div className="gallery-video-strip">
          <div className="gallery-video-cell">
            <video
              src="/images/Gallery/paloma_ladies_beauty_salon_DYR7ipLsiPB.mp4"
              controls
              muted
              playsInline
              preload="none"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div className="gallery-video-cell">
            <video
              src="/images/Gallery/paloma_ladies_beauty_salon_DTISUW5kb1S.mp4"
              controls
              muted
              playsInline
              preload="none"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-14 text-center">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className="inline-flex items-center gap-3 rounded-full text-white font-semibold transition-all duration-200"
            style={{
              background: "var(--paloma-green)",
              padding: "16px 36px",
              fontSize: "17px",
              fontFamily: "var(--font-dm-sans)",
              minHeight: "56px",
              boxShadow: "0 4px 20px rgba(74, 94, 74, 0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(74, 94, 74, 0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(74, 94, 74, 0.25)";
            }}
          >
            <WAIcon />
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ─────────────────────────────────────────────── */

function Cell({
  src,
  alt,
  className,
  sizes,
  priority = false,
}: {
  src?: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={className}
      style={
        !src ? { background: PLACEHOLDER_BG, border: PLACEHOLDER_BORDER } : undefined
      }
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes ?? "(max-width: 640px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 ease-out"
          style={{ transformOrigin: "center" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#b0a090",
          }}
        >
          <ImagePlaceholderIcon />
        </div>
      )}
    </div>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="M21 15l-5-5L5 21"/>
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  );
}

function WAIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
