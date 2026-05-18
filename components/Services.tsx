"use client";

import { useEffect, useRef } from "react";
import { trackWhatsAppClick, trackServicesView } from "@/utils/pixel";

const WA_HREF =
  "https://wa.me/971508057484?text=Hi%20Paloma!%20I%27d%20like%20to%20book%20an%20appointment";

const nailServices = [
  { name: "Gelish Manicure", price: "AED 89", popular: true },
  { name: "Gelish Pedicure", price: "AED 99" },
  { name: "Gelish Mani + Pedi", price: "AED 179" },
  { name: "Classic Manicure", price: "AED 59" },
  { name: "Classic Pedicure", price: "AED 69" },
  { name: "Classic Mani + Pedi", price: "AED 129" },
  { name: "FREE Removal with Gelish", price: "" },
];

const hairServices = [
  { name: "Blow-dry + Wash (Short Hair)", price: "AED 79" },
  { name: "Blow-dry + Wash (Medium/Long)", price: "AED 99" },
  { name: "Haircut + Blow-dry", price: "AED 119" },
  { name: "Treatment + Blow-dry", price: "AED 129" },
  { name: "Roots Colour + Blow-dry", price: "AED 199" },
  { name: "Full Colour + Blow-dry", price: "from AED 199" },
  { name: "Highlights + Blow-dry", price: "from AED 199" },
  { name: "Protein Treatment", price: "from AED 199" },
  { name: "Keratin Treatment", price: "from AED 169", special: true },
];

const waxServices = [
  { name: "Upper Lip Threading", price: "AED 20" },
  { name: "Eyebrows Threading", price: "AED 20" },
  { name: "Full Face Threading", price: "AED 69" },
  { name: "Full Body Waxing", price: "from AED 199" },
  { name: "Full Arms and Legs", price: "from AED 119" },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Scroll reveal for cards
    const reveals = section.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    // ViewContent pixel event
    const pixelObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTracked.current) {
          hasTracked.current = true;
          trackServicesView();
        }
      },
      { threshold: 0.5 }
    );
    pixelObserver.observe(section);

    return () => {
      revealObserver.disconnect();
      pixelObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--paloma-white)" }}
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
            Our Services
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "17px",
              color: "var(--paloma-brown)",
            }}
          >
            Transparent pricing. No surprises.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Nail Services */}
          <div
            className="service-card reveal reveal-delay-1 rounded-2xl p-7 border"
            style={{
              background: "#fff",
              borderColor: "var(--paloma-beige)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <NailIcon />
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "var(--paloma-dark)",
                }}
              >
                Nail Services
              </h3>
            </div>
            <ul className="space-y-3">
              {nailServices.map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-2">
                  <span
                    className="flex items-center gap-2"
                    style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "var(--paloma-dark)" }}
                  >
                    {s.name}
                    {s.popular && (
                      <span
                        className="rounded-full px-2 py-0.5 text-white"
                        style={{
                          background: "var(--paloma-green)",
                          fontSize: "10px",
                          fontFamily: "var(--font-dm-sans)",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Most Popular
                      </span>
                    )}
                  </span>
                  {s.price && (
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--paloma-brown)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.price}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hair Services */}
          <div
            className="service-card reveal reveal-delay-2 rounded-2xl p-7 border"
            style={{
              background: "#fff",
              borderColor: "var(--paloma-beige)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <ScissorsIcon />
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "var(--paloma-dark)",
                }}
              >
                Hair Services
              </h3>
            </div>
            <ul className="space-y-3">
              {hairServices.map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-2">
                  <span
                    className="flex items-center gap-2 flex-wrap"
                    style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "var(--paloma-dark)" }}
                  >
                    {s.name}
                    {s.special && (
                      <span
                        className="rounded-full px-2 py-0.5 text-white"
                        style={{
                          background: "var(--paloma-warm)",
                          fontSize: "10px",
                          fontFamily: "var(--font-dm-sans)",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Summer Special
                      </span>
                    )}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--paloma-brown)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Waxing & Threading */}
          <div
            className="service-card reveal reveal-delay-3 rounded-2xl p-7 border"
            style={{
              background: "#fff",
              borderColor: "var(--paloma-beige)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <SparkleIcon />
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "var(--paloma-dark)",
                }}
              >
                Waxing & Threading
              </h3>
            </div>
            <ul className="space-y-3">
              {waxServices.map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-2">
                  <span
                    style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "var(--paloma-dark)" }}
                  >
                    {s.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--paloma-brown)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA strip */}
        <div
          className="reveal mt-10 rounded-2xl py-8 px-8 text-center"
          style={{ background: "var(--paloma-cream)" }}
        >
          <p
            className="mb-5"
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "var(--paloma-dark)",
              lineHeight: 1.5,
            }}
          >
            Not sure which service? Ask us on WhatsApp and we will guide you.
          </p>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className="inline-flex items-center gap-2 rounded-full text-white font-semibold transition-all duration-200"
            style={{
              background: "var(--paloma-green)",
              padding: "12px 28px",
              fontSize: "15px",
              fontFamily: "var(--font-dm-sans)",
              minHeight: "44px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <WhatsAppIconSmall />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function NailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C9.5 2 8 4 8 6.5V18a4 4 0 008 0V6.5C16 4 14.5 2 12 2z" stroke="#C9A87C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 8h6" stroke="#C9A87C" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="6" cy="6" r="3" stroke="#C9A87C" strokeWidth="1.8"/>
      <circle cx="6" cy="18" r="3" stroke="#C9A87C" strokeWidth="1.8"/>
      <path d="M8.5 8.5L20 20M8.5 15.5L20 4" stroke="#C9A87C" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" stroke="#C9A87C" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M5 5l1 2M19 5l-1 2M5 19l1-2M19 19l-1-2" stroke="#C9A87C" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function WhatsAppIconSmall() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
