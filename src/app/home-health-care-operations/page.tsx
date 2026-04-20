"use client";

import { Check, X } from "lucide-react";
import Link from "next/link";
import BackendCoverageCards, { type BackendCoverageItem } from "@/components/BackendCoverageCards";
import CallToAction from "@/components/CallToAction";
import ComparisonGrid from "@/components/ComparisonGrid";
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
    software: "Software: Optum Community Care Network (CCN)",
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
    software: "Software: Kinnser(Wellsky), Waystar, Optum, Quickbooks",
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
    software: "Software: Wellsky, Verveware",
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
    software: "Software: ClearCare(Wellsky), Verveware",
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
    software: "Software: Apploi, Indeed, Linkedin, Ziprecruiter, Custom built Hr system trackers",
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
    software: "Software: Apploi, Zoom, Caregiverlist, MS365 office stack",
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
    software: "Software: Googledrive, Sharepoint, Onedrive, Wellsky",
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
    software: "Software: Apollo, Gmaps, Hubspot, Zoho, Go high level",
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
    software: "Software: RingCentral, Openphone, Googlevoice",
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
    software: "Software: Ms Teams, Slack",
  },
];

const backendCoverageItems: BackendCoverageItem[] = operationsBlocks.map((block) => ({
  id: block.id,
  title: block.title,
  subtitle: block.seoHeading,
  desc: block.description,
  bullets: block.points,
  software: block.software.replace(/^Software:\s*/i, "").replace(/^Tools:\s*/i, ""),
}));

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

export default function HomeHealthCareOperationsPage() {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-pad ops-redesign-hero">
          <div className="container reveal reveal-up">
            <div className="ops-hero-copy">
              <h1>Home Health Care Operations</h1>
              <p className="ops-redesign-subtitle">
                "From billing and staffing to lead generation and client acquisition - we
                handle your entire backend operations."
              </p>
              <Link href="/services#contact" className="btn btn-primary">
                Build Your Dedicated Ops Team
              </Link>
            </div>

            <div className="ops-hero-illustration" aria-hidden="true">
              <img
                src="/theme/home_care_operations.png"
                alt=""
                className="ops-hero-illustration-img"
              />
            </div>
          </div>
        </section>

        <BackendCoverageCards
          className="ops-redesign-services"
          items={backendCoverageItems}
          title="Backend Operations Coverage"
          description="Specialized operational support for home care and home health agencies across billing, staffing, compliance, and growth."
        />

        <section className="section-pad-sm ops-redesign-why">
          <div className="container reveal reveal-up">
            <div className="section-head">
              <h2 className="font-outfit">Why Choose Us Over Full-Time Employees</h2>
            </div>

            <div className="ops-why-depth-grid">
              <article className="ops-why-depth-card ops-why-depth-card-fulltime">
                <h3 className="font-outfit">Hiring Full-Time Staff</h3>
                <ul>
                  {fullTimeStaffChallenges.map((item) => (
                    <li key={item}>
                      <X size={16} strokeWidth={2.2} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="ops-why-depth-card ops-why-depth-card-nexus">
                <h3 className="font-outfit">Hiring A&amp;T Nexus (Us)</h3>
                <ul>
                  {atNexusAdvantages.map((item) => (
                    <li key={item}>
                      <Check size={16} strokeWidth={2.4} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <ComparisonGrid className="reveal reveal-up" />

        <CallToAction className="reveal reveal-up" />
      </main>
      <SiteFooter />
    </>
  );
}
