"use client";

import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useRevealOnScroll } from "@/components/useRevealOnScroll";

const operationsBlocks = [
  {
    title: "1) Caregiver Recruitment & Applicant Management",
    points: [
      "Sourcing and screening caregiver candidates.",
      "Interview coordination and pipeline follow-up.",
      "Applicant tracking updates and handoff management.",
    ],
    tools: "Tools: Apploi, hiring trackers, communication workflows",
  },
  {
    title: "2) Credentialing & Compliance File Management",
    points: [
      "Organize caregiver credentials, licenses, and certifications.",
      "Track expirations and compliance deadlines.",
      "Maintain audit-ready records for agency oversight.",
    ],
    tools: "Tools: WellSky, credential trackers, compliance logs",
  },
  {
    title: "3) Scheduling & Shift Coordination",
    points: [
      "Support weekly and daily caregiver scheduling.",
      "Handle schedule changes, call-outs, and coverage requests.",
      "Coordinate with field teams for continuity of care.",
    ],
    tools: "Tools: WellSky, scheduling systems, shift coordination boards",
  },
  {
    title: "4) Patient Intake, Authorizations & Service Start Support",
    points: [
      "Assist intake teams with case setup and documentation checks.",
      "Track authorization status and ensure timely follow-ups.",
      "Coordinate service start prerequisites across stakeholders.",
    ],
    tools: "Tools: Intake workflows, authorization trackers, case logs",
  },
  {
    title: "5) EVV, Visit Validation & Documentation QA",
    points: [
      "Review EVV records and visit exceptions.",
      "Flag missing documentation and coordinate corrections.",
      "Maintain quality checks to reduce billing delays.",
    ],
    tools: "Tools: EVV systems, QA checklists, exception tracking",
  },
  {
    title: "6) Billing Operations, Claims Follow-Up & Collections Support",
    points: [
      "Prepare billing inputs and validate claim readiness.",
      "Track denials, resubmissions, and follow-up activities.",
      "Support payment posting and collections coordination.",
    ],
    tools: "Tools: Billing platforms, payer trackers, revenue workflows",
  },
  {
    title: "7) Payroll Preparation & Viventium Support",
    points: [
      "Process timesheet validation and payroll input readiness.",
      "Support payroll cycles and issue escalation.",
      "Coordinate reconciliations between operations and payroll teams.",
    ],
    tools: "Tools: Viventium, payroll reports, reconciliation sheets",
  },
  {
    title: "8) Care Coordination & Patient/Family Communication Support",
    points: [
      "Manage follow-ups for caregiver-client continuity.",
      "Coordinate non-clinical communication touchpoints.",
      "Maintain timely updates across operations channels.",
    ],
    tools: "Tools: CRM, call logs, communication trackers",
  },
  {
    title: "9) Process Documentation, SOP Management & QA",
    points: [
      "Create and maintain SOPs for recurring operations.",
      "Standardize handoffs and reduce process variability.",
      "Run quality audits and correction loops across teams.",
    ],
    tools: "Tools: SOP repositories, QA templates, process scorecards",
  },
  {
    title: "10) KPI Reporting & Continuous Operations Improvement",
    points: [
      "Track operational KPIs for staffing, compliance, and billing.",
      "Deliver structured reports with actionable recommendations.",
      "Identify trends and optimize workflows month over month.",
    ],
    tools: "Tools: Dashboards, weekly review decks, performance analytics",
  },
];

const comparisonRows = [
  {
    category: "Cost Structure",
    fullTime: "High fixed costs with benefits, taxes, and overhead.",
    dedicated: "Lean and scalable pricing model with clear monthly control.",
  },
  {
    category: "Ramp-Up Time",
    fullTime: "Long hiring and onboarding cycles before productivity.",
    dedicated: "Fast deployment with operations-ready professionals.",
  },
  {
    category: "Coverage Reliability",
    fullTime: "Single-resource gaps can create delays and disruptions.",
    dedicated: "Managed continuity with structured backup support.",
  },
  {
    category: "Process Ownership",
    fullTime: "Often dependent on individual habits and tribal knowledge.",
    dedicated: "SOP-driven execution with documented workflows.",
  },
  {
    category: "Performance Visibility",
    fullTime: "Limited reporting and inconsistent KPI tracking.",
    dedicated: "Regular KPI-based reporting and optimization reviews.",
  },
  {
    category: "Scalability",
    fullTime: "Scaling requires repeated hiring cycles.",
    dedicated: "Flexible scale-up with evolving operational needs.",
  },
];

export default function DedicatedRemoteOpsPage() {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-pad ops-hero">
          <div className="container reveal reveal-up">
            <p className="ops-tag">Dedicated Home Care &amp; Home Health Operations</p>
            <h1>Built For Agencies That Need Precision, Speed, And Scale</h1>
            <p>
              We support your agency&apos;s critical backend functions with
              dedicated operations professionals who understand home care and
              home health workflows end-to-end.
            </p>
            <Link href="/services#contact" className="btn btn-primary">
              Book A Strategy Session
            </Link>
          </div>
        </section>

        <section className="section-pad-sm ops-shell">
          <div className="container reveal reveal-up">
            <div className="section-head">
              <h2>Operational Coverage We Deliver</h2>
              <p>
                Dedicated support across recruitment, compliance, scheduling,
                billing, payroll, coordination, and performance reporting.
              </p>
            </div>

            <div className="ops-grid">
              {operationsBlocks.map((block) => (
                <article className="ops-card" key={block.title}>
                  <h3>{block.title}</h3>
                  <ul>
                    {block.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="ops-tools">{block.tools}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad-sm ops-compare">
          <div className="container reveal reveal-up">
            <div className="section-head">
              <h2>Why Choose Us Over Full-Time Employees</h2>
              <p>
                We provide operational consistency with stronger process control,
                better visibility, and significantly lower administrative burden.
              </p>
            </div>

            <div className="ops-table" role="table" aria-label="Dedicated ops comparison">
              <div className="ops-table-head" role="row">
                <p role="columnheader">Category</p>
                <p role="columnheader">Traditional Full-Time Employee</p>
                <p role="columnheader">A&amp;T Nexus Dedicated Ops</p>
              </div>

              {comparisonRows.map((row) => (
                <div className="ops-table-row" role="row" key={row.category}>
                  <p>{row.category}</p>
                  <p>{row.fullTime}</p>
                  <p>{row.dedicated}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad ops-close">
          <div className="container reveal reveal-up">
            <h2>Operational Excellence Without Internal Overhead</h2>
            <p>
              A&amp;T Nexus helps home care and home health agencies run lean,
              compliant, and scalable operations while your internal teams focus
              on patient outcomes and growth.
            </p>
            <Link href="/services#contact" className="btn btn-primary">
              Start With Dedicated Ops
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
