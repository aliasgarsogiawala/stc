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
    setShow(true);
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

    tl.from(".splash-ring", { opacity: 0, scale: 0.92, duration: 1.1, ease: "power2.out", stagger: 0.12 }, 0)
      .from(".splash-welcome", { y: 22, opacity: 0, duration: 0.8, ease: "power3.out" }, 0.15)
      .from(".splash-logo", { y: 20, opacity: 0, scale: 0.96, duration: 0.95, ease: "power3.out" }, "-=0.42")
      .from(".splash-line", { scaleX: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .from(".splash-tagline", { y: 12, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.45")
      .to({}, { duration: 0.8 })
      .to(".splash-inner", { y: -18, opacity: 0, duration: 0.55, ease: "power2.in" })
      .to(el, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.15");

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="splash" ref={ref} aria-hidden="true">
      <span className="splash-ring splash-ring-1" />
      <span className="splash-ring splash-ring-2" />
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
        <span className="splash-line" />
        <p className="splash-tagline">Industrial &amp; Specialty Raw Materials · Since 2002</p>
      </div>
    </div>
  );
}
