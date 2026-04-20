import Link from "next/link";
import {
  affiliations,
  missionCards,
  ServiceIcon,
  services,
  valueCards,
  whyItems,
} from "@/components/site-data";

type HomeInsightIconType =
  | "partner"
  | "automation"
  | "operations"
  | "healthcare"
  | "execution"
  | "analytics"
  | "efficiency"
  | "scale"
  | "process"
  | "management"
  | "infrastructure"
  | "speed"
  | "compliance"
  | "insights"
  | "support";

function HomeInsightIcon({ type }: { type: HomeInsightIconType }) {
  switch (type) {
    case "partner":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M16 30h10l6-6 6 6h10" />
          <path d="M10 36h14l8 8 8-8h14" />
          <path d="M24 26v-8" />
          <path d="M40 26v-8" />
        </svg>
      );
    case "automation":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <circle cx="32" cy="32" r="8" />
          <path d="M32 14v6" />
          <path d="M32 44v6" />
          <path d="M14 32h6" />
          <path d="M44 32h6" />
          <path d="m19 19 4 4" />
          <path d="m41 41 4 4" />
          <path d="m45 19-4 4" />
          <path d="m23 41-4 4" />
        </svg>
      );
    case "operations":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <rect x="10" y="14" width="16" height="12" rx="2" />
          <rect x="38" y="14" width="16" height="12" rx="2" />
          <rect x="24" y="38" width="16" height="12" rx="2" />
          <path d="M26 20h12" />
          <path d="M32 26v12" />
        </svg>
      );
    case "healthcare":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M32 50S16 40 16 27a8 8 0 0 1 14-5l2 2 2-2a8 8 0 0 1 14 5c0 13-16 23-16 23Z" />
          <path d="M32 26v12" />
          <path d="M26 32h12" />
        </svg>
      );
    case "execution":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M18 50V14" />
          <path d="M18 16h24l-4 8 4 8H18" />
          <path d="m26 42 4 4 8-8" />
        </svg>
      );
    case "analytics":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M12 50h40" />
          <rect x="16" y="34" width="7" height="12" rx="1" />
          <rect x="28" y="27" width="7" height="19" rx="1" />
          <rect x="40" y="20" width="7" height="26" rx="1" />
          <path d="m16 24 9-7 8 4 13-9" />
        </svg>
      );
    case "efficiency":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <circle cx="32" cy="34" r="16" />
          <path d="M32 34 40 26" />
          <path d="M32 18v4" />
          <path d="M48 34h4" />
          <path d="M20 22 16 18" />
        </svg>
      );
    case "scale":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M12 24v-8h8" />
          <path d="M52 24v-8h-8" />
          <path d="M12 40v8h8" />
          <path d="M52 40v8h-8" />
          <path d="M20 16 12 24" />
          <path d="M44 16 52 24" />
          <path d="M20 48 12 40" />
          <path d="M44 48 52 40" />
        </svg>
      );
    case "process":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <rect x="10" y="14" width="14" height="10" rx="2" />
          <rect x="26" y="27" width="14" height="10" rx="2" />
          <rect x="42" y="40" width="14" height="10" rx="2" />
          <path d="M24 19h8" />
          <path d="M40 32h8" />
        </svg>
      );
    case "management":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <rect x="18" y="10" width="28" height="44" rx="4" />
          <path d="M26 10v6h12v-6" />
          <path d="M24 26h16" />
          <path d="M24 34h16" />
          <path d="M24 42h10" />
        </svg>
      );
    case "infrastructure":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <circle cx="14" cy="32" r="4" />
          <circle cx="32" cy="16" r="4" />
          <circle cx="50" cy="32" r="4" />
          <circle cx="32" cy="48" r="4" />
          <path d="M18 32h28" />
          <path d="M32 20v24" />
        </svg>
      );
    case "speed":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M12 42h24" />
          <path d="M18 34h22" />
          <path d="M24 26h18" />
          <path d="M36 14 24 34h12l-8 16 20-24H36z" />
        </svg>
      );
    case "compliance":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M32 12 16 18v12c0 12 7 18 16 22 9-4 16-10 16-22V18z" />
          <path d="m24 32 6 6 10-10" />
        </svg>
      );
    case "insights":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M24 44h16" />
          <path d="M26 50h12" />
          <path d="M22 30a10 10 0 1 1 20 0c0 4-2 6-4 8H26c-2-2-4-4-4-8Z" />
          <path d="M32 14v4" />
          <path d="M46 30h4" />
          <path d="M14 30h4" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M14 34v-2a18 18 0 1 1 36 0v2" />
          <rect x="12" y="34" width="8" height="12" rx="2" />
          <rect x="44" y="34" width="8" height="12" rx="2" />
          <path d="M20 48h20" />
          <path d="M36 48a4 4 0 0 1-4 4h-4" />
        </svg>
      );
    default:
      return null;
  }
}

