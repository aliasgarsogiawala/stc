"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "./icons";

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

const DURATION = 6000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setActive((prev) => (next + slides.length) % slides.length);
  }, []);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(() => go(active + 1), DURATION);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, paused, go]);

  const current = slides[active];

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Product highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div className={`hc-slide ${i === active ? "is-active" : ""}`} key={slide.key} aria-hidden={i !== active}>
          <video
            className="hc-video"
            autoPlay
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "metadata"}
            poster={slide.poster}
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
            <Link className="button button-honey" href={current.cta.href}>{current.cta.label}</Link>
            <Link className="text-link link-arrow" href="/contact#enquiry">Send enquiry <ArrowUpRight /></Link>
          </div>
        </div>

        <div className="hc-controls">
          <button type="button" className="hc-arrow" aria-label="Previous slide" onClick={() => go(active - 1)}>
            <ArrowLeft />
          </button>
          <div className="hc-dots" role="tablist">
            {slides.map((slide, i) => (
              <button
                key={slide.key}
                type="button"
                className={`hc-dot ${i === active ? "is-active" : ""}`}
                aria-label={`Go to ${slide.key} slide`}
                aria-selected={i === active}
                onClick={() => setActive(i)}
              >
                <span className="hc-dot-label">{slide.key}</span>
                <i style={{ animationDuration: `${DURATION}ms`, animationPlayState: i === active && !paused ? "running" : "paused" }} />
              </button>
            ))}
          </div>
          <button type="button" className="hc-arrow" aria-label="Next slide" onClick={() => go(active + 1)}>
            <ArrowRight />
          </button>
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
