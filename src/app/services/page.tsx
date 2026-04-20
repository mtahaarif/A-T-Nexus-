"use client";

import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useRevealOnScroll } from "@/components/useRevealOnScroll";

type ServiceIconType =
  | "ai"
  | "web"
  | "fullstack"
  | "uiux"
  | "analytics"
  | "crm"
  | "ops"
  | "growth";

function ServiceCategoryIcon({ type }: { type: ServiceIconType }) {
  switch (type) {
    case "ai":
      return (
        <img
          src="/theme/AI.png"
          alt="AI"
          style={{ width: 48, height: 48, objectFit: "contain" }}
        />
      );
    case "web":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <rect x="8" y="12" width="40" height="28" rx="4" />
          <path d="M8 22h40" />
          <rect x="22" y="44" width="12" height="8" rx="2" />
          <rect x="42" y="28" width="14" height="24" rx="3" />
          <path d="M46 32h6" />
        </svg>
      );
    case "fullstack":
      return (
        <img
          src="/theme/fullstack.png"
          alt="Full Stack"
          style={{ width: 48, height: 48, objectFit: "contain" }}
        />
      );
    case "uiux":
      return (
        <img
          src="/theme/UIUX.png"
          alt="UI/UX"
          style={{ width: 48, height: 48, objectFit: "contain" }}
        />
      );
    case "analytics":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M10 52h44" />
          <rect x="14" y="34" width="8" height="14" rx="2" />
          <rect x="28" y="26" width="8" height="22" rx="2" />
          <rect x="42" y="18" width="8" height="30" rx="2" />
          <path d="m14 24 10-8 10 4 12-10" />
        </svg>
      );
    case "crm":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <circle cx="22" cy="22" r="6" />
          <circle cx="42" cy="20" r="5" />
          <path d="M12 44c0-6 5-10 10-10s10 4 10 10" />
          <path d="M34 44c0-5 4-8 8-8s8 3 8 8" />
          <path d="M30 28h8" />
          <path d="M34 24v8" />
        </svg>
      );
    case "ops":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <circle cx="22" cy="24" r="6" />
          <circle cx="42" cy="40" r="6" />
          <path d="M27 27 37 37" />
          <path d="M14 48h18" />
          <path d="M12 16h16" />
          <rect x="44" y="12" width="10" height="10" rx="2" />
        </svg>
      );
    case "growth":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M12 50h40" />
          <path d="M16 42 28 30l8 6 14-16" />
          <path d="M44 20h10v10" />
          <circle cx="18" cy="42" r="2" />
          <circle cx="28" cy="30" r="2" />
          <circle cx="36" cy="36" r="2" />
          <circle cx="50" cy="20" r="2" />
        </svg>
      );
    default:
      return null;
  }
}

const itServiceBlocks = [
  {
    id: "1",
    icon: "ai" as const,
    title: "AI Solutions & Automation",
    points: [
      "AI Chatbots & Virtual Assistants",
      "Workflow Automation (no-code & custom)",
      "AI-Powered Lead Generation Systems",
      "Document Processing & Smart Data Extraction",
    ],
    stack: "Tools/Tech: Python, OpenAI APIs, Zapier, Make (Integromat)",
  },
  {
    id: "2",
    icon: "web" as const,
    title: "Web & App Development",
    points: [
      "Custom Website Development",
      "Landing Pages (High-Converting)",
      "Web Applications (SaaS Platforms)",
      "Mobile App Development (iOS & Android)",
    ],
    stack: "Tech Stack: React, Next.js, Node.js, Firebase",
  },
  {
    id: "3",
    icon: "fullstack" as const,
    title: "Full Stack Development",
    points: [
      "End-to-End Application Development",
      "API Development & Integration",
      "Backend Architecture & Database Design",
      "Cloud Deployment & Maintenance",
    ],
    stack: "Tech Stack: MERN Stack, PostgreSQL, AWS, Vercel",
  },
  {
    id: "4",
    icon: "uiux" as const,
    title: "UI/UX Design & Product Engineering",
    points: [
      "User Interface (UI) Design",
      "User Experience (UX) Optimization",
      "Product Prototyping (Figma)",
      "Design Systems & Branding",
    ],
    stack: "Tools: Figma, Adobe XD",
  },
  {
    id: "5",
    icon: "analytics" as const,
    title: "Data Analytics & Reporting",
    points: [
      "Business Intelligence Dashboards",
      "Data Visualization & Reporting",
      "KPI Tracking Systems",
      "Predictive Analytics (AI-based insights)",
    ],
    stack: "Tools: Power BI, Tableau, Google Data Studio",
  },
  {
    id: "6",
    icon: "crm" as const,
    title: "CRM & Business Systems Setup",
    points: [
      "CRM Setup & Customization",
      "Sales Pipeline Automation",
      "Client Management Systems",
      "Integration with Marketing Tools",
    ],
    stack: "Platforms: HubSpot, Salesforce, Zoho CRM",
  },
  {
    id: "7",
    icon: "ops" as const,
    title: "Operations Software & Integrations",
    points: [
      "Scheduling System Setup",
      "Hiring Platforms Setup (Apploi)",
      "Payroll & HR Software Integration",
      "EHR/EMR System Support (for healthcare clients)",
    ],
    stack: "Platforms: Apploi, WellSky, Viventium",
  },
  {
    id: "8",
    icon: "growth" as const,
    title: "Website Optimization & Growth",
    points: [
      "SEO Optimization",
      "Speed & Performance Optimization",
      "Conversion Rate Optimization (CRO)",
      "Analytics & Tracking Setup",
    ],
    stack: "Tools: Google Analytics, Search Console, Hotjar",
  },
];

export default function ServicesPage() {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-pad services-catalog-shell">
          <div className="container services-catalog-head services-catalog-head--centered reveal reveal-up">
            <div className="services-catalog-copy">
              <h1>IT Services</h1>
              <p className="services-catalog-intro">
                Growth-focused IT services built for SMEs, healthcare businesses,
                and modern teams that need automation, scalable systems, and
                measurable digital performance.
              </p>
            </div>
          </div>

          <div className="container services-catalog-grid reveal reveal-up">
            {itServiceBlocks.map((block) => (
              <article key={block.id} className="services-catalog-card services-hover-card" tabIndex={0}>
                <div className="services-hover-inner">
                  <div className="services-card-top services-hover-front">
                    <span className="services-card-icon" aria-hidden="true">
                      <ServiceCategoryIcon type={block.icon} />
                    </span>

                    <h2>{block.title}</h2>
                  </div>

                  <div className="services-hover-back">
                    <ul>
                      {block.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <p className="services-card-stack">{block.stack}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
