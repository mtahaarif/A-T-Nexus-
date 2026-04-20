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

const DEFAULT_BACKEND_COVERAGE_ITEMS: BackendCoverageItem[] = [
  {
    id: "01",
    title: "VA Billing & Authorization",
    subtitle: "VA Billing & Authorization Management Services",
    desc: "Ensure accurate VA reimbursement workflows through authorization control, claim tracking, and eligibility assurance.",
    bullets: [
      "VA Billing (Veteran Affairs)",
      "VA Authorization Entry & Management",
      "Claims Submission & Follow-Ups",
      "Eligibility Verification",
    ],
    software: "WellSky, Availity, Waystar",
  },
  {
    id: "02",
    title: "Revenue Cycle Management (RCM)",
    subtitle: "Revenue Cycle Management Services for Home Health Cash Flow",
    desc: "Stabilize cash flow with insurance validation, clean claims processing, and denial recovery workflows.",
    bullets: [
      "Insurance Verification (Medicaid, Medicare, Private Pay)",
      "Claims Processing & Tracking",
      "Denials & Appeals Management",
      "Payment Posting",
    ],
    software: "Kareo, AdvancedMD, Waystar",
  },
  {
    id: "03",
    title: "Care Coordination & Patient Management",
    subtitle: "Care Coordination & Patient Lifecycle Management",
    desc: "Strengthen continuity of care through organized intake, care planning support, and communication workflows.",
    bullets: [
      "Patient Intake & Admissions",
      "Care Plan Coordination",
      "Family Communication",
      "Visit Documentation Support",
    ],
    software: "WellSky, AlayaCare, AxisCare",
  },
  {
    id: "04",
    title: "Scheduling & Staffing Operations",
    subtitle: "Scheduling & Staffing Operations Optimization",
    desc: "Improve workforce utilization with intelligent scheduling, shift balancing, and attendance visibility.",
    bullets: [
      "Caregiver Scheduling & Shift Management",
      "Open Shift Coverage",
      "Staff Allocation Optimization",
      "Attendance Tracking",
    ],
    software: "AxisCare, ClearCare, WellSky",
  },
  {
    id: "05",
    title: "HR & Caregiver Recruitment",
    subtitle: "Healthcare Staffing & Caregiver Recruitment Services",
    desc: "Build stronger care teams with targeted sourcing, candidate qualification, and credential-ready hiring workflows.",
    bullets: [
      "Caregiver Sourcing (CNAs, HHAs, RNs, LPNs)",
      "Screening & Shortlisting",
      "Interview Coordination",
      "Credential Verification",
    ],
    software: "Apploi, Indeed, LinkedIn",
  },
  {
    id: "06",
    title: "Onboarding, Orientation & Training",
    subtitle: "Onboarding, Orientation & Compliance Training Operations",
    desc: "Launch new hires faster with standardized onboarding, policy training, and documentation governance.",
    bullets: [
      "New Hire Onboarding",
      "Orientation Programs",
      "Compliance Training",
      "Documentation Handling",
    ],
    software: "Apploi, Trainual, Google Workspace",
  },
  {
    id: "07",
    title: "Compliance & Documentation Support",
    subtitle: "Compliance Documentation & Audit Readiness Support",
    desc: "Maintain clean records, policy governance, and audit-prepared documentation for agency-level compliance.",
    bullets: [
      "Client & Caregiver Files",
      "Audit Preparation",
      "Policy & Procedure Documentation",
      "State Compliance Support",
    ],
    software: "Google Drive, WellSky, Dropbox",
  },
  {
    id: "08",
    title: "Lead Generation & Client Acquisition",
    subtitle: "Healthcare Lead Generation & Client Acquisition Services",
    desc: "Scale referral and acquisition pipelines using targeted outreach, list intelligence, and CRM-driven lifecycle management.",
    bullets: [
      "B2B Lead Generation (Hospitals, Physicians, Facilities)",
      "Prospect List Building",
      "Email Outreach Campaigns",
      "CRM Pipeline Management",
    ],
    software: "Apollo, HubSpot, Zoho CRM",
  },
  {
    id: "09",
    title: "Outbound Calling & Appointment Setting",
    subtitle: "Outbound Calling & Appointment Setting for Care Intake",
    desc: "Increase conversion velocity through structured calling workflows, lead qualification, and appointment optimization.",
    bullets: [
      "Cold Calling & Follow-Ups",
      "Lead Qualification",
      "Appointment Booking",
      "Script Optimization",
    ],
    software: "Aircall, Dialpad, Google Voice",
  },
  {
    id: "10",
    title: "Operations Management",
    subtitle: "End-to-End Operations Management & Performance Reporting",
    desc: "Coordinate daily execution with cross-functional collaboration, admin support, and KPI-based reporting.",
    bullets: [
      "Daily Operations Handling",
      "Internal Coordination",
      "Reporting & Performance Tracking",
      "Admin Support",
    ],
    software: "Slack, ClickUp, Trello",
  },
];

type CoverageCardProps = {
  item: BackendCoverageItem;
  index: number;
  total: number;
};

type BackendCoverageCardsProps = {
  items?: BackendCoverageItem[];
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
  items = DEFAULT_BACKEND_COVERAGE_ITEMS,
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
