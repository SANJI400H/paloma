"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    text: "Got my gelish manicure done here and honestly could not be happier. The finish is perfect and the technician was so careful and professional. Already booked my next appointment.",
    name: "Nadia R.",
  },
  {
    text: "Best keratin treatment I have had since moving to Dubai. My hair has never been this smooth, even in this heat. Very fair price and the salon is spotlessly clean. Will not go anywhere else.",
    name: "Sara M.",
  },
  {
    text: "I come here every three weeks for nails and eyebrows. The team is warm, professional, and they remember exactly how I like things. The best salon in Barsha Heights without question.",
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
              className={`review-card reveal rounded-2xl p-6 border flex flex-col gap-4 ${["reveal-delay-1","reveal-delay-2","reveal-delay-3"][i] ?? ""}`}
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
