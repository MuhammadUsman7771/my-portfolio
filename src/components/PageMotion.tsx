"use client";

import { animate, motion, useReducedMotion, useScroll } from "framer-motion";
import { useEffect } from "react";

export default function PageMotion() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (reduced !== false) return;
    const animations: ReturnType<typeof animate>[] = [];
    const seen = new WeakSet<Element>();
    const reveal = (element: HTMLElement, delay = 0) => {
      if (seen.has(element)) return;
      seen.add(element);
      animations.push(
        animate(
          element,
          { opacity: [0.35, 1], y: [24, 0] },
          {
            duration: 0.65,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        ),
      );
    };
    const hero = document.querySelectorAll<HTMLElement>(
      ".hero h1 > span, .hero-intro, .featured-project",
    );
    hero.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < innerHeight && rect.bottom > 0)
        reveal(element, index * 0.09);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    const observe = () =>
      document
        .querySelectorAll<HTMLElement>(
          "#projects .section-heading, .project-card, #about > div > div, #experience article, #experience h2, .toolkit-grid article, .contact-copy, .contact-form",
        )
        .forEach((element) => {
          if (!seen.has(element)) observer.observe(element);
        });
    observe();
    // Newly displayed/filter-selected project cards receive the same entrance.
    const mutations = new MutationObserver(observe);
    const projects = document.querySelector(".project-grid");
    if (projects) mutations.observe(projects, { childList: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
      animations.forEach((animation) => animation.stop());
      document
        .querySelectorAll<HTMLElement>("#main [style]")
        .forEach((element) => {
          if (seen.has(element)) {
            element.style.removeProperty("opacity");
            element.style.removeProperty("transform");
          }
        });
    };
  }, [reduced]);

  return reduced ? null : (
    <motion.div
      className="reading-progress"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
