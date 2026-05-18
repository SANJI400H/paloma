# Cursor Prompt — Paloma Ladies Beauty Salon Landing Page

## Project Context

Build a high-converting single-page landing page for Paloma Ladies Beauty Salon, located at Golden Tulip Media Hotel, Hessa Street, Al Barsha Heights, Dubai. This page is the destination for Meta ad campaigns targeting women aged 22 to 45 in the Barsha Heights and Tecom area. The sole conversion goal is getting the visitor to tap the WhatsApp button and initiate a booking conversation. There is no booking system, no form, no email capture. Everything funnels to WhatsApp.

---

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Deployed on Vercel
- No external UI libraries
- No database
- No authentication
- Google Fonts via next/font
- next/image for all images
- next/head for meta tags

---

## Brand Identity

Colour palette — use these exact values as CSS variables:

```css
--paloma-cream: #F5EFE6
--paloma-beige: #E8D5B7
--paloma-warm: #C9A87C
--paloma-brown: #8B6447
--paloma-dark: #2C1810
--paloma-green: #4A5E4A
--paloma-white: #FDFAF6
```

Typography:
- Display headings: Playfair Display (Google Fonts) — elegant, feminine, premium feel
- Body and UI text: DM Sans (Google Fonts) — clean, modern, highly legible on mobile
- Accent / script moments: use Playfair Display italic

Tone: warm luxury, accessible, local Dubai salon energy. Not corporate. Not clinical. Feels like a trusted neighbourhood beauty destination that does excellent work.

---

## Page Architecture

Single scrolling page. Seven sections in this exact order:

1. Hero
2. Services and Prices
3. Results Gallery
4. Why Paloma
5. Reviews
6. Location
7. Footer

Sticky WhatsApp CTA button floats on screen at all times on mobile (bottom right, above fold on desktop as part of hero).

---

## Section 1 — Hero

Full viewport height on mobile. On desktop minimum 90vh.

Background: warm cream gradient from --paloma-cream to --paloma-white. Add a very subtle grain texture overlay using CSS (pseudo-element with SVG noise filter, opacity 0.03) to give depth without heaviness.

Layout on mobile: stacked vertically, centered.
Layout on desktop: two column grid, 55% left text, 45% right image.

Left column content:
- Small eyebrow label in DM Sans, uppercase, letter-spacing wide, colour --paloma-warm: "Barsha Heights, Dubai"
- H1 in Playfair Display, large and bold: "Feel Beautiful. Book Today."
- Subheading in DM Sans regular, colour --paloma-brown, font-size 18px: "Nails · Hair · Waxing · Threading — Professional ladies salon at Golden Tulip Media Hotel, Hessa Street"
- Primary CTA button: large, full-width on mobile, auto width on desktop. Background --paloma-green, text white, rounded-full, padding generous. Icon: WhatsApp SVG icon inline left of text. Text: "Book on WhatsApp". On click opens: https://wa.me/971508057484?text=Hi%20Paloma!%20I%27d%20like%20to%20book%20an%20appointment
- Below button in small DM Sans, colour muted: "Reply within minutes · Mon–Sat 10am–8pm"

Right column: hero image. Use next/image with priority={true}. Placeholder: a warm-toned vertical image of nail work or hair. Add a decorative organic blob shape behind the image using CSS clip-path or border-radius to make it feel editorial rather than a plain rectangle. The image should feel framed, not just placed.

Animations: on page load, left column content fades in and slides up with staggered delays (0ms, 100ms, 200ms, 300ms). Use CSS keyframes, not JS. Keep it subtle — 20px translate, opacity 0 to 1.

---

## Section 2 — Services and Prices

Background: --paloma-white.

Section heading in Playfair Display: "Our Services"
Subheading in DM Sans: "Transparent pricing. No surprises."

Three service category cards in a responsive grid: 1 column mobile, 3 columns desktop.

**Card 1 — Nail Services**
Icon: a simple nail polish SVG icon in --paloma-warm
Services list (use this exact data):
- Gelish Manicure — AED 89
- Gelish Pedicure — AED 99
- Gelish Mani + Pedi — AED 179
- Classic Manicure — AED 59
- Classic Pedicure — AED 69
- Classic Mani + Pedi — AED 129
- FREE Removal with Gelish

