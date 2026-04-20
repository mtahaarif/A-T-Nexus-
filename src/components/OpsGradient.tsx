"use client";

import { useEffect, useRef } from "react";

export default function OpsGradient() {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const computed = getComputedStyle(root);
    let dark = (computed.getPropertyValue("--bg") || "#051010").trim();
    if (!dark) dark = "#051010";

    const darkHex = anyColorToHex(dark) || "#051010";
    const { r, g, b } = hexToRgb(darkHex);
    const lightRgb = lightenRgb({ r, g, b }, 0.5); // 50% closer to white
    const lightHex = rgbToHex(lightRgb.r, lightRgb.g, lightRgb.b);

    root.style.setProperty("--ops-bg-dark", darkHex);
    root.style.setProperty("--ops-bg-light", lightHex);
    root.style.setProperty("--ops-bg-light-rgb", `${lightRgb.r}, ${lightRgb.g}, ${lightRgb.b}`);
    root.style.setProperty("--ops-gradient-blend", "0");

    let current = 0;
    let target = 0;

    const updateTarget = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      target = progress;
    };

    const step = () => {
      // ease toward target
      current += (target - current) * 0.12;
      // clamp tiny values
      if (Math.abs(current) < 0.00001) current = 0;
      root.style.setProperty("--ops-gradient-blend", String(Number(current.toFixed(4))));
      rafRef.current = requestAnimationFrame(step);
    };

    updateTarget();
    step();

    const onScroll = () => updateTarget();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateTarget);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  return (
    <>
      <div className="ops-bg-layer ops-bg-dark" aria-hidden="true" />
      <div className="ops-bg-layer ops-bg-light" aria-hidden="true" />
    </>
  );
}

function anyColorToHex(col: string) {
  col = col.trim();
  if (col.startsWith("#")) return col;
  const m = col.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (m) return rgbToHex(Number(m[1]), Number(m[2]), Number(m[3]));
  return null;
}

function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const num = parseInt(hex, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function rgbToHex(r: number, g: number, b: number) {
  return (
    "#" +
    [r, g, b]
      .map((n) => {
        const v = Math.max(0, Math.min(255, Math.round(n)));
        return v.toString(16).padStart(2, "0");
      })
      .join("")
  );
}

function lightenRgb(col: { r: number; g: number; b: number }, factor: number) {
  // move each channel toward 255 by factor (0..1)
  return {
    r: Math.round(col.r + (255 - col.r) * factor),
    g: Math.round(col.g + (255 - col.g) * factor),
    b: Math.round(col.b + (255 - col.b) * factor),
  };
}
