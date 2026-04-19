import Link from "next/link";
import {
  affiliations,
  missionCards,
  ServiceIcon,
  services,
  valueCards,
  whyItems,
} from "@/components/site-data";

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
    <section className="section-pad home-split-shell">
      <div className="container home-split-grid reveal reveal-up">
        <article className="home-split-card">
          <h2>Who We Are</h2>
          <ul>
            <li>A&T Nexus is a digital transformation partner for small and medium-sized businesses.</li>
            <li>We specialize in streamlining operations, automating workflows, and building scalable systems.</li>
            <li>Our expertise covers backend operations, hiring, billing, care coordination, and process optimization.</li>
            <li>We bring hands-on experience in healthcare, home care, and service-based industries.</li>
            <li>We don&apos;t just consult, we implement, manage, and continuously optimize.</li>
            <li>Our approach is practical, data-driven, and built for real-world execution.</li>
            <li>We help businesses reduce operational burden, cut costs, and scale efficiently.</li>
            <li>Focused on one goal: turning complex operations into simple, scalable systems.</li>
          </ul>
        </article>

        <article className="home-split-card">
          <h2>What We Deliver</h2>
          <ul>
            <li>Streamlined Operations: simplified workflows that eliminate inefficiencies and save time.</li>
            <li>End-to-End Process Management: from hiring and onboarding to billing and daily operations.</li>
            <li>Automated Systems: reduced manual work through smart tools and digital workflows.</li>
            <li>Scalable Infrastructure: systems designed to grow with your business.</li>
            <li>Cost Optimization: lower operational expenses without compromising quality.</li>
            <li>Faster Turnaround Times: improved speed across scheduling, coordination, and execution.</li>
            <li>Compliance-Ready Processes: structured systems aligned with industry standards, especially healthcare and home care.</li>
            <li>Actionable Insights: data-driven reporting to support better decision-making.</li>
            <li>Reliable Remote Support: consistent backend operations handled by experienced professionals.</li>
          </ul>
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