Highlight "Gelish Manicure — AED 89" with a small "Most Popular" badge in --paloma-green background, white text.

**Card 2 — Hair Services**
Icon: scissors SVG in --paloma-warm
Services list:
- Blow-dry + Wash (Short Hair) — AED 79
- Blow-dry + Wash (Medium/Long Hair) — AED 99
- Haircut + Blow-dry — AED 119
- Treatment + Blow-dry — AED 129
- Roots Colour + Blow-dry — AED 199
- Full Colour + Blow-dry — from AED 199
- Highlights + Blow-dry — from AED 199
- Protein Treatment — from AED 199
- Keratin Treatment — from AED 169

Highlight "Keratin Treatment — from AED 169" with a "Summer Special" badge.

**Card 3 — Waxing and Threading**
Icon: sparkle/star SVG in --paloma-warm
Services list:
- Upper Lip Threading — AED 20
- Eyebrows Threading — AED 20
- Full Face Threading — AED 69
- Full Body Waxing — from AED 199
- Full Arms and Legs — from AED 119

Card design: white background, subtle border 1px solid --paloma-beige, border-radius 16px, generous padding. On hover, border colour transitions to --paloma-warm, very slight upward translate (2px), transition 200ms ease.

Below the three cards, a full-width CTA strip: background --paloma-cream, centered text in Playfair Display italic: "Not sure which service? Ask us on WhatsApp and we will guide you." with a smaller WhatsApp button.

---

## Section 3 — Results Gallery

Background: --paloma-cream.

Section heading: "Real Results"
Subheading: "Every photo is a real client at Paloma Salon, Barsha Heights"

Masonry-style grid using CSS columns (not JS masonry library). 2 columns on mobile, 4 columns on desktop. Gap 8px.

Twelve image placeholders. Use next/image for all. Images should be portrait orientation for nails and landscape for hair. Use object-fit cover. Border-radius 12px on each.

On hover: slight brightness increase (filter: brightness(1.05)) and a very subtle scale(1.02). Transition 250ms ease.

Below gallery: centered WhatsApp CTA button — "Book Your Appointment" in --paloma-green.

---

## Section 4 — Why Paloma

Background: --paloma-dark (deep warm dark brown).
All text: --paloma-white and --paloma-cream tones.

Section heading in Playfair Display, white: "Why Our Clients Keep Coming Back"

Four reasons in a 2x2 grid on mobile stacked, 4 columns on desktop:

1. Icon: location pin — "Walk-in Friendly" — "Located in Golden Tulip Media Hotel, Barsha Heights. Easy parking, easy access."
2. Icon: clock — "Fast Appointments" — "Most services completed in under 90 minutes. No unnecessary waiting."
3. Icon: star — "Consistent Quality" — "The same skilled technicians every visit. Your preferences remembered."
4. Icon: shield — "Transparent Pricing" — "Every price shown upfront. No hidden charges, ever."

Use simple clean SVG icons inline. Icon colour: --paloma-warm. Text colour: --paloma-cream for body, white for headings.

---

## Section 5 — Reviews

Background: --paloma-white.

Section heading: "What Our Clients Say"

Three review cards in a horizontal scroll on mobile, 3 columns on desktop.

Each card: white background, 1px border --paloma-beige, border-radius 16px, padding 1.5rem.

Card structure:
- Five gold stars (★★★★★) in --paloma-warm at top
- Review text in DM Sans, font-size 15px, line-height 1.7, colour --paloma-dark
- Reviewer name in DM Sans medium, --paloma-brown
- Small label: "Paloma Salon, Barsha Heights"

Use these placeholder reviews (replace with real ones when available):

Review 1: "Came for a gelish manicure and left absolutely obsessed. The technician took her time and the finish was perfect. Already booked my next appointment." — Sarah M.

Review 2: "Best keratin treatment I have had in Dubai. My hair is so smooth even in this heat. The price was very fair and the salon is spotlessly clean." — Fatima A.

