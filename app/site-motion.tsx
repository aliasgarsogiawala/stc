"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SiteMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Split headings marked [data-reveal] into word spans once.
    const splitTargets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    splitTargets.forEach((el) => {
      if (el.dataset.split === "done") return;
      const words = (el.textContent ?? "").split(/\s+/).filter(Boolean);
      el.textContent = "";
      words.forEach((word, i) => {
        const outer = document.createElement("span");
        outer.className = "reveal-word";
        const inner = document.createElement("span");
        inner.className = "reveal-word-inner";
        inner.textContent = word;
        outer.appendChild(inner);
        el.appendChild(outer);
        if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
      });
      el.dataset.split = "done";
    });

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTimeline
          .from(".site-header", { y: -24, opacity: 0, duration: 0.65 })
          .from("[data-hero-copy] > *, [data-hero-item]", { y: 36, opacity: 0, duration: 0.78, stagger: 0.08 }, "-=0.28")
          .from("[data-hero-media]", { scale: 1.045, opacity: 0, duration: 1.05 }, "-=0.86")
          .from("[data-hero-meta] > *", { y: 18, opacity: 0, duration: 0.55, stagger: 0.06 }, "-=0.58");

        // Word-by-word heading reveal on scroll.
        splitTargets.forEach((el) => {
          gsap.from(el.querySelectorAll(".reveal-word-inner"), {
            yPercent: 118,
            opacity: 0,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.055,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>(".gs-reveal").forEach((section) => {
          gsap.from(section, {
            y: 44,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 86%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>(".gs-stagger").forEach((group) => {
          const children = Array.from(group.children);
          gsap.from(children, {
            y: 30,
            opacity: 0,
            duration: 0.72,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 84%", once: true },
          });
        });

        // Clip-path image reveals.
        gsap.utils.toArray<HTMLElement>(".gs-clip").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(0 0 100% 0)" },
            {
              clipPath: "inset(0 0 0% 0)",
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            },
          );
        });

        // Animated number counters.
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const end = parseFloat(el.dataset.count ?? "0");
          const suffix = el.dataset.suffix ?? "";
          const obj = { val: 0 };
          gsap.to(obj, {
            val: end,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toLocaleString() + suffix;
            },
          });
        });

        // Hero parallax on the background image.
        if (document.querySelector(".home-hero .hero-image")) {
          gsap.to(".home-hero .hero-image", {
            scale: 1.08,
            yPercent: 3,
            ease: "none",
            scrollTrigger: { trigger: ".home-hero", start: "top top", end: "bottom top", scrub: 0.7 },
          });
        }

        gsap.utils.toArray<HTMLElement>(".image-drift").forEach((image) => {
          gsap.fromTo(image, { yPercent: -3 }, {
            yPercent: 3,
            ease: "none",
            scrollTrigger: { trigger: image, start: "top bottom", end: "bottom top", scrub: 0.8 },
          });
        });

        // Layered parallax — [data-parallax] with optional speed.
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || "0.2");
          gsap.fromTo(el, { yPercent: -speed * 40 }, {
            yPercent: speed * 40,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
          });
        });

        // Slow drift + rotate for decorative botanical assets.
        gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el, i) => {
          gsap.to(el, {
            yPercent: i % 2 === 0 ? 22 : -22,
            rotate: i % 2 === 0 ? 8 : -6,
            ease: "none",
            scrollTrigger: { trigger: el.closest("section") ?? el, start: "top bottom", end: "bottom top", scrub: 1.2 },
          });
        });
      });
    }, document.body);

    ScrollTrigger.refresh();
    return () => {
      media.revert();
      context.revert();
    };
  }, [pathname]);

  return null;
}
