"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Splash() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Once per browser session, and never for reduced-motion users.
    const seen = sessionStorage.getItem("stc_splash");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) return;
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const el = ref.current;
    if (!el) return;

    document.body.style.overflow = "hidden";
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("stc_splash", "1");
        document.body.style.overflow = "";
        setShow(false);
      },
    });

    tl.from(".splash-welcome", { y: 26, opacity: 0, duration: 0.8, ease: "power3.out" })
      .from(".splash-logo", { y: 22, opacity: 0, scale: 0.94, duration: 0.95, ease: "power3.out" }, "-=0.42")
      .from(".splash-line", { scaleX: 0, duration: 0.85, ease: "power2.out" }, "-=0.5")
      .to({}, { duration: 0.75 })
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
      <div className="splash-inner">
        <p className="splash-welcome">Welcome to</p>
        <Image
          className="splash-logo"
          src="/supreme/supreme_logo.png"
          alt="Supreme Trading Corp"
          width={440}
          height={110}
          priority
        />
        <span className="splash-line" />
      </div>
    </div>
  );
}
