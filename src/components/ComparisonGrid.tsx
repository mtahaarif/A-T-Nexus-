"use client";

import { Plus_Jakarta_Sans } from "next/font/google";

type ComparisonRow = {
  label: string;
  inHouse: string;
  dedicated: string;
  dedicatedAccent?: boolean;
  isSummary?: boolean;
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

const comparisonRows: ComparisonRow[] = [
  {
    label: "Hourly Loaded Cost",
    inHouse: "$28 - $35",
    dedicated: "Starts at $17",
    dedicatedAccent: true,
  },
  {
    label: "Health/Benefit Burden",
    inHouse: "$5,000+ /yr",
    dedicated: "$0 (Included)",
  },
  {
    label: "Office/Tech Overhead",
    inHouse: "$3,000+ /yr",
    dedicated: "$0 (Included)",
  },
  {
    label: "Onboarding Time",
    inHouse: "4-6 Weeks",
    dedicated: "Instant Execution",
    dedicatedAccent: true,
  },
  {
    label: "Weekend On-Calls",
    inHouse: "Extra hourly pay and benefits",
    dedicated: "24/7 on-call service at a much more affordable rate",
  },
  {
    label: "Annual Impact",
    inHouse: "$65k - $75k",
    dedicated: "Over 50%",
    dedicatedAccent: true,
    isSummary: true,
  },
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

        <div className="comparison-grid-shell font-jakarta">
          <article className="comparison-grid-card comparison-grid-card-inhouse">
            <h3 className="comparison-grid-card-title">In-House Office Admin</h3>

            <div className="comparison-grid-card-body">
              {comparisonRows.map((row) => (
                <div className={`comparison-grid-line${row.isSummary ? " is-summary" : ""}`} key={row.label}>
                  <p className="comparison-grid-line-label">{row.label}</p>
                  <p className="comparison-grid-line-value">{row.inHouse}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="comparison-grid-card comparison-grid-card-dedicated">
            <h3 className="comparison-grid-card-title">A&amp;T Nexus Dedicated Staff</h3>

            <div className="comparison-grid-card-body">
              {comparisonRows.map((row) => (
                <div className={`comparison-grid-line${row.isSummary ? " is-summary" : ""}`} key={row.label}>
                  <p className="comparison-grid-line-label">{row.label}</p>
                  <p
                    className={`comparison-grid-line-value${row.dedicatedAccent ? " is-accent" : ""}`}
                  >
                    {row.dedicated}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}