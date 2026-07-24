"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Splash() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show on every reload for now (never for reduced-motion users).
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const frame = window.requestAnimationFrame(() => setShow(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!show) return;
    const el = ref.current;
    if (!el) return;

    document.body.style.overflow = "hidden";
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setShow(false);
      },
    });

    tl.from(".splash-shadow, .splash-bokeh", { opacity: 0, scale: 1.06, duration: 1.4, ease: "power2.out", stagger: 0.1 }, 0)
      .from(".splash-welcome", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, 0.35)
      .from(".splash-logo", { y: 18, opacity: 0, scale: 0.97, duration: 0.9, ease: "power3.out" }, "-=0.44")
      .from(".splash-tagline", { y: 12, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
      .fromTo(".splash-progress > span", { scaleX: 0 }, { scaleX: 1, duration: 2.0, ease: "power1.inOut" }, 0.5)
      .to({}, { duration: 0.35 })
      .to(".splash-inner, .splash-progress", { y: -16, opacity: 0, duration: 0.5, ease: "power2.in" })
      .to(el, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.12");

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="splash" ref={ref} aria-hidden="true">
      <span className="splash-bokeh splash-bokeh-1" />
      <span className="splash-bokeh splash-bokeh-2" />

      <Image className="splash-shadow splash-shadow-1" src="/supreme/source/bg-leaf1.png" alt="" width={309} height={474} />
      <Image className="splash-shadow splash-shadow-2" src="/supreme/source/bg-leaf3.png" alt="" width={278} height={394} />
      <Image className="splash-shadow splash-shadow-3" src="/supreme/source/bg-leaf4.png" alt="" width={215} height={465} />

      <div className="splash-inner">
        <p className="splash-welcome">Welcome to</p>
        <Image
          className="splash-logo"
          src="/supreme/supreme_logo@3x.png"
          alt="Supreme Trading Corp"
          width={1071}
          height={270}
          priority
          quality={100}
          unoptimized
        />
        <p className="splash-tagline">Sourced · Graded · Delivered</p>
      </div>

      <div className="splash-progress"><span /></div>
    </div>
  );
}
