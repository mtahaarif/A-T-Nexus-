"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function useRevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    if (!revealNodes.length) {
      return;
    }

    if (prefersReducedMotion) {
      revealNodes.forEach((node) => node.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in-view", entry.isIntersecting);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);
}