const whoWeAreHighlights = [
  {
    icon: "partner" as const,
    title: "SME Digital Transformation Partner",
    text: "We help small and medium-sized businesses modernize operations with practical technology roadmaps.",
  },
  {
    icon: "automation" as const,
    title: "Workflow Automation Specialists",
    text: "We streamline repetitive processes using automation-first design and execution systems.",
  },
  {
    icon: "operations" as const,
    title: "Backend Operations Expertise",
    text: "Our team supports hiring, billing, care coordination, and process optimization at scale.",
  },
  {
    icon: "healthcare" as const,
    title: "Healthcare-Ready Operations",
    text: "We bring proven experience across home care, home health, and service-driven industries.",
  },
  {
    icon: "execution" as const,
    title: "Execution-Led Delivery",
    text: "We do more than consulting by implementing, managing, and continuously improving operations.",
  },
  {
    icon: "analytics" as const,
    title: "Data-Driven Operating Model",
    text: "Our decisions are guided by measurable KPIs, workflow analytics, and real operational outcomes.",
  },
  {
    icon: "efficiency" as const,
    title: "Cost & Efficiency Optimization",
    text: "We reduce operational burden while improving speed, quality, and long-term scalability.",
  },
  {
    icon: "scale" as const,
    title: "Systems Built For Scale",
    text: "We convert complex business workflows into simple, reliable, and scalable systems.",
  },
];

