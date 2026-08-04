import type { Metadata } from "next";
import { Libre_Franklin, Source_Sans_3 } from "next/font/google";
import SiteMotion from "./site-motion";
import { JsonLd, organizationJsonLd, websiteJsonLd, SITE_URL } from "./seo";
import "./globals.css";

const display = Libre_Franklin({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Supreme Trading Corp | Industrial & Specialty Raw Materials",
    template: "%s | Supreme Trading Corp",
  },
  description:
    "Mumbai-based sourcing partner for industrial chemicals, resins, food herbs and specialty raw materials for wholesale and export buyers.",
  alternates: { canonical: "/" },
  icons: { icon: "/supreme/favicon.png" },
  openGraph: {
    title: "Supreme Trading Corp | Industrial & Specialty Raw Materials",
    description: "Supplier of industrial chemicals, resins, food herbs and specialty raw materials.",
    url: "/",
    siteName: "Supreme Trading Corp",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Supreme Trading Corp raw material sourcing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supreme Trading Corp | Industrial & Specialty Raw Materials",
    description: "Supplier of industrial chemicals, resins, food herbs and specialty raw materials.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <SiteMotion />
        {children}
      </body>
    </html>
  );
}
