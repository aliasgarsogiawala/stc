import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Aamir Sogiawala',
  description: "Supreme Trading Corp",
  openGraph: {
    title: 'aamirsogiawal - Overview',
    description: 'Practicing Medical Cosmetologist, Trichologist & Skin Aesthetician. aamirsogiawal has premium business services available. Contact for consultations.',
    images: ['/dad.jpeg'], // Just use your existing image
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aamirsogiawal - Overview', 
    description: 'Practicing Medical Cosmetologist, Trichologist & Skin Aesthetician.',
    images: ['/dad.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
