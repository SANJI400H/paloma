import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.palomaladiessalon.com"),
  title: "Paloma Ladies Beauty Salon | Nails, Hair, Waxing & Threading | Barsha Heights Dubai",
  description:
    "Professional ladies beauty salon in Barsha Heights, Dubai. Nail services, hair treatments, keratin, waxing and threading. Located at Golden Tulip Media Hotel, Hessa Street. Book on WhatsApp.",
  keywords: [
    "ladies salon barsha heights",
    "nail salon dubai",
    "beauty salon barsha heights",
    "keratin treatment dubai",
    "hair salon tecom",
    "waxing threading dubai",
    "gelish nails dubai",
    "ladies beauty salon dubai",
    "paloma salon dubai",
    "salon near me barsha heights",
    "nail salon near me dubai",
    "hair treatment barsha heights",
  ],
  authors: [{ name: "Paloma Ladies Beauty Salon" }],
  creator: "Paloma Ladies Beauty Salon",
  openGraph: {
    title: "Paloma Ladies Beauty Salon | Barsha Heights Dubai",
    description:
      "Professional nail, hair, waxing and threading services in Barsha Heights. Book on WhatsApp today.",
    url: "https://www.palomaladiessalon.com",
    siteName: "Paloma Ladies Beauty Salon",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paloma Ladies Beauty Salon | Barsha Heights Dubai",
    description:
      "Professional nail, hair, waxing and threading services in Barsha Heights Dubai.",
  },
  alternates: {
    canonical: "https://www.palomaladiessalon.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Paloma Ladies Beauty Salon",
              image: "https://www.palomaladiessalon.com/images/logo.jpg",
              url: "https://www.palomaladiessalon.com",
              telephone: "+971508057484",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Golden Tulip Media Hotel, Hessa Street",
                addressLocality: "Al Barsha Heights",
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.0986,
                longitude: 55.1699,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                opens: "10:00",
                closes: "20:00",
              },
              priceRange: "AED 15 - AED 1500",
              description:
                "Paloma Ladies Beauty Salon in Barsha Heights, Dubai. Professional nail, hair, waxing and threading services for women. Located at Golden Tulip Media Hotel, Hessa Street.",
              sameAs: [
                "https://www.instagram.com/paloma_ladies_beauty_salon/",
                "https://www.facebook.com/PalomaDubai",
              ],
            }),
          }}
        />
      </head>
      <body className="overflow-x-hidden antialiased">
        {children}
        <WhatsAppButton />
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
              fbq('init', '1335803918469334');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1335803918469334&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
