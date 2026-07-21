"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SiteMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTimeline
          .from(".site-header", { y: -24, opacity: 0, duration: 0.65 })
          .from("[data-hero-copy] > *, [data-hero-item]", { y: 36, opacity: 0, duration: 0.78, stagger: 0.08 }, "-=0.28")
          .from("[data-hero-media]", { scale: 1.045, opacity: 0, duration: 1.05 }, "-=0.86")
          .from("[data-hero-meta] > *", { y: 18, opacity: 0, duration: 0.55, stagger: 0.06 }, "-=0.58");

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

        if (document.querySelector(".home-hero .hero-image")) {
          gsap.to(".home-hero .hero-image", {
            scale: 1.08,
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: ".home-hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        }

        gsap.utils.toArray<HTMLElement>(".image-drift").forEach((image) => {
          gsap.fromTo(image, { yPercent: -3 }, {
            yPercent: 3,
            ease: "none",
            scrollTrigger: { trigger: image, start: "top bottom", end: "bottom top", scrub: 0.8 },
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
