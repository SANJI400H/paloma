"use client";

import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: <LocationIcon />,
    title: "Walk-in Friendly",
    body: "Located in Golden Tulip Media Hotel, Barsha Heights. Easy parking, easy access.",
  },
  {
    icon: <ClockIcon />,
    title: "Fast Appointments",
    body: "Most services completed in under 90 minutes. No unnecessary waiting.",
  },
  {
    icon: <StarIcon />,
    title: "Consistent Quality",
    body: "The same skilled technicians every visit. Your preferences remembered.",
  },
  {
    icon: <ShieldIcon />,
    title: "Transparent Pricing",
    body: "Every price shown upfront. No hidden charges, ever.",
  },
];

export default function WhyPaloma() {
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
      id="why-paloma"
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--paloma-dark)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="reveal text-center mb-14">
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#FDFAF6",
              letterSpacing: "-0.01em",
            }}
          >
            Why Our Clients Keep Coming Back
          </h2>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`reveal reveal-delay-${i + 1} flex flex-col gap-4`}
            >
              {/* Icon container */}
              <div
                className="flex items-center justify-center rounded-2xl"
                style={{
                  width: "56px",
                  height: "56px",
                  background: "rgba(201, 168, 124, 0.12)",
                  border: "1px solid rgba(201, 168, 124, 0.2)",
                }}
              >
                {r.icon}
              </div>
              <div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {r.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "var(--paloma-cream)",
                    opacity: 0.85,
                  }}
                >
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#C9A87C" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="12" cy="9" r="2.5" stroke="#C9A87C" strokeWidth="1.8"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#C9A87C" strokeWidth="1.8"/>
      <path d="M12 7v5.5l3.5 2" stroke="#C9A87C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#C9A87C" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L3 6v6c0 5.25 3.8 10.15 9 11.35C17.2 22.15 21 17.25 21 12V6l-9-4z" stroke="#C9A87C" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="#C9A87C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
