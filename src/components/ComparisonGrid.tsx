"use client";

import { Check, X } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

type ComparisonRow = {
  aspect: string;
  fullTime: string;
  atNexus: string;
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

const comparisonRows: ComparisonRow[] = [
  { aspect: "Weekend on-calls", fullTime: "Extra hourly pay & benefits", atNexus: "24/7 on-call service at affordable rates" },
  { aspect: "Annual expenses", fullTime: "$60,000 - $65,000", atNexus: "50% less expenses" },
  { aspect: "Cost", fullTime: "High fixed cost", atNexus: "Flexible & scalable" },
  { aspect: "Hiring time", fullTime: "Weeks/months", atNexus: "Immediate start" },
  { aspect: "Skill coverage", fullTime: "Limited", atNexus: "Multi-skill team" },
  { aspect: "Training burden", fullTime: "On you", atNexus: "Already trained" },
  { aspect: "Scalability", fullTime: "Slow", atNexus: "Instant" },
  { aspect: "Risk", fullTime: "High turnover", atNexus: "Stable operations" },
];

type ComparisonGridProps = {
  className?: string;
  title?: string;
};

export default function ComparisonGrid({
  className,
  title = "Simple Comparison",
}: ComparisonGridProps) {
  const sectionClassName = [
    jakarta.variable,
    "comparison-grid-section section-pad-sm",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <div className="container">
        <div className="section-head comparison-grid-head">
          <h2 className="font-outfit">{title}</h2>
        </div>

        <div
          className="comparison-grid-shell font-jakarta"
          role="table"
          aria-label="Simple dedicated ops comparison"
        >
          <div className="comparison-grid-hero-column" aria-hidden="true" />

          <div className="comparison-grid-header-row" role="row">
            <p className="comparison-grid-col comparison-grid-col-aspect" role="columnheader">
              Aspect
            </p>
            <p className="comparison-grid-col comparison-grid-col-fulltime" role="columnheader">
              Full-Time Staff (onsite)
            </p>
            <p className="comparison-grid-col comparison-grid-col-nexus" role="columnheader">
              A&amp;T Nexus (remote)
            </p>
          </div>

          {comparisonRows.map((row) => (
            <div className="comparison-grid-row" role="row" key={row.aspect}>
              <p className="comparison-grid-col comparison-grid-col-aspect" data-label="Aspect">
                {row.aspect}
              </p>

              <p className="comparison-grid-col comparison-grid-col-fulltime" data-label="Full-Time Staff (onsite)">
                <X className="comparison-grid-icon comparison-grid-icon-x" size={15} strokeWidth={2.2} />
                <span>{row.fullTime}</span>
              </p>

              <p className="comparison-grid-col comparison-grid-col-nexus" data-label="A&amp;T Nexus (remote)">
                <Check
                  className="comparison-grid-icon comparison-grid-icon-check"
                  size={16}
                  strokeWidth={2.4}
                />
                <span>{row.atNexus}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}