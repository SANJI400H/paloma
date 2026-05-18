"use client";

import Image from "next/image";
import { trackWhatsAppClick } from "@/utils/pixel";

const WA_HREF =
  "https://wa.me/971508057484?text=Hi%20Paloma!%20I%27d%20like%20to%20book%20an%20appointment";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--paloma-dark)",
        paddingBottom: "80px",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-16 pb-8">
        {/* Three columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: "1px solid rgba(201,168,124,0.3)",
                }}
              >
                <Image
                  src="/images/logo.jpg"
                  alt="Paloma Salon logo"
                  width={44}
                  height={44}
                  className="object-cover w-full h-full"
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Paloma
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "18px",
                color: "var(--paloma-warm)",
              }}
            >
              Feel Beautiful.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                color: "var(--paloma-cream)",
                opacity: 0.65,
                lineHeight: 1.6,
              }}
            >
              Ladies Beauty Salon · Barsha Heights, Dubai
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--paloma-warm)",
                fontWeight: 600,
              }}
            >
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="footer-link"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "15px",
                      color: "var(--paloma-cream)",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--paloma-warm)",
                fontWeight: 600,
              }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="inline-flex items-center gap-2 footer-link"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "15px",
                  color: "var(--paloma-cream)",
                  textDecoration: "none",
                }}
              >
                <WAIcon />
                +971 508 057 484
              </a>

              <a
                href="https://www.instagram.com/paloma_ladies_beauty_salon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 footer-link"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "15px",
                  color: "var(--paloma-cream)",
                  textDecoration: "none",
                }}
              >
                <InstagramIcon />
                Instagram
              </a>

              <a
                href="https://www.facebook.com/PalomaDubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 footer-link"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "15px",
                  color: "var(--paloma-cream)",
                  textDecoration: "none",
                }}
              >
                <FacebookIcon />
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6"
          style={{ borderTop: "1px solid var(--paloma-brown)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "13px",
              color: "var(--paloma-cream)",
              opacity: 0.5,
              textAlign: "center",
            }}
          >
            © 2025 Paloma Ladies Beauty Salon · Barsha Heights, Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}

function WAIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#C9A87C" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#C9A87C" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4" stroke="#C9A87C" strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill="#C9A87C"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="#C9A87C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
