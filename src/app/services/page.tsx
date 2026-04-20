"use client";

import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useRevealOnScroll } from "@/components/useRevealOnScroll";

const itServiceBlocks = [
  {
    id: "01",
    title: "AI Solutions & Automation",
    seoHeading: "AI Solutions & Automation Services for Intelligent Operations",
    description:
      "Deploy AI-enabled workflows that reduce manual workload, increase response speed, and improve lead conversion quality.",
    points: [
      "AI Chatbots & Virtual Assistants",
      "Workflow Automation (no-code & custom)",
      "AI-Powered Lead Generation Systems",
      "Document Processing & Smart Data Extraction",
    ],
    stackLabel: "Tools/Tech",
    stack: "Python, OpenAI APIs, Zapier, Make (Integromat)",
  },
  {
    id: "02",
    title: "Web & App Development",
    seoHeading: "Custom Web & Mobile App Development for Growth-Focused Brands",
    description:
      "Build high-performing digital products across web and mobile channels with conversion-focused UX and scalable architecture.",
    points: [
      "Custom Website Development",
      "Landing Pages (High-Converting)",
      "Web Applications (SaaS Platforms)",
      "Mobile App Development (iOS & Android)",
    ],
    stackLabel: "Tech Stack",
    stack: "React, Next.js, Node.js, Firebase",
  },
  {
    id: "03",
    title: "Full Stack Development",
    seoHeading: "Full Stack Development Services with API & Cloud Engineering",
    description:
      "Engineer robust full stack applications with secure backend systems, scalable databases, and production-grade deployment pipelines.",
    points: [
      "End-to-End Application Development",
      "API Development & Integration",
      "Backend Architecture & Database Design",
      "Cloud Deployment & Maintenance",
    ],
    stackLabel: "Tech Stack",
    stack: "MERN Stack, PostgreSQL, AWS, Vercel",
  },
  {
    id: "04",
    title: "UI/UX Design & Product Engineering",
    seoHeading: "UI/UX Design & Product Engineering for User-Centric Digital Experiences",
    description:
      "Create intuitive interfaces and scalable design systems that improve adoption, retention, and product usability.",
    points: [
      "User Interface (UI) Design",
      "User Experience (UX) Optimization",
      "Product Prototyping (Figma)",
      "Design Systems & Branding",
    ],
    stackLabel: "Tools",
    stack: "Figma, Adobe XD",
  },
  {
    id: "05",
    title: "Data Analytics & Reporting",
    seoHeading: "Data Analytics & BI Reporting Services for Decision Intelligence",
    description:
      "Transform business data into actionable insight using KPI frameworks, predictive models, and executive-ready dashboards.",
    points: [
      "Business Intelligence Dashboards",
      "Data Visualization & Reporting",
      "KPI Tracking Systems",
      "Predictive Analytics (AI-based insights)",
    ],
    stackLabel: "Tools",
    stack: "Power BI, Tableau, Google Data Studio",
  },
  {
    id: "06",
    title: "CRM & Business Systems Setup",
    seoHeading: "CRM & Business Systems Setup for Pipeline Automation",
    description:
      "Implement CRM ecosystems that improve lead lifecycle visibility, sales throughput, and client relationship management.",
    points: [
      "CRM Setup & Customization",
      "Sales Pipeline Automation",
      "Client Management Systems",
      "Integration with Marketing Tools",
    ],
    stackLabel: "Platforms",
    stack: "HubSpot, Salesforce, Zoho CRM",
  },
  {
    id: "07",
    title: "Operations Software & Integrations",
    seoHeading: "Operations Software Integration for Healthcare & Service Workflows",
    description:
      "Connect mission-critical systems across staffing, payroll, and healthcare operations for reliable day-to-day execution.",
    points: [
      "Scheduling System Setup",
      "Hiring Platforms Setup (Apploi)",
      "Payroll & HR Software Integration",
      "EHR/EMR System Support (for healthcare clients)",
    ],
    stackLabel: "Platforms",
    stack: "Apploi, WellSky, Viventium",
  },
  {
    id: "08",
    title: "Website Optimization & Growth",
    seoHeading: "Website Optimization & Growth Services for SEO and Conversion",
    description:
      "Increase organic visibility, page speed, and conversion performance with technical SEO and analytics-driven optimization.",
    points: [
      "SEO Optimization",
      "Speed & Performance Optimization",
      "Conversion Rate Optimization (CRO)",
      "Analytics & Tracking Setup",
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
          <div className="container services-catalog-board reveal reveal-up">
            <div className="services-catalog-hero">
              <div className="services-catalog-copy">
                <p className="services-kicker">Services Page 1</p>
                <h1>IT Services - Digital &amp; Automation</h1>
                <p>
                  End-to-end digital and automation services designed to improve
                  operational efficiency, accelerate growth, and modernize your
                  business stack.
                </p>
              </div>
              <div className="services-catalog-art" aria-hidden="true">
                <span className="art-node art-node-main">AI</span>
                <span className="art-node art-node-left">API</span>
                <span className="art-node art-node-right">UX</span>
                <span className="art-ring" />
              </div>
            </div>
          </div>

          <div className="container services-catalog-grid reveal reveal-up">
            {itServiceBlocks.map((block) => (
              <article key={block.id} className="services-catalog-card">
                <p className="services-card-index">{block.id}</p>
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
