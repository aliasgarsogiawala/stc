"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

type Slide = {
  key: string;
  eyebrow: string;
  title: string;
  lead: string;
  video: string;
  poster: string;
  cta: { label: string; href: string };
};

const slides: Slide[] = [
  {
    key: "overview",
    eyebrow: "Established in Mumbai · 2002",
    title: "Industrial Chemicals & Raw Materials",
    lead: "Sourced to spec and supplied in bulk to manufacturers, wholesalers and export buyers.",
    video: "/supreme/media/botanical-trade-loop.mp4",
    poster: "/supreme/media/botanical-trade-loop-poster.jpg",
    cta: { label: "View products", href: "/products" },
  },
  {
    key: "honey",
    eyebrow: "Pure & raw",
    title: "Honey, sourced by variant",
    lead: "Multiflora, forest, jamun and tulsi honey, supplied in bulk to grade.",
    video: "/supreme/media/honey-pour-loop.mp4",
    poster: "/supreme/media/honey-pour-loop-poster.jpg",
    cta: { label: "Explore honey", href: "/products/honey" },
  },
  {
    key: "herbs",
    eyebrow: "Whole & botanical",
    title: "Herbs, roots & trade spices",
    lead: "Cleaned, graded and supplied whole, cut or milled to your specification.",
    video: "/supreme/media/herbs-loop.mp4",
    poster: "/supreme/media/herbs-loop-poster.jpg",
    cta: { label: "Explore herbs", href: "/products/herbs" },
  },
  {
    key: "oils",
    eyebrow: "Distilled & pressed",
    title: "Essential & medical oils",
    lead: "Steam-distilled and cold-pressed, packed light-safe to protect the profile.",
    video: "/supreme/media/oils-loop.mp4",
    poster: "/supreme/media/oils-loop-poster.jpg",
    cta: { label: "Explore oils", href: "/products/oils" },
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const go = useCallback((next: number) => {
    setActive((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === active) {
        video.currentTime = 0;
        void video.play().catch(() => {
          // Muted inline playback is allowed by modern browsers; the poster remains as fallback.
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [active]);

  const current = slides[active];

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Product highlights"
    >
      {slides.map((slide, i) => (
        <div className={`hc-slide ${i === active ? "is-active" : ""}`} key={slide.key} aria-hidden={i !== active}>
          <video
            ref={(video) => { videoRefs.current[i] = video; }}
            className="hc-video"
            autoPlay={i === 0}
            muted
            playsInline
            preload={i === active || i === (active + 1) % slides.length ? "auto" : "metadata"}
            poster={slide.poster}
            onEnded={() => {
              if (i === active) go(i + 1);
            }}
          >
            <source src={slide.video} type="video/mp4" />
          </video>
          <div className="hc-shade" />
        </div>
      ))}

      <div className="hc-body">
        <div className="hc-content" key={current.key}>
          <p className="eyebrow hc-eyebrow"><span /> {current.eyebrow}</p>
          <h1>{current.title}</h1>
          <p className="hc-lead">{current.lead}</p>
          <div className="hc-actions">
            <Link className="button" href={current.cta.href}>{current.cta.label}</Link>
            <Link className="text-link" href="/contact#enquiry">Send enquiry</Link>
          </div>
        </div>

      </div>

      <div className="hero-proof" aria-label="Company highlights">
        <div><strong>2002</strong><span>Established in Mumbai</span></div>
        <div><strong>800+</strong><span>Materials sourced</span></div>
        <div><strong>Bulk</strong><span>India and export supply</span></div>
      </div>
    </section>
  );
}