Review 3: "I have been coming here every three weeks for nails and threading. The team knows me by name now. Would not go anywhere else in Barsha Heights." — Priya K.

---

## Section 6 — Location

Background: --paloma-cream.

Two column layout on desktop, stacked on mobile.

Left column:
- Heading in Playfair Display: "Find Us"
- Address in DM Sans: "Golden Tulip Media Hotel, Hessa Street, Al Barsha Heights, Dubai, UAE"
- Phone: "+971 508057484"
- Hours: "Monday to Saturday · 10:00 AM – 8:00 PM"
- A "Get Directions" link opening Google Maps: https://maps.google.com/?q=Golden+Tulip+Media+Hotel+Hessa+Street+Al+Barsha+Heights+Dubai
- WhatsApp button: "Chat to Book"

Right column:
Embedded Google Maps iframe for Golden Tulip Media Hotel, Barsha Heights. Make the iframe responsive with a fixed aspect ratio container (padding-bottom trick or aspect-ratio CSS). Border-radius 16px on the iframe container. Width 100%.

Use this embed URL: https://maps.google.com/maps?q=Golden+Tulip+Media+Hotel,+Hessa+Street,+Al+Barsha+Heights,+Dubai&output=embed

---

## Section 7 — Footer

Background: --paloma-dark.
Text: --paloma-cream and --paloma-warm.

Three columns on desktop, stacked on mobile:

Column 1: Paloma logo text in Playfair Display, white. Tagline: "Feel Beautiful." Small text: "Ladies Beauty Salon · Barsha Heights, Dubai"

Column 2: Quick links — Services, Gallery, Reviews, Location. Each in DM Sans, --paloma-cream, hover colour --paloma-warm. Smooth scroll to section on click.

Column 3: Contact — WhatsApp number, Instagram link (https://www.instagram.com/paloma_ladies_beauty_salon/), Facebook link (https://www.facebook.com/PalomaDubai). Small social icons inline SVG.

Bottom bar: thin 1px border top --paloma-brown. Copyright line: "© 2025 Paloma Ladies Beauty Salon · Barsha Heights, Dubai"

---

## Sticky WhatsApp Button

A floating button fixed to bottom-right on all screen sizes. Always visible regardless of section.

Design: circle shape 56px diameter on mobile, 64px desktop. Background: #25D366 (WhatsApp green). White WhatsApp SVG icon centered. Box shadow: 0 4px 16px rgba(37, 211, 102, 0.4).

On hover: scale(1.08), shadow increases. Transition 200ms.

On mobile, sits 24px from bottom, 24px from right.
On desktop, sits 32px from bottom, 32px from right.

Onclick: https://wa.me/971508057484?text=Hi%20Paloma!%20I%27d%20like%20to%20book%20an%20appointment

Add a small animated pulse ring behind the button that expands and fades every 2 seconds to draw attention. Use CSS keyframes only.

---

## Meta Pixel Integration

In the root layout.tsx, add the Meta Pixel script in a next/script component with strategy="afterInteractive".

Pixel ID placeholder: PALOMA_PIXEL_ID (replace with actual ID when available)

```tsx
// app/layout.tsx
import Script from 'next/script'

// Inside the body, after children:
<Script
  id="meta-pixel"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'PALOMA_PIXEL_ID');
      fbq('track', 'PageView');
    `,
  }}
