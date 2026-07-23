"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

// Approx x-positions (% of width) of the drip tips in honeydrip.png,
// so falling droplets detach from the right places.
const FALLS = [
  { left: "13%", delay: 0.0, dur: 2.6, size: 12 },
  { left: "27%", delay: 1.3, dur: 3.1, size: 9 },
  { left: "45%", delay: 0.6, dur: 2.3, size: 15 },
  { left: "62%", delay: 1.9, dur: 2.9, size: 10 },
  { left: "79%", delay: 1.0, dur: 3.3, size: 11 },
];

export default function HoneyHero() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        // Living "ooze" — the drip sheet gently stretches from its top edge.
        const sheet = root.current?.querySelector(".honey-drip-img");
        if (sheet) {
          gsap.to(sheet, {
            scaleY: 1.035,
            y: 5,
            transformOrigin: "top center",
            duration: 3.6,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        }

        // Droplets detach from the tips and fall, looping forever.
        FALLS.forEach((f, i) => {
          const drop = root.current?.querySelector<HTMLElement>(`[data-fall="${i}"]`);
          if (!drop) return;
          const tl = gsap.timeline({ repeat: -1, delay: f.delay });
          tl.set(drop, { y: 0, opacity: 0, scaleY: 0.6 })
            .to(drop, { opacity: 1, scaleY: 1.4, duration: 0.35, ease: "power1.in" })
            .to(drop, { y: "42vh", scaleY: 1, opacity: 0, duration: f.dur, ease: "power1.in" })
            .to({}, { duration: 1.1 });
        });
      });
    }, root);

    return () => {
      media.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section className="honey-hero" ref={root}>
      {/* Macro video slot — drop an MP4 at /supreme/media/honey-pour-loop.mp4
          (poster falls back to the amber gradient if the file is absent). */}
      <video
        className="honey-hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/supreme/media/honey-pour-loop-poster.jpg"
      >
        <source src="/supreme/media/honey-pour-loop.mp4" type="video/mp4" />
      </video>
      <div className="honey-hero-tint" />

      <Image className="honey-hero-leaf honey-hero-leaf-1" data-float src="/supreme/premium/mint-leaves.png" alt="" width={340} height={340} />
      <Image className="honey-hero-leaf honey-hero-leaf-2" data-float src="/supreme/premium/mint-leaves.png" alt="" width={260} height={260} />

      {/* Real honey dripping from the top edge + coded falling droplets */}
      <div className="honey-drip-layer" aria-hidden="true">
        <Image
          className="honey-drip-img"
          src="/honeydrip-cut.png"
          alt=""
          width={623}
          height={240}
          priority
        />
        {FALLS.map((f, i) => (
          <span
            key={i}
            className="honey-fall-drop"
            data-fall={i}
            style={{ left: f.left, width: f.size, height: f.size * 1.3 }}
          />
        ))}
      </div>

      <div className="honey-hero-inner">
        <div className="catalog-breadcrumb" data-hero-item>
          <Link href="/">Home</Link><span>/</span>
          <Link href="/products">Products</Link><span>/</span>
          <span>Honey</span>
        </div>
        <p className="eyebrow honey-eyebrow" data-hero-item><span /> Pure &amp; raw</p>
        <h1 data-hero-item>Raw honey, sourced by variant</h1>
        <p className="honey-hero-lead" data-hero-item>
          Multiflora, forest, jamun and tulsi honey, each selected on its own merit and
          supplied in bulk to the grade your line needs.
        </p>
        <div className="honey-hero-actions" data-hero-item>
          <a className="button button-honey" href="#variants">View honey variants</a>
          <Link className="text-link" href="/contact#enquiry">Request a sample</Link>
        </div>
      </div>
    </section>
  );
}
