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
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M18 30a14 14 0 1 1 28 0v2a6 6 0 0 0 2 4l2 2v4H14v-4l2-2a6 6 0 0 0 2-4v-2Z" />
          <path d="M24 49h16" />
          <path d="M27 55h10" />
          <circle cx="27" cy="30" r="2" />
          <circle cx="37" cy="30" r="2" />
          <path d="M29 36c1.2 1.5 4.8 1.5 6 0" />
        </svg>
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
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <rect x="10" y="10" width="44" height="12" rx="3" />
          <rect x="10" y="26" width="44" height="12" rx="3" />
          <rect x="10" y="42" width="44" height="12" rx="3" />
          <path d="M18 16h4" />
          <path d="M18 32h4" />
          <path d="M18 48h4" />
          <path d="M30 16h16" />
          <path d="M30 32h16" />
          <path d="M30 48h16" />
        </svg>
      );
    case "uiux":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <rect x="8" y="10" width="28" height="44" rx="4" />
          <rect x="40" y="10" width="16" height="16" rx="3" />
          <rect x="40" y="30" width="16" height="24" rx="3" />
          <path d="M16 22h12" />
          <path d="M16 30h12" />
          <path d="M16 38h8" />
        </svg>
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
    id: "AI",
    icon: "ai" as const,
    title: "AI Automation & Intelligent Workflow Solutions",
    seoHeading: "AI Automation Services for Operational Efficiency and Lead Conversion",
    description:
      "Transform repetitive business tasks into intelligent, always-on workflows that improve response time, data quality, and conversion outcomes.",
    points: [
      "AI chatbots and virtual assistants for support, intake, and lead response",
      "No-code and custom workflow automation across operations and sales",
      "Smart document processing with OCR-style data extraction and classification",
    ],
    stackLabel: "Platforms & Tools",
    stack: "Python, OpenAI APIs, Zapier, Make (Integromat)",
  },
  {
    id: "WEB",
    icon: "web" as const,
    title: "Custom Web & Mobile App Development",
    seoHeading: "Web and Mobile App Development Services for Scalable Digital Products",
    description:
      "Design and build conversion-focused websites, landing pages, and applications that support user growth and long-term maintainability.",
    points: [
      "Custom websites and high-converting landing pages",
      "SaaS web application development with secure user flows",
      "Cross-platform mobile app development for iOS and Android",
    ],
    stackLabel: "Tech Stack",
    stack: "React, Next.js, Node.js, Firebase",
  },
  {
    id: "STACK",
    icon: "fullstack" as const,
    title: "Full Stack Engineering & Cloud Deployment",
    seoHeading: "Full Stack Development Services with API Integration and Cloud Infrastructure",
    description:
      "Build production-ready applications with resilient backend architecture, API integrations, and cloud deployment designed for scale.",
    points: [
      "End-to-end application engineering from frontend to backend",
      "RESTful API development, integration, and service orchestration",
      "Database modeling, cloud deployment, and release maintenance",
    ],
    stackLabel: "Tech Stack",
    stack: "MERN Stack, PostgreSQL, AWS, Vercel",
  },
  {
    id: "UX",
    icon: "uiux" as const,
    title: "UI/UX Design & Product Experience Engineering",
    seoHeading: "UI UX Design Services for Product Usability and Conversion Optimization",
    description:
      "Create intuitive interfaces and reusable design systems that improve user adoption, reduce friction, and strengthen product consistency.",
    points: [
      "Interface design and UX optimization for customer journeys",
      "Interactive prototyping and validation using Figma workflows",
      "Design systems and digital branding for product consistency",
    ],
    stackLabel: "Tools",
    stack: "Figma, Adobe XD",
  },
  {
    id: "DATA",
    icon: "analytics" as const,
    title: "Data Analytics, BI Dashboards & Predictive Insights",
    seoHeading: "Data Analytics and Business Intelligence Services for KPI Performance Tracking",
    description:
      "Convert raw operational data into actionable business intelligence with executive dashboards, KPI systems, and predictive analytics.",
    points: [
      "Business intelligence dashboards for leadership and operations",
      "Data visualization, reporting automation, and KPI monitoring",
      "Predictive insight models for planning and growth strategy",
    ],
    stackLabel: "Tools",
    stack: "Power BI, Tableau, Google Data Studio",
  },
  {
    id: "CRM",
    icon: "crm" as const,
    title: "CRM Implementation & Sales Automation Systems",
    seoHeading: "CRM Setup and Sales Pipeline Automation Services for Revenue Teams",
    description:
      "Implement CRM ecosystems that improve lead lifecycle visibility, automate pipeline activities, and increase sales team productivity.",
    points: [
      "CRM setup, customization, and role-based pipeline structure",
      "Sales pipeline automation and lifecycle stage governance",
      "Marketing and client management integrations for unified workflows",
    ],
    stackLabel: "Platforms",
    stack: "HubSpot, Salesforce, Zoho CRM",
  },
  {
    id: "OPS",
    icon: "ops" as const,
    title: "Operations Software Integration for Healthcare & SMEs",
    seoHeading: "Operations Software Integration Services for Scheduling, Payroll, and EHR Workflows",
    description:
      "Integrate critical operations platforms to streamline staffing, hiring, payroll, and clinical support workflows in one connected environment.",
    points: [
      "Scheduling system setup and operational workflow mapping",
      "Hiring platform implementation including Apploi-based pipelines",
      "Payroll, HR, and EHR/EMR integration support for healthcare teams",
    ],
    stackLabel: "Platforms",
    stack: "Apploi, WellSky, Viventium",
  },
  {
    id: "SEO",
    icon: "growth" as const,
    title: "Technical SEO, CRO & Website Performance Optimization",
    seoHeading: "SEO Optimization Services for Search Visibility, Speed, and Conversion Growth",
    description:
      "Improve search rankings, site speed, and conversion performance using technical SEO, CRO strategy, and analytics-driven optimization.",
    points: [
      "On-page and technical SEO optimization for discoverability",
      "Core Web Vitals and performance tuning for faster experiences",
      "Conversion rate optimization and analytics tracking implementation",
    ],
    stackLabel: "Tools",
    stack: "Google Analytics, Search Console, Hotjar",
  },
];

export default function ServicesPage() {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-pad services-catalog-shell">
          <div className="container services-catalog-head reveal reveal-up">
            <div className="services-catalog-copy">
              <h1>IT Services - Digital &amp; Automation</h1>
            </div>
            <p className="services-catalog-intro">
              Growth-focused IT services built for SMEs, healthcare businesses,
              and modern teams that need automation, scalable systems, and
              measurable digital performance.
            </p>
          </div>

          <div className="container services-catalog-grid reveal reveal-up">
            {itServiceBlocks.map((block) => (
              <article key={block.id} className="services-catalog-card">
                <div className="services-card-top">
                  <span className="services-card-icon" aria-hidden="true">
                    <ServiceCategoryIcon type={block.icon} />
                  </span>
                  <p className="services-card-index">{block.id}</p>
                </div>

                <h2>{block.title}</h2>
                <h3>{block.seoHeading}</h3>
                <p className="services-card-description">{block.description}</p>
                <ul>
                  {block.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="services-card-stack">
                  <strong>{block.stackLabel}:</strong> {block.stack}
                </p>
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