const deliveryHighlights = [
  {
    icon: "process" as const,
    title: "Streamlined Operations",
    text: "Eliminate inefficiencies with process-first workflow architecture and automation.",
  },
  {
    icon: "management" as const,
    title: "End-to-End Process Management",
    text: "From hiring and onboarding to billing and day-to-day execution, we manage the full cycle.",
  },
  {
    icon: "automation" as const,
    title: "Automation-Led Execution",
    text: "Reduce manual effort through no-code, API-driven, and custom automation pipelines.",
  },
  {
    icon: "infrastructure" as const,
    title: "Scalable Infrastructure",
    text: "Deploy systems engineered to grow with your team, clients, and operational demand.",
  },
  {
    icon: "efficiency" as const,
    title: "Cost Optimization",
    text: "Lower operating costs while preserving service quality, compliance, and performance.",
  },
  {
    icon: "speed" as const,
    title: "Faster Turnaround Times",
    text: "Improve response speed across scheduling, coordination, and operational handoffs.",
  },
  {
    icon: "compliance" as const,
    title: "Compliance-Ready Processes",
    text: "Run structured, audit-ready workflows aligned with healthcare and industry requirements.",
  },
  {
    icon: "insights" as const,
    title: "Actionable Insights",
    text: "Enable strategic decisions with KPI reporting, trend visibility, and operational analytics.",
  },
  {
    icon: "support" as const,
    title: "Reliable Remote Support",
    text: "Get consistent backend operations from experienced specialists across key business functions.",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="hero section-pad">
      <div className="container hero-content reveal reveal-up">
        <div className="hero-copy">
          <h1>
            Empowering SMEs With Future-Ready <span>Technology</span>
          </h1>
          <p>
            We simplify digital adoption with smart, scalable solutions that
            help your business thrive in today&apos;s connected,
            technology-driven world.
          </p>
          <Link href="/services" className="btn btn-secondary-outline">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeSplitSection() {
  return (
    <section className="section-pad home-insight-shell">
      <div className="container home-insight-grid-wrap">
        <article className="home-insight-panel home-insight-panel-who reveal reveal-up">
          <div className="home-insight-head home-insight-head-who">
            <h2>Who We Are</h2>
            <p>
              A transformation-first team turning complex backend operations into
              scalable, high-performance systems.
            </p>
          </div>
          <div className="home-insight-grid">
            {whoWeAreHighlights.map((item) => (
              <article key={item.title} className="home-insight-card home-insight-card-who">
                <div className="home-insight-card-head">
                  <span className="home-insight-icon" aria-hidden="true">
                    <HomeInsightIcon type={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="home-insight-panel home-insight-panel-deliver reveal reveal-up">
          <div className="home-insight-head home-insight-head-deliver">
            <h2>What We Deliver</h2>
            <p>
              Measurable operational outcomes through automation, process
              control, and data-backed execution.
            </p>
          </div>
          <div className="home-insight-grid">
            {deliveryHighlights.map((item) => (
              <article key={item.title} className="home-insight-card home-insight-card-deliver">
                <div className="home-insight-card-head">
                  <span className="home-insight-icon" aria-hidden="true">
                    <HomeInsightIcon type={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="About_Sec" className="section-pad about">
      <div className="container about-single reveal reveal-up">
        <div className="about-copy about-copy-justified">
          <h2>Shaping The Future For SMEs</h2>
          <p>
            <strong>A&T Nexus</strong> is a digital transformation company
            empowering SMEs with future-ready technology. We integrate strategy,
            innovation, and execution to help businesses digitize operations,
            boost efficiency, and unlock growth in the evolving digital economy.
          </p>
        </div>
      </div>
    </section>
  );
}

export function MissionSection() {
  return (
    <section className="section-pad mission">
      <div className="container mission-grid">
        <div className="mission-intro reveal reveal-right">
          <h2>Empowering The Next Era</h2>
          <p>
            To be a global leader in SME digital transformation, helping
            businesses thrive in a connected, technology-driven world.
          </p>

          <article className="mission-card">
            <h3>Our Mission</h3>
            <p>
              Simplifying and accelerating digital adoption for SMEs with smart,
              scalable solutions that drive innovation, sustainability, and
              long-term success.
            </p>
          </article>
        </div>

        <div className="mission-stack reveal reveal-left">
          {missionCards.map((item) => (
            <article key={item.title} className="icon-card">
              <img src={item.icon} alt="" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="section-pad-sm why-shell">
      <div className="container reveal reveal-up">
        <h2>Why A&amp;T Nexus</h2>
        <div className="why-list">
          {whyItems.map((item) => (
            <article key={item} className="why-pill">
              <span className="dot" aria-hidden="true" />
              {item}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValuesSection() {
  return (
    <section className="section-pad values-shell">
      <div className="container values-head reveal reveal-up">
        <h2>The Values That Drive Us</h2>
        <p>
          Our values shape how we work, innovate, and build lasting partnerships
          with our clients.
        </p>
      </div>

      <div className="container values-grid reveal reveal-up">
        {valueCards.map((item) => (
          <article key={item.title} className="value-card">
            <img src={item.icon} alt="" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="Services_sec" className="section-pad services-shell">
      <div className="container section-head light-head reveal reveal-up">
        <h2>Our Services</h2>
        <p>
          We provide smart, scalable solutions that help SMEs digitize
          operations, improve efficiency, and achieve sustainable growth.
        </p>
      </div>

      <div className="container services-grid reveal reveal-up">
        {services.map((service) => (
          <article key={service.title} className="service-tile">
            <div className="service-tile-icon" aria-hidden="true">
              <ServiceIcon type={service.icon} />
            </div>
            <h3>{service.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export function LeadershipSection() {
  return (
    <section className="section-pad leadership-shell">
      <div className="container leadership-grid">
        <div className="leadership-profile reveal reveal-right">
          <div className="profile-photo">
            <img
              src="https://atnexus.io/wp-content/uploads/2025/10/Group-1948755045.png"
              alt="Waleed Arif"
            />
          </div>
          <h3>Waleed Arif</h3>
          <p>Founder &amp; CEO</p>
        </div>

        <div className="leadership-copy reveal reveal-left">
          <h2>Our Leadership</h2>
          <p>
            Waleed Arif is the Founder and Chief Executive Officer of A&T Nexus,
            driving the company&apos;s mission to enable digital transformation
            for small and medium-sized enterprises. With a background in
            Petroleum Engineering and experience across international and remote
            corporate environments, he combines technical expertise with
            strategic leadership to deliver scalable, results-driven solutions.
          </p>
          <p>
            Rooted in the business and industrial sector, Waleed&apos;s early
            exposure to entrepreneurship shaped his perspective on leadership,
            resilience, and sustainable growth. His leadership journey includes
            serving as President of the SPE UCSI Student Chapter.
          </p>
          <p>
            At A&T Nexus, Waleed emphasizes operational excellence, innovation,
            and integrity, positioning the company as a trusted partner for SMEs
            seeking affordable and impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AffiliationsSection() {
  const marqueeLogos = [...affiliations, ...affiliations, ...affiliations];

  return (
    <section className="section-pad affiliations-shell">
      <div className="container section-head light-head reveal reveal-up">
        <h2>Our Affiliations</h2>
      </div>

      <div className="container reveal reveal-up">
        <div className="affiliations-marquee">
          <div className="marquee-track">
            {marqueeLogos.map((logo, index) => (
              <figure className="logo-chip" key={`${logo}-${index}`}>
                <img src={logo} alt="Affiliation logo" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