/>
```

Fire a custom event on every WhatsApp button click across the entire page:

```tsx
// utils/pixel.ts
export const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Contact', {
      content_name: 'WhatsApp Booking Click',
      content_category: 'Booking',
    })
  }
}
```

Import and call trackWhatsAppClick() in the onClick handler of every single WhatsApp button and the floating sticky button.

Also fire a ViewContent event when the services section enters the viewport, using IntersectionObserver:

```tsx
// When services section is 50% visible:
fbq('track', 'ViewContent', {
  content_name: 'Services Section',
  content_category: 'Services',
})
```

---

## Performance Requirements

- Lighthouse score target: 95+ on mobile, 98+ on desktop
- All images use next/image with proper width, height, and sizes props
- Hero image uses priority={true} and fetchPriority="high"
- All other images use loading="lazy"
- No layout shift — all image containers have explicit aspect ratios defined in CSS before image loads
- Google Fonts loaded via next/font/google, not a link tag
- No unused CSS — Tailwind purge configured correctly
- No render-blocking scripts
- The Meta Pixel script uses strategy="afterInteractive" to never block paint

---

## SEO Meta Tags

In the page's metadata export:

```tsx
export const metadata: Metadata = {
  title: 'Paloma Ladies Beauty Salon | Nails, Hair & Waxing | Barsha Heights Dubai',
  description: 'Professional ladies beauty salon in Barsha Heights, Dubai. Gelish nails from AED 89, keratin treatment from AED 169, hair, waxing and threading. Book on WhatsApp today.',
  keywords: 'ladies salon barsha heights, nail salon dubai, gelish manicure dubai, keratin treatment barsha heights, hair salon tecom, waxing threading dubai',
  openGraph: {
    title: 'Paloma Ladies Beauty Salon | Barsha Heights Dubai',
    description: 'Nails, Hair, Waxing and Threading in Barsha Heights. Book on WhatsApp.',
    url: 'https://palomasalon.ae',
    siteName: 'Paloma Ladies Beauty Salon',
    locale: 'en_AE',
    type: 'website',
  },
}
```

---

## Smooth Scroll Behaviour

In globals.css:
```css
html {
  scroll-behavior: smooth;
}
```

All navigation links in footer use href="#section-id" for in-page smooth scroll.

Each section has an id: hero, services, gallery, why-paloma, reviews, location.

---

## Mobile-First Rules

Every section must be designed mobile-first. Desktop is the enhancement, mobile is the default.

On mobile:
- Font sizes slightly reduced (clamp() values for fluid typography)
- All grids collapse to single column unless specified otherwise
- Horizontal scroll only for review cards section
- No horizontal overflow anywhere else (overflow-x: hidden on body)
- Tap targets minimum 44px height for all buttons and links
- Floating WhatsApp button never overlaps content — add padding-bottom: 80px to the footer so content is never obscured

---

## File Structure

```
paloma-salon/
├── app/
│   ├── layout.tsx          (root layout with pixel, fonts, metadata)
│   ├── page.tsx            (imports all sections)
│   └── globals.css         (CSS variables, base styles, animations)
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── WhyPaloma.tsx
│   ├── Reviews.tsx
│   ├── Location.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx  (sticky floating button, used in layout)
├── utils/
│   └── pixel.ts            (Meta Pixel event helpers)
├── public/
│   └── images/             (all gallery and hero images go here)
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Deployment Instructions for Vercel

1. Push to GitHub repository named paloma-salon
2. Connect repository to Vercel
3. Framework preset: Next.js (auto-detected)
4. No environment variables needed at launch
5. After deploying, replace PALOMA_PIXEL_ID in layout.tsx with the real Meta Pixel ID from her Meta Business Manager
6. Add custom domain once purchased (palomasalon.ae recommended)
7. Vercel automatically handles SSL, CDN, and edge caching

---

## What Not To Build

Do not build any of the following — they are explicitly out of scope:

- Booking calendar or date picker
- Contact form or email capture
- User accounts or login
- Payment integration
- Blog or content pages
- Multiple pages or routing beyond the single landing page
- Cookie consent banner (add in month 2 if needed)
- Chat widget (WhatsApp IS the chat)
- Admin dashboard

---

## Final Check Before Going Live

Before the domain is pointed and the URL is shared with the client:

1. Open Chrome DevTools > Network tab > confirm no 404 errors on any asset
2. Open Meta Events Manager > Test Events tab > open the website and verify PageView fires immediately
3. Click every WhatsApp button and verify Contact event fires in Meta Events Manager
4. Scroll to services section and verify ViewContent fires
5. Run Lighthouse on mobile — score must be above 90 on Performance before launch
6. Test on a real iPhone and a real Android device, not just browser emulation
7. Confirm all WhatsApp links open the correct number with the pre-filled message
8. Confirm Google Maps embed loads and is interactive
9. Confirm the floating WhatsApp button is visible on all screen sizes and never obscures critical content
10. Share the Vercel preview URL with Sanji for final approval before pointing the domain
