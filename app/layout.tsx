import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import SiteMotion from "./site-motion";
import "./globals.css";

const display = Cormorant_Garamond({
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
  title: "Supreme Trading Corp | Industrial & Specialty Raw Materials",
  description:
    "Mumbai-based sourcing partner for industrial chemicals, resins, oils, food ingredients and specialty raw materials for wholesale and export buyers.",
  icons: { icon: "/supreme/favicon.png" },
  openGraph: {
    title: "Supreme Trading Corp | Industrial & Specialty Raw Materials",
    description: "Supplier of industrial chemicals, resins, oils, food ingredients and specialty raw materials.",
    type: "website",
    images: [{ url: "/supreme/source/bredcrumb-bg.jpg", width: 1920, height: 987, alt: "Supreme Trading Corp raw material sourcing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supreme Trading Corp | Industrial & Specialty Raw Materials",
    description: "Supplier of industrial chemicals, resins, oils, food ingredients and specialty raw materials.",
    images: ["/supreme/source/bredcrumb-bg.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body><SiteMotion />{children}</body>
    </html>
  );
}
