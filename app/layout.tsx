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
  title: "Paloma Ladies Beauty Salon | Nails, Hair & Waxing | Barsha Heights Dubai",
  description:
    "Professional ladies beauty salon in Barsha Heights, Dubai. Gelish nails from AED 89, keratin treatment from AED 169, hair, waxing and threading. Book on WhatsApp today.",
  keywords:
    "ladies salon barsha heights, nail salon dubai, gelish manicure dubai, keratin treatment barsha heights, hair salon tecom, waxing threading dubai",
  openGraph: {
    title: "Paloma Ladies Beauty Salon | Barsha Heights Dubai",
    description:
      "Nails, Hair, Waxing and Threading in Barsha Heights. Book on WhatsApp.",
    url: "https://palomasalon.ae",
    siteName: "Paloma Ladies Beauty Salon",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
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
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "PALOMA_PIXEL_ID"}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
    </html>
  );
}
