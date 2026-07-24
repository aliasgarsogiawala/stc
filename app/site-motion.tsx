"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SiteMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const header = document.querySelector<HTMLElement>(".site-header");
    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 56);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

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

        gsap.utils.toArray<HTMLElement>(".gs-reveal").forEach((section, index) => {
          const direction = index % 2 === 0 ? 1 : -1;
          gsap.fromTo(
            section,
            {
              x: direction * 34,
              opacity: 0.35,
              clipPath: direction > 0 ? "inset(0 0 0 8%)" : "inset(0 8% 0 0)",
            },
            {
              x: 0,
              opacity: 1,
              clipPath: "inset(0 0% 0 0%)",
              duration: 1.05,
              ease: "power4.out",
              scrollTrigger: { trigger: section, start: "top 88%", once: true },
            },
          );
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

        // Product-page hero media moves while foreground copy stays visually anchored.
        gsap.utils.toArray<HTMLElement>(".prod-hero, .honey-hero, [data-product-hero]").forEach((hero) => {
          const mediaEl = hero.querySelector<HTMLElement>(".prod-hero-video, .honey-hero-video, [data-product-media]");
          const copyEl = hero.querySelector<HTMLElement>(".prod-hero-inner, .honey-hero-inner, [data-product-copy]");

          if (mediaEl) {
            gsap.fromTo(mediaEl, { scale: 1.03, yPercent: -2 }, {
              scale: 1.1,
              yPercent: 9,
              ease: "none",
              scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.8 },
            });
          }

          if (copyEl) {
            gsap.to(copyEl, {
              yPercent: -5,
              ease: "none",
              scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 },
            });
          }
        });

        // Pointer-aware card tilt and a local highlight that follows the cursor.
        const cardCleanups: Array<() => void> = [];
        gsap.utils.toArray<HTMLElement>(".tilt-card").forEach((card) => {
          const onMove = (event: PointerEvent) => {
            const rect = card.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width;
            const py = (event.clientY - rect.top) / rect.height;
            card.style.setProperty("--glow-x", `${px * 100}%`);
            card.style.setProperty("--glow-y", `${py * 100}%`);
            gsap.to(card, {
              rotateX: (0.5 - py) * 4,
              rotateY: (px - 0.5) * 5,
              y: -7,
              scale: 1.008,
              duration: 0.32,
              ease: "power2.out",
              overwrite: "auto",
            });
          };
          const onLeave = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              y: 0,
              scale: 1,
              duration: 0.55,
              ease: "power3.out",
              overwrite: "auto",
            });
          };
          card.addEventListener("pointermove", onMove);
          card.addEventListener("pointerleave", onLeave);
          cardCleanups.push(() => {
            card.removeEventListener("pointermove", onMove);
            card.removeEventListener("pointerleave", onLeave);
          });
        });

        // Contact office route and map curtain.
        const officeLine = document.querySelector<HTMLElement>(".contact-office-line-fill");
        if (officeLine) {
          gsap.fromTo(officeLine, { scaleX: 0 }, {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.inOut",
            transformOrigin: "left center",
            scrollTrigger: { trigger: ".contact-office-grid", start: "top 76%", once: true },
          });
        }

        const mapReveal = document.querySelector<HTMLElement>(".contact-map-reveal");
        const mapCurtain = document.querySelector<HTMLElement>(".contact-map-curtain");
        if (mapReveal && mapCurtain) {
          gsap.timeline({ scrollTrigger: { trigger: mapReveal, start: "top 82%", once: true } })
            .fromTo(mapReveal, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.15, ease: "power4.inOut" })
            .to(mapCurtain, { xPercent: 102, duration: 0.8, ease: "power3.inOut" }, "-=0.48");
        }

        // Footer rule draws first, then columns and links follow.
        const footer = document.querySelector<HTMLElement>(".site-footer");
        if (footer) {
          const footerTl = gsap.timeline({ scrollTrigger: { trigger: footer, start: "top 90%", once: true } });
          footerTl
            .fromTo(".footer-blue-rule", { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power3.inOut", transformOrigin: "left center" })
            .from(".footer-motion > *", { x: 20, opacity: 0, duration: 0.62, stagger: 0.055, ease: "power3.out" }, "-=0.35");
        }

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

        return () => cardCleanups.forEach((cleanup) => cleanup());
      });
    }, document.body);

    ScrollTrigger.refresh();
    return () => {
      window.removeEventListener("scroll", updateHeader);
      media.revert();
      context.revert();
    };
  }, [pathname]);

  return null;
}
