"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    text: "Came for a gelish manicure and left absolutely obsessed. The technician took her time and the finish was perfect. Already booked my next appointment.",
    name: "Sarah M.",
  },
  {
    text: "Best keratin treatment I have had in Dubai. My hair is so smooth even in this heat. The price was very fair and the salon is spotlessly clean.",
    name: "Fatima A.",
  },
  {
    text: "I have been coming here every three weeks for nails and threading. The team knows me by name now. Would not go anywhere else in Barsha Heights.",
    name: "Priya K.",
  },
];

export default function Reviews() {
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
      id="reviews"
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--paloma-white)" }}
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
            What Our Clients Say
          </h2>
        </div>

        {/* Review cards */}
        <div className="reviews-scroll reveal">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`review-card reveal reveal-delay-${i + 1} rounded-2xl p-6 border flex flex-col gap-4`}
              style={{
                background: "#fff",
                borderColor: "var(--paloma-beige)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: "var(--paloma-warm)", fontSize: "18px" }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "var(--paloma-dark)",
                  flex: 1,
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--paloma-brown)",
                  }}
                >
                  {r.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "12px",
                    color: "var(--paloma-brown)",
                    opacity: 0.6,
                    marginTop: "2px",
                  }}
                >
                  Paloma Salon, Barsha Heights
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
