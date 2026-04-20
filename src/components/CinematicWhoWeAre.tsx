"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

export default function CinematicWhoWeAre() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 900,
    damping: 90,
    mass: 0.18,
  });

  const block1Opacity = useTransform(
    progress,
    [0, 0.18, 0.3],
    [1, 1, 0]
  );
  const block1Y = useTransform(progress, [0, 0.18, 0.3], [22, 0, -22]);
  const block1Scale = useTransform(progress, [0, 0.18, 0.3], [1, 1, 0.988]);
  const block1Filter = useTransform(
    progress,
    [0, 0.22, 0.3],
    ["blur(0px)", "blur(0px)", "blur(5px)"]
  );

  const block2Opacity = useTransform(
    progress,
    [0.24, 0.34, 0.58, 0.68],
    [0, 1, 1, 0]
  );
  const block2Y = useTransform(progress, [0.24, 0.46, 0.68], [22, 0, -22]);
  const block2Scale = useTransform(progress, [0.24, 0.46, 0.68], [0.988, 1, 0.988]);
  const block2Filter = useTransform(
    progress,
    [0.24, 0.34, 0.58, 0.68],
    ["blur(6px)", "blur(0px)", "blur(0px)", "blur(6px)"]
  );

  const block3Opacity = useTransform(progress, [0.56, 0.66, 1], [0, 1, 1]);
  const block3Y = useTransform(progress, [0.56, 0.72, 1], [22, 0, -22]);
  const block3Scale = useTransform(progress, [0.56, 0.72, 1], [0.99, 1, 1]);
  const block3Filter = useTransform(
    progress,
    [0.56, 0.66, 1],
    ["blur(6px)", "blur(0px)", "blur(0px)"]
  );
  // offset third scene vertically by -200px (move up)
  const block3YOffset = useTransform(block3Y, (v) => v - 200);

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      role="region"
      aria-label="Who We Are cinematic"
      className={`${jakarta.variable} cinematic-who-shell`}
    >
      <div className="cinematic-who-sticky">
        <div
          aria-hidden="true"
          className="cinematic-who-glow"
        />

        <div className="cinematic-who-stage" aria-live="polite">
          <motion.article
            style={{ opacity: block1Opacity, y: block1Y, scale: block1Scale, filter: block1Filter }}
            className="cinematic-who-scene"
          >
            <div className="cinematic-who-content">
              <h2 className="cinematic-who-title font-outfit">
                A&amp;T Nexus is a <span className="cinematic-who-highlight">digital transformation partner</span> for small and medium-sized businesses.
              </h2>
              <p className="cinematic-who-subtext font-jakarta">
                We streamline operations, automate workflows, and build <span className="cinematic-who-highlight">scalable systems</span> that keep teams focused on growth.
              </p>
            </div>
          </motion.article>

          <motion.article
            style={{ opacity: block2Opacity, y: block2Y, scale: block2Scale, filter: block2Filter }}
            className="cinematic-who-scene"
          >
            <div className="cinematic-who-content">
              <h2 className="cinematic-who-title font-outfit">
                Our expertise spans <span className="cinematic-who-highlight">backend operations, hiring, billing, care coordination, and process optimization</span>.
              </h2>
              <p className="cinematic-who-subtext font-jakarta">
                With hands-on experience in healthcare, home care, and service-based industries, we <span className="cinematic-who-highlight">implement, manage, and continuously optimize</span>.
              </p>
            </div>
          </motion.article>

          <motion.article
            style={{ opacity: block3Opacity, y: block3YOffset, scale: block3Scale, filter: block3Filter }}
            className="cinematic-who-scene third-scene"
          >
            <div className="cinematic-who-content">
              <h2 className="cinematic-who-title font-outfit">
                Practical. Data-driven. <span className="cinematic-who-highlight">Built for real-world execution.</span>
              </h2>
              <p className="cinematic-who-subtext font-jakarta">
                We help businesses reduce operational burden, cut costs, and scale efficiently &mdash; focused on turning complex operations into <span className="cinematic-who-highlight">simple, scalable systems</span>.
              </p>
            </div>
          </motion.article>
        </div>
      </div>

      <style jsx>{`
        .cinematic-who-shell {
          position: relative;
          height: 360vh;
          background: #000000;
          isolation: isolate;
        }

        .cinematic-who-sticky {
          position: sticky;
          /* account for the site header so the sticky area centers in the visible viewport */
          top: 92px;
          height: calc(100vh - 92px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-sizing: border-box;
          /* keep horizontal padding for side spacing, remove vertical padding so scenes center on viewport */
          padding: 0 clamp(28px, 6vw, 88px);
        }

        .cinematic-who-glow {
          pointer-events: none;
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(42rem, 80vw);
          aspect-ratio: 1 / 1;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          background: rgba(20, 241, 217, 0.05);
          filter: blur(120px);
          z-index: 0;
        }

        .cinematic-who-stage {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
        }

        .cinematic-who-scene {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          will-change: opacity, transform;
        }

        .cinematic-who-content {
          width: min(82vw, 1240px);
          max-width: 100%;
          text-align: center;
        }

        .cinematic-who-title {
          margin: 0;
          text-wrap: balance;
          color: #ffffff;
          font-size: clamp(2.25rem, 1.45rem + 3.1vw, 5.25rem);
          line-height: 1.06;
          letter-spacing: -0.02em;
          font-weight: 700;
        }

        .cinematic-who-subtext {
          margin: 24px 0 0;
          text-wrap: balance;
          color: #9ca3af;
          font-size: clamp(1.06rem, 0.98rem + 0.45vw, 1.34rem);
          line-height: 1.55;
        }

        .cinematic-who-highlight {
          color: #14f1d9;
          text-shadow: 0 0 20px rgba(20, 241, 217, 0.42);
        }

        @media (max-width: 980px) {
          .cinematic-who-sticky {
            padding: 0 clamp(20px, 5vw, 40px);
          }

          .cinematic-who-content {
            width: min(90vw, 860px);
          }
        }

        @media (max-width: 640px) {
          .cinematic-who-sticky {
            padding: 0 14px;
          }

          .cinematic-who-title {
            line-height: 1.1;
          }

          .cinematic-who-subtext {
            margin-top: 16px;
            line-height: 1.5;
          }
        }
      `}</style>
    </section>
  );
}