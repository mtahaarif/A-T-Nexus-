"use client";

import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useRevealOnScroll } from "@/components/useRevealOnScroll";

const operationsBlocks = [
  {
    id: "01",
    title: "VA Billing & Authorization",
    seoHeading: "VA Billing & Authorization Management Services",
    description:
      "Ensure accurate VA reimbursement workflows through authorization control, claim tracking, and eligibility assurance.",
    points: [
      "VA Billing (Veteran Affairs)",
      "VA Authorization Entry & Management",
      "Claims Submission & Follow-Ups",
      "Eligibility Verification",
    ],
    software: "Software: WellSky, Availity, Waystar",
  },
  {
    id: "02",
    title: "Revenue Cycle Management (RCM)",
    seoHeading: "Revenue Cycle Management Services for Home Health Cash Flow",
    description:
      "Stabilize cash flow with insurance validation, clean claims processing, and denial recovery workflows.",
    points: [
      "Insurance Verification (Medicaid, Medicare, Private Pay)",
      "Claims Processing & Tracking",
      "Denials & Appeals Management",
      "Payment Posting",
    ],
    software: "Software: Kareo, AdvancedMD, Waystar",
  },
  {
    id: "03",
    title: "Care Coordination & Patient Management",
    seoHeading: "Care Coordination & Patient Lifecycle Management",
    description:
      "Strengthen continuity of care through organized intake, care planning support, and communication workflows.",
    points: [
      "Patient Intake & Admissions",
      "Care Plan Coordination",
      "Family Communication",
      "Visit Documentation Support",
    ],
    software: "Software: WellSky, AlayaCare, AxisCare",
  },
  {
    id: "04",
    title: "Scheduling & Staffing Operations",
    seoHeading: "Scheduling & Staffing Operations Optimization",
    description:
      "Improve workforce utilization with intelligent scheduling, shift balancing, and attendance visibility.",
    points: [
      "Caregiver Scheduling & Shift Management",
      "Open Shift Coverage",
      "Staff Allocation Optimization",
      "Attendance Tracking",
    ],
    software: "Software: AxisCare, ClearCare, WellSky",
  },
  {
    id: "05",
    title: "HR & Caregiver Recruitment",
    seoHeading: "Healthcare Staffing & Caregiver Recruitment Services",
    description:
      "Build stronger care teams with targeted sourcing, candidate qualification, and credential-ready hiring workflows.",
    points: [
      "Caregiver Sourcing (CNAs, HHAs, RNs, LPNs)",
      "Screening & Shortlisting",
      "Interview Coordination",
      "Credential Verification",
    ],
    software: "Software: Apploi, Indeed, LinkedIn",
  },
  {
    id: "06",
    title: "Onboarding, Orientation & Training",
    seoHeading: "Onboarding, Orientation & Compliance Training Operations",
    description:
      "Launch new hires faster with standardized onboarding, policy training, and documentation governance.",
    points: [
      "New Hire Onboarding",
      "Orientation Programs",
      "Compliance Training",
      "Documentation Handling",
    ],
    software: "Software: Apploi, Trainual, Google Workspace",
  },
  {
    id: "07",
    title: "Compliance & Documentation Support",
    seoHeading: "Compliance Documentation & Audit Readiness Support",
    description:
      "Maintain clean records, policy governance, and audit-prepared documentation for agency-level compliance.",
    points: [
      "Client & Caregiver Files",
      "Audit Preparation",
      "Policy & Procedure Documentation",
      "State Compliance Support",
    ],
    software: "Software: Google Drive, WellSky, Dropbox",
  },
  {
    id: "08",
    title: "Lead Generation & Client Acquisition",
    seoHeading: "Healthcare Lead Generation & Client Acquisition Services",
    description:
      "Scale referral and acquisition pipelines using targeted outreach, list intelligence, and CRM-driven lifecycle management.",
    points: [
      "B2B Lead Generation (Hospitals, Physicians, Facilities)",
      "Prospect List Building",
      "Email Outreach Campaigns",
      "CRM Pipeline Management",
    ],
    software: "Software: Apollo, HubSpot, Zoho CRM",
  },
  {
    id: "09",
    title: "Outbound Calling & Appointment Setting",
    seoHeading: "Outbound Calling & Appointment Setting for Care Intake",
    description:
      "Increase conversion velocity through structured calling workflows, lead qualification, and appointment optimization.",
    points: [
      "Cold Calling & Follow-Ups",
      "Lead Qualification",
      "Appointment Booking",
      "Script Optimization",
    ],
    software: "Tools: Aircall, Dialpad, Google Voice",
  },
  {
    id: "10",
    title: "Operations Management",
    seoHeading: "End-to-End Operations Management & Performance Reporting",
    description:
      "Coordinate daily execution with cross-functional collaboration, admin support, and KPI-based reporting.",
    points: [
      "Daily Operations Handling",
      "Internal Coordination",
      "Reporting & Performance Tracking",
      "Admin Support",
    ],
    software: "Tools: Slack, ClickUp, Trello",
  },
];

const fullTimeStaffChallenges = [
  "High salary costs (salary + benefits + taxes)",
  "Time-consuming hiring & training",
  "Limited skillset per employee",
  "Risk of turnover & absenteeism",
  "Requires office space & infrastructure",
  "Slower scalability",
];

const atNexusAdvantages = [
  "One team replaces multiple hires (billing + HR + admin + calling)",
  "No hiring, training, or management burden",
  "Pay only for work delivered (cost-efficient)",
  "Trained professionals already experienced in home care systems",
  "Scalable instantly (add or reduce workload anytime)",
  "Fully remote, ready-to-go operations team",
  "Familiar with industry tools (WellSky, Apploi, AxisCare, etc.)",
];

const comparisonRows = [
  {
    category: "Cost",
    fullTime: "High fixed cost",
    dedicated: "Flexible & scalable",
  },
  {
    category: "Hiring time",
    fullTime: "Weeks/months",
    dedicated: "Immediate start",
  },
  {
    category: "Skill coverage",
    fullTime: "Limited",
    dedicated: "Multi-skill team",
  },
  {
    category: "Training burden",
    fullTime: "On you",
    dedicated: "Already trained",
  },
  {
    category: "Scalability",
    fullTime: "Slow",
    dedicated: "Instant",
  },
  {
    category: "Risk",
    fullTime: "High turnover",
    dedicated: "Stable operations",
  },
];

export default function DedicatedRemoteOpsPage() {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-pad ops-redesign-hero">
          <div className="container reveal reveal-up">
            <p className="ops-redesign-kicker">Dedicated Home Care &amp; Home Health Operations</p>
            <h1>Dedicated Home Care &amp; Home Health Operations</h1>
            <p className="ops-redesign-subtitle">
              &quot;From billing and staffing to lead generation and client
              acquisition - we handle your entire backend operations.&quot;
            </p>
            <Link href="/services#contact" className="btn btn-primary">
              Build Your Dedicated Ops Team
            </Link>
          </div>
        </section>

        <section className="section-pad-sm ops-redesign-services">
          <div className="container reveal reveal-up">
            <div className="section-head">
              <h2>Backend Operations Coverage</h2>
              <p>
                Specialized operational support for home care and home health
                agencies across billing, staffing, compliance, and growth.
              </p>
            </div>

            <div className="ops-redesign-grid">
              {operationsBlocks.map((block) => (
                <article className="ops-redesign-card" key={block.id}>
                  <p className="ops-redesign-index">{block.id}</p>
                  <h3>{block.title}</h3>
                  <h4>{block.seoHeading}</h4>
                  <p className="ops-redesign-description">{block.description}</p>
                  <ul>
                    {block.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="ops-redesign-software">{block.software}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad-sm ops-redesign-why">
          <div className="container reveal reveal-up">
            <div className="section-head">
              <h2>Why Choose Us Over Full-Time Employees</h2>
            </div>

            <div className="ops-redesign-why-grid">
              <article className="ops-why-card ops-why-card-muted">
                <h3>Hiring Full-Time Staff</h3>
                <ul>
                  {fullTimeStaffChallenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="ops-why-card ops-why-card-accent">
                <h3>Hiring A&amp;T Nexus (Us)</h3>
                <ul>
                  {atNexusAdvantages.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad-sm ops-redesign-table-shell">
          <div className="container reveal reveal-up">
            <div className="section-head">
              <h2>Simple Comparison</h2>
            </div>

            <div className="ops-redesign-table" role="table" aria-label="Simple dedicated ops comparison">
              <div className="ops-redesign-table-head" role="row">
                <p role="columnheader">Aspect</p>
                <p role="columnheader">Full-Time Staff</p>
                <p role="columnheader">A&amp;T Nexus</p>
              </div>

              {comparisonRows.map((row) => (
                <div className="ops-redesign-table-row" role="row" key={row.category}>
                  <p>{row.category}</p>
                  <p>{row.fullTime}</p>
                  <p>{row.dedicated}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad ops-redesign-close">
          <div className="container reveal reveal-up">
            <h2>Closing Statement</h2>
            <blockquote className="ops-fancy-quote">
              <span>
                Instead of hiring multiple full-time employees, you get an
                entire operations team that already understands home care
                systems, billing workflows, recruitment, and client acquisition
                - all under one roof.
              </span>
            </blockquote>
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
