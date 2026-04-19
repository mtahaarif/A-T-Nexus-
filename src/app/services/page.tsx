"use client";

import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useRevealOnScroll } from "@/components/useRevealOnScroll";

const itServiceBlocks = [
  {
    title: "1) Business Process Automation",
    points: [
      "Map existing workflows and identify bottlenecks across operations.",
      "Automate repetitive steps in onboarding, approvals, reminders, and follow-ups.",
      "Standardize SOP-driven processes to reduce errors and rework.",
      "Build role-based dashboards for real-time operational visibility.",
    ],
    tools: "Tools & Tech: Zapier, Make, Power Automate, Airtable, Notion, Google Workspace",
  },
  {
    title: "2) Web, Portal & Internal System Development",
    points: [
      "Design and develop modern websites focused on performance and conversion.",
      "Build secure internal portals for teams, operations, and client interactions.",
      "Create custom modules for intake, scheduling, task assignment, and reporting.",
      "Integrate systems with CRM, forms, and payment flows.",
    ],
    tools: "Tools & Tech: React, Next.js, Node.js, REST APIs, PostgreSQL, Firebase",
  },
  {
    title: "3) Data Systems & Operational Reporting",
    points: [
      "Consolidate fragmented data into a single, structured reporting layer.",
      "Create KPI dashboards for operations, staffing, finance, and service quality.",
      "Set up automated report generation for leadership and management teams.",
      "Enable trend tracking and performance diagnostics for better decision-making.",
    ],
    tools: "Tools & Tech: Power BI, Looker Studio, Google Sheets, SQL, BigQuery",
  },
  {
    title: "4) CRM, Workflow & Lifecycle Management",
    points: [
      "Implement CRM frameworks for lead, client, and case lifecycle management.",
      "Automate communication journeys including reminders, updates, and renewals.",
      "Build segmented pipelines with role-based ownership and status tracking.",
      "Improve team responsiveness through SLA-backed workflow automation.",
    ],
    tools: "Tools & Tech: HubSpot, Zoho CRM, Salesforce, Pipedrive, Monday.com",
  },
  {
    title: "5) Cloud & Infrastructure Modernization",
    points: [
      "Migrate core operations to secure, cloud-based environments.",
      "Set up scalable architecture for business continuity and growth.",
      "Implement access controls, backup plans, and environment governance.",
      "Optimize system performance with cost-aware infrastructure planning.",
    ],
    tools: "Tools & Tech: AWS, Azure, Google Cloud, Docker, Cloudflare, GitHub Actions",
  },
  {
    title: "6) AI-Enabled Operations",
    points: [
      "Deploy AI assistants for ticket handling, drafting, and process support.",
      "Automate document summarization and operational knowledge retrieval.",
      "Use intelligent routing to reduce response times across internal teams.",
      "Implement controlled AI workflows with human-in-the-loop quality checks.",
    ],
    tools: "Tools & Tech: OpenAI, Azure OpenAI, LangChain, vector databases, RAG pipelines",
  },
  {
    title: "7) Security, Compliance & Risk Controls",
    points: [
      "Establish secure-by-default workflows and permission models.",
      "Implement audit-ready records and policy-based process controls.",
      "Strengthen identity, device, and data access protections.",
      "Reduce risk exposure with proactive monitoring and incident preparedness.",
    ],
    tools: "Tools & Tech: Microsoft Entra, MFA, SIEM logging, endpoint controls, policy frameworks",
  },
  {
    title: "8) Managed IT Operations & Continuous Optimization",
    points: [
      "Provide ongoing support for systems, workflows, and operational tooling.",
      "Run monthly optimization cycles to improve speed, quality, and reliability.",
      "Document and maintain process ownership across teams.",
      "Align technology execution with business goals through structured reviews.",
    ],
    tools: "Tools & Tech: ITSM workflows, runbooks, SLA tracking, QA checklists, performance scorecards",
  },
];

export default function ServicesPage() {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-pad services-detail-shell">
          <div className="container section-head reveal reveal-up">
            <h1>IT Services - Digital &amp; Automation</h1>
            <p>
              We build practical digital systems that simplify operations,
              improve execution, and help your business scale with clarity.
            </p>
          </div>

          <div className="container services-detail-grid reveal reveal-up">
            {itServiceBlocks.map((block) => (
              <article key={block.title} className="service-detail-card">
                <h2>{block.title}</h2>
                <ul>
                  {block.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="service-detail-tools">{block.tools}</p>
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
