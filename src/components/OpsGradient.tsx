"use client";

import { useEffect, useRef } from "react";

function clamp(v: number, a = 0, b = 255) {
  return Math.max(a, Math.min(b, Math.round(v)));
}

function hexToRgb(hex: string) {
  const h = hex.replace(/^#/, "").trim();
  if (h.length === 3) {
    const r = parseInt(h[0] + h[0], 16);
    const g = parseInt(h[1] + h[1], 16);
    const b = parseInt(h[2] + h[2], 16);
    return { r, g, b };
  }
  if (h.length === 6) {
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return { r, g, b };
  }
  return null;
}

function rgbToHex(r: number, g: number, b: number) {
  return (
    "#" +
    [r, g, b]
      .map((n) => clamp(n).toString(16).padStart(2, "0"))
      .join("")
  );
}

// Move each channel 50% towards white (255)
function brighterHex(hex: string, factor = 0.5) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const r = clamp(rgb.r + (255 - rgb.r) * factor);
  const g = clamp(rgb.g + (255 - rgb.g) * factor);
  const b = clamp(rgb.b + (255 - rgb.b) * factor);
  return rgbToHex(r, g, b);
}

export default function OpsGradient({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const computed = getComputedStyle(document.documentElement).getPropertyValue("--bg") || "#051010";
    const dark = computed.trim() || "#051010";
    const light = brighterHex(dark, 0.5);

    el.style.setProperty("--ops-dark", dark);
    el.style.setProperty("--ops-light", light);

    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || window.pageYOffset;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      el.style.setProperty("--ops-t-pct", `${Math.round(progress * 100)}%`);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    // initialize
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="ops-gradient-root">
      {children}
    </div>
  );
}
