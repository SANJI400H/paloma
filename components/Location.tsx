"use client";

import { useEffect, useRef } from "react";
import { trackWhatsAppClick } from "@/utils/pixel";

const WA_HREF =
  "https://wa.me/971508057484?text=Hi%20Paloma!%20I%27d%20like%20to%20book%20an%20appointment";

const MAPS_URL =
  "https://maps.google.com/?q=Golden+Tulip+Media+Hotel+Hessa+Street+Al+Barsha+Heights+Dubai";

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Golden+Tulip+Media+Hotel,+Hessa+Street,+Al+Barsha+Heights,+Dubai&output=embed";

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reveals = section.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--paloma-cream)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — info */}
          <div className="reveal flex flex-col gap-6">
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--paloma-dark)",
                letterSpacing: "-0.01em",
              }}
            >
              Find Us
            </h2>

            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex gap-3">
                <div style={{ flexShrink: 0, marginTop: "2px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#C9A87C" strokeWidth="1.8"/>
                    <circle cx="12" cy="9" r="2.5" stroke="#C9A87C" strokeWidth="1.8"/>
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "16px",
                    color: "var(--paloma-dark)",
                    lineHeight: 1.6,
                  }}
                >
                  Golden Tulip Media Hotel, Hessa Street,
                  <br />
                  Al Barsha Heights, Dubai, UAE
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="#C9A87C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a
                  href="tel:+971508057484"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "16px",
                    color: "var(--paloma-dark)",
                    textDecoration: "none",
                  }}
                >
                  +971 508 057 484
                </a>
              </div>

              {/* Hours */}
              <div className="flex gap-3 items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="#C9A87C" strokeWidth="1.8"/>
                  <path d="M12 7v5.5l3.5 2" stroke="#C9A87C" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "16px",
                    color: "var(--paloma-dark)",
                  }}
                >
                  Monday to Saturday · 10:00 AM – 8:00 PM
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-200"
                style={{
                  border: "1.5px solid var(--paloma-brown)",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontFamily: "var(--font-dm-sans)",
                  color: "var(--paloma-dark)",
                  minHeight: "44px",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--paloma-beige)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
                Get Directions
              </a>

              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="inline-flex items-center gap-2 rounded-full text-white font-semibold transition-all duration-200"
                style={{
                  background: "var(--paloma-green)",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontFamily: "var(--font-dm-sans)",
                  minHeight: "44px",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                <WAIcon />
                Chat to Book
              </a>
            </div>
          </div>

          {/* Right — Map */}
          <div
            className="reveal reveal-delay-2"
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: "4/3",
              width: "100%",
              boxShadow: "0 8px 40px rgba(44, 24, 16, 0.1)",
            }}
          >
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{
                border: "none",
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paloma Salon location — Golden Tulip Media Hotel, Barsha Heights"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WAIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
