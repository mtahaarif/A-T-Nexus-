"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

export type BackendCoverageItem = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  bullets: string[];
  software: string;
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

type CoverageCardProps = {
  item: BackendCoverageItem;
  index: number;
  total: number;
};

type BackendCoverageCardsProps = {
  items: BackendCoverageItem[];
  title?: string;
  description?: string;
  className?: string;
};

function CoverageStackCard({ item, index, total }: CoverageCardProps) {
  const cardTrackRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardTrackRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const dimOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.28]);

  return (
    <div ref={cardTrackRef} className="backend-coverage-card-track">
      <motion.article
        style={{ scale, zIndex: total - index }}
        className="backend-coverage-card"
      >
        <motion.div style={{ opacity: dimOpacity }} className="backend-coverage-card-dim" />

        <div className="backend-coverage-card-layout">
          <div className="backend-coverage-card-main">
            <p className="backend-coverage-index backend-coverage-font-outfit">
              {item.id}
            </p>

            <h3 className="backend-coverage-title backend-coverage-font-outfit">
              {item.title}
            </h3>

            <p className="backend-coverage-subtitle backend-coverage-font-jakarta">
              {item.subtitle}
            </p>

            <p className="backend-coverage-desc backend-coverage-font-jakarta">
              {item.desc}
            </p>
          </div>

          <div className="backend-coverage-card-side">
            <ul className="backend-coverage-bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="backend-coverage-bullet backend-coverage-font-jakarta">
                  <span className="backend-coverage-bullet-dot" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="backend-coverage-software-block">
              <p className="backend-coverage-software-label backend-coverage-font-jakarta">
                Software Stack
              </p>
              <p className="backend-coverage-software">{item.software}</p>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function BackendCoverageCards({
  items,
  title = "",
  description = "",
  className,
}: BackendCoverageCardsProps) {
  const sectionClassName = [
    jakarta.variable,
    "backend-coverage-stack",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <div className="backend-coverage-inner">
        <div className="backend-coverage-head">
          {title ? (
            <>
              <h2 className="backend-coverage-heading backend-coverage-font-outfit">
                {title}
              </h2>
            </>
          ) : null}

          {description ? (
            <p className="backend-coverage-intro backend-coverage-font-jakarta">
              {description}
            </p>
          ) : null}
        </div>

        <div className="backend-coverage-list">
          {items.map((item, index) => (
            <CoverageStackCard key={item.id} item={item} index={index} total={items.length} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .backend-coverage-font-outfit {
          font-family: var(--font-outfit), "Segoe UI", sans-serif;
        }

        .backend-coverage-font-jakarta {
          font-family: var(--font-jakarta), var(--font-body);
        }
      `}</style>
    </section>
  );
}
