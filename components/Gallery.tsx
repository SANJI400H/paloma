"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { trackWhatsAppClick } from "@/utils/pixel";

const WA_HREF =
  "https://wa.me/971508057484?text=Hi%20Paloma!%20I%27d%20like%20to%20book%20an%20appointment";

type GalleryItem = {
  src: string;
  alt: string;
  aspectRatio: string;
  objectPosition?: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/images/Gallery/IMG_3819.JPG",
    alt: "Nail art results at Paloma Salon, Barsha Heights Dubai",
    aspectRatio: "3/4",
    objectPosition: "center",
  },
  {
    src: "/images/Gallery/IMG_3821.JPG",
    alt: "Beauty treatment at Paloma Ladies Salon Dubai",
    aspectRatio: "4/3",
    objectPosition: "center top",
  },
  {
    src: "/images/Gallery/IMG_3834.JPG",
    alt: "Gelish manicure result at Paloma Salon Barsha Heights",
    aspectRatio: "3/4",
    objectPosition: "center",
  },
  {
    src: "/images/Gallery/IMG_3845.JPG",
    alt: "Professional nail service at Paloma Salon Dubai",
    aspectRatio: "4/5",
    objectPosition: "center",
  },
  {
    src: "/images/Gallery/IMG_3847.JPG",
    alt: "Hair and beauty treatment at Paloma Barsha Heights",
    aspectRatio: "3/4",
    objectPosition: "center",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reveals = section.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
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
        <div className="reveal text-center mb-12">
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--paloma-dark)",
              letterSpacing: "-0.01em",
            }}
          >
            Real Results
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "16px",
              color: "var(--paloma-brown)",
            }}
          >
            Every photo is a real client at Paloma Salon, Barsha Heights
          </p>
        </div>

        {/* Masonry grid */}
        <div className="reveal gallery-masonry">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                aspectRatio: item.aspectRatio,
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                style={{ objectPosition: item.objectPosition ?? "center" }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
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

function WAIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
