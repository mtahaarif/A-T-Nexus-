"use client";

import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useRevealOnScroll } from "@/components/useRevealOnScroll";

const comparisonRows = [
  {
    metric: "Hourly Loaded Cost",
    inHouse: "$28 - $35",
    dedicated: "Starts at $17",
  },
  {
    metric: "Health/Benefit Burden",
    inHouse: "$5,000+ /yr",
    dedicated: "$0 (Included)",
  },
  {
    metric: "Office/Tech Overhead",
    inHouse: "$3,000+ /yr",
    dedicated: "$0 (Included)",
  },
  {
    metric: "Onboarding Time",
    inHouse: "4-6 Weeks",
    dedicated: "Instant Execution",
  },
  {
    metric: "Annual Impact",
    inHouse: "$65k - $75k",
    dedicated: "Over 50% Savings",
  },
];

const handledTasks = [
  "Lead Gen & Qualification (Patient Pipeline)",
  "HR & Caregiver Onboarding Support",
  "Billing & Payroll Management (Viventium)",
  "CRM Management & Data Reporting",
  "Paperless Database Management",
  "Care Coordination & Follow-ups",
  "Workflow Optimization (JotForms/Ops)",
  "24/7 Issue Resolution & Support",
];

const performancePillars = [
  {
    title: "40-Hour Commitment",
    text: "One dedicated staff member works 40 hours weekly exclusively for your agency and operates as an extension of your team.",
  },
  {
    title: "KPI-Driven Reporting",
    text: "Weekly reporting on recruitment volume, lead conversion, and compliance accuracy with transparent performance tracking.",
  },
  {
    title: "Software Expertise",
    text: "Pre-certified in Wellsky, Apploi, Verveware, and Viventium from day one so there is no training curve.",
  },
];

export default function DedicatedRemoteOpsPage() {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-pad dedicated-hero">
          <div className="container reveal reveal-up">
            <p className="dedicated-tag">Starting from $17/Hour</p>
            <h1>Your Dedicated Remote Operations Powerhouse</h1>
            <p>
              Replace $60k/year in-house desk roles with a dedicated,
              pre-trained remote staff focused exclusively on your agency&apos;s
              backend growth.
            </p>
            <Link href="/services#contact" className="btn btn-primary">
              Book Your Free Strategy Audit
            </Link>
          </div>
        </section>

        <section className="section-pad-sm dedicated-math">
          <div className="container reveal reveal-up">
            <div className="section-head">
              <h2>The Smart Agency Math</h2>
              <p>
                Free your office staff for the field while A&T Nexus handles
                your critical screen work.
              </p>
            </div>

            <div className="math-table" role="table" aria-label="Agency staffing comparison">
              <div className="math-header" role="row">
                <p role="columnheader">Metric</p>
                <p role="columnheader">In-House Office Admin</p>
                <p role="columnheader">A&T Dedicated Staff</p>
              </div>
              {comparisonRows.map((row) => (
                <div className="math-row" role="row" key={row.metric}>
                  <p>{row.metric}</p>
                  <p>{row.inHouse}</p>
                  <p>{row.dedicated}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad dedicated-handled">
          <div className="container reveal reveal-up">
            <div className="section-head">
              <h2>What We Handle While You&apos;re In The Field</h2>
            </div>

            <div className="handled-grid">
              {handledTasks.map((task) => (
                <article key={task} className="handled-item">
                  <span aria-hidden="true">✓</span>
                  <p>{task}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad-sm dedicated-pillars">
          <div className="container reveal reveal-up">
            <div className="section-head">
              <h2>One Dedicated Professional. 100% Focused On You.</h2>
            </div>

            <div className="pillar-grid">
              {performancePillars.map((pillar) => (
                <article key={pillar.title} className="pillar-card">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad dedicated-cta">
          <div className="container reveal reveal-up">
            <h2>Stop Paying For Overhead. Start Paying For Performance.</h2>
            <p>
              Shift your backend workload to A&T Nexus and let your field staff
              focus on patient care.
            </p>
            <p className="dedicated-note">
              Flexible Part-Time &amp; Full-Time Options Available
            </p>
            <Link href="/services#contact" className="btn btn-primary">
              Scale Your Agency Today
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
