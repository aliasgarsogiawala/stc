import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import SiteMotion from "./site-motion";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "./seo";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://supremetrading.in"),
  title: {
    default: "Supreme Trading Corp | Industrial & Specialty Raw Materials",
    template: "%s | Supreme Trading Corp",
  },
  description:
    "Mumbai-based sourcing partner for industrial chemicals, resins, food ingredients and specialty raw materials for wholesale and export buyers.",
  alternates: { canonical: "/" },
  icons: { icon: "/supreme/favicon.png" },
  openGraph: {
    title: "Supreme Trading Corp | Industrial & Specialty Raw Materials",
    description: "Supplier of industrial chemicals, resins, food ingredients and specialty raw materials.",
    url: "/",
    siteName: "Supreme Trading Corp",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Supreme Trading Corp raw material sourcing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supreme Trading Corp | Industrial & Specialty Raw Materials",
    description: "Supplier of industrial chemicals, resins, food ingredients and specialty raw materials.",
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
