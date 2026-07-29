"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

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
    key: "herbs",
    eyebrow: "Whole & botanical",
    title: "Medicinal Herbs & Spices",
    lead: "Cleaned, graded and supplied whole, cut or milled to your specification.",
    video: "/supreme/media/herbs-loop.mp4",
    poster: "/supreme/media/herbs-loop-poster.jpg",
    cta: { label: "Explore medicinal herbs", href: "/products/herbs" },
  },
  {
    key: "overview",
    eyebrow: "Established in Mumbai · 2002",
    title: "Chemicals",
    lead: "Sourced to spec and supplied in bulk to manufacturers, wholesalers and export buyers.",
    video: "/supreme/media/botanical-trade-loop.mp4",
    poster: "/supreme/media/botanical-trade-loop-poster.jpg",
    cta: { label: "Explore food herbs", href: "/products/food-ingredients" },
  },
  {
    key: "food-overview",
    eyebrow: "Established in Mumbai · 2002",
    title: "Food Herbs",
    lead: "Sourced to spec and supplied in bulk to manufacturers, wholesalers and export buyers.",
    video: "/supreme/media/botanical-trade-loop.mp4",
    poster: "/supreme/media/botanical-trade-loop-poster.jpg",
    cta: { label: "Explore petals", href: "/products/petals" },
  },
  {
    key: "Petals",
    eyebrow: "Established in Mumbai · 2002",
    title: "Petals",
    lead: "Sourced to spec and supplied in bulk to manufacturers, wholesalers and export buyers.",
    video: "/supreme/media/botanical-trade-loop.mp4",
    poster: "/supreme/media/botanical-trade-loop-poster.jpg",
    cta: { label: "View products", href: "/products" },
  },
  {
    key: "honey",
    eyebrow: "Pure & raw",
    title: "Honey",
    lead: "Multiflora, forest, jamun and tulsi honey, supplied in bulk to grade.",
    video: "/supreme/media/honey-pour-loop.mp4",
    poster: "/supreme/media/honey-pour-loop-poster.jpg",
    cta: { label: "Explore honey", href: "/products/honey" },
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const transitioning = useRef(false);

  const go = useCallback((next: number) => {
    if (transitioning.current) return;
    const destination = (next + slides.length) % slides.length;
    const content = contentRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!content || reduce) {
      setActive(destination);
      return;
    }

    transitioning.current = true;
    gsap.to(content.children, {
      yPercent: -34,
      opacity: 0,
      clipPath: "inset(100% 0 0 0)",
      duration: 0.46,
      stagger: 0.035,
      ease: "power3.in",
      onComplete: () => setActive(destination),
    });
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

  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      transitioning.current = false;
      return;
    }

    gsap.fromTo(
      content.children,
      { yPercent: 38, opacity: 0, clipPath: "inset(0 0 100% 0)" },
      {
        yPercent: 0,
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 0.72,
        stagger: 0.065,
        ease: "power4.out",
        onComplete: () => { transitioning.current = false; },
      },
    );
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
        <div className="hc-content" key={current.key} ref={contentRef}>
          <p className="eyebrow hc-eyebrow"><span /> {current.eyebrow}</p>
          <h1>{current.title}</h1>
          <p className="hc-lead">{current.lead}</p>
          <div className="hc-actions">
            <Link className="button" href={current.cta.href}>{current.cta.label}</Link>
            <Link className="text-link" href="/contact#enquiry">Send enquiry</Link>
          </div>
        </div>

      </div>
    </section>
  );
}
