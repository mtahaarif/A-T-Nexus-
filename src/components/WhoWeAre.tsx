type WhoWeAreItem = {
  title: string;
  description: string;
};

const DEFAULT_ITEMS: WhoWeAreItem[] = [
  {
    title: "SME Digital Transformation Partner",
    description:
      "We help small and medium-sized businesses modernize operations with practical technology roadmaps.",
  },
  {
    title: "Workflow Automation Specialists",
    description:
      "We streamline repetitive processes using automation-first design and execution systems.",
  },
  {
    title: "Backend Operations Expertise",
    description:
      "Our team supports hiring, billing, care coordination, and process optimization at scale.",
  },
  {
    title: "Healthcare-Ready Operations",
    description:
      "We bring proven experience across home care, home health, and service-driven industries.",
  },
  {
    title: "Execution-Led Delivery",
    description:
      "We do more than consulting by implementing, managing, and continuously improving operations.",
  },
  {
    title: "Data-Driven Operating Model",
    description:
      "Our decisions are guided by measurable KPIs, workflow analytics, and real operational outcomes.",
  },
  {
    title: "Cost & Efficiency Optimization",
    description:
      "We reduce operational burden while improving speed, quality, and long-term scalability.",
  },
  {
    title: "Systems Built For Scale",
    description:
      "We convert complex business workflows into simple, reliable, and scalable systems.",
  },
];

type WhoWeAreProps = {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  items?: WhoWeAreItem[];
};

export default function WhoWeAre({
  id = "who-we-are",
  className,
  title = "Who We Are",
  subtitle = "A transformation-first team turning complex backend operations into scalable, high-performance systems.",
  items = DEFAULT_ITEMS,
}: WhoWeAreProps) {
  const sectionClasses = ["bg-[#0A0A0A] text-white", "py-20 md:py-28", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClasses} aria-labelledby="who-we-are-title">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10 lg:gap-16">
          <header className="self-start md:col-span-5 md:sticky md:top-32">
            <h2
              id="who-we-are-title"
              className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-gray-400 sm:text-lg">
              {subtitle}
            </p>
          </header>

          <div className="md:col-span-7">
            <ol className="space-y-12 md:space-y-40" aria-label="Who we are highlights">
              {items.map((item, index) => (
                <li key={item.title}>
                  <article className="group">
                    <p
                      aria-hidden="true"
                      className="font-semibold leading-none text-teal-400 transition-colors duration-300 group-hover:text-teal-300 text-5xl md:text-7xl"
                    >
                      {index + 1}.
                    </p>
                    <h3 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-teal-100 md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-gray-400 md:text-lg">
                      {item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
