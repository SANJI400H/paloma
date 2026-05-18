"use client";

import Image from "next/image";
import { trackWhatsAppClick } from "@/utils/pixel";

const WA_HREF =
  "https://wa.me/971508057484?text=Hi%20Paloma!%20I%27d%20like%20to%20book%20an%20appointment";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative grain-overlay overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "linear-gradient(135deg, var(--paloma-cream) 0%, var(--paloma-white) 60%, var(--paloma-beige) 100%)",
      }}
    >
      <div
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12"
        style={{
          minHeight: "100svh",
          display: "grid",
          gridTemplateColumns: "1fr",
          alignItems: "center",
          paddingTop: "5rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          className="lg:grid lg:gap-16 lg:items-center"
          style={{ gridTemplateColumns: "55fr 45fr" }}
        >
          {/* Left column — text */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            {/* Eyebrow */}
            <span
              className="hero-animate delay-0 block font-body text-xs tracking-widest uppercase"
              style={{ color: "var(--paloma-warm)", fontFamily: "var(--font-dm-sans)" }}
            >
              Barsha Heights, Dubai
            </span>

            {/* H1 */}
            <h1
              className="hero-animate delay-1"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: "var(--paloma-dark)",
                letterSpacing: "-0.02em",
              }}
            >
              Feel Beautiful.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--paloma-brown)" }}>
                Book Today.
              </em>
            </h1>

            {/* Subheading */}
            <p
              className="hero-animate delay-2 mx-auto lg:mx-0"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "18px",
                color: "var(--paloma-brown)",
                lineHeight: 1.65,
                maxWidth: "480px",
              }}
            >
              Nails · Hair · Waxing · Threading 
              Professional ladies salon at
              Golden Tulip Media Hotel, Hessa Street
            </p>

            {/* CTA Button */}
            <div className="hero-animate delay-3 flex flex-col items-center lg:items-start gap-3">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="inline-flex items-center justify-center gap-3 rounded-full text-white font-body font-semibold transition-all duration-200"
                style={{
                  backgroundColor: "var(--paloma-green)",
                  padding: "16px 36px",
                  fontSize: "17px",
                  width: "100%",
                  maxWidth: "360px",
                  boxShadow: "0 4px 20px rgba(74, 94, 74, 0.3)",
                  fontFamily: "var(--font-dm-sans)",
                  minHeight: "56px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 28px rgba(74, 94, 74, 0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 4px 20px rgba(74, 94, 74, 0.3)";
                }}
              >
                <WhatsAppIcon />
                Book on WhatsApp
              </a>

              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "13px",
                  color: "var(--paloma-brown)",
                  opacity: 0.7,
                }}
              >
                Reply within minutes · Mon–Sat 10am–8pm
              </p>
            </div>
          </div>

          {/* Right column — hero image */}
          <div
            className="hero-animate-scale delay-2 hidden lg:flex items-center justify-center mt-10 lg:mt-0"
          >
            <div
              className="hero-blob relative"
              style={{
                width: "100%",
                maxWidth: "460px",
                aspectRatio: "3/4",
                background: "var(--paloma-beige)",
              }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Paloma Salon — nail and beauty services in Barsha Heights Dubai"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* Mobile hero image */}
          <div
            className="hero-animate delay-4 flex lg:hidden items-center justify-center mt-8"
          >
            <div
              className="hero-blob relative w-full"
              style={{
                maxWidth: "340px",
                aspectRatio: "4/5",
                background: "var(--paloma-beige)",
              }}
            >
              <Image
                src="/images/cover.jpg"
                alt="Paloma Salon — professional beauty services Dubai"
                fill
                priority
                fetchPriority="high"
                sizes="90vw"
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background:
            "linear-gradient(to top, var(--paloma-white), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
