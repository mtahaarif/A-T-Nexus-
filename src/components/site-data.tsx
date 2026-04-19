import type { ReactElement } from "react";

export type MissionCard = {
  icon: string;
  title: string;
  description: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: "digital" | "growth" | "technology" | "web";
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/dedicated-remote-ops", label: "Dedicated Ops" },
] as const;

export const missionCards: MissionCard[] = [
  {
    icon: "https://atnexus.io/wp-content/uploads/2025/10/Mask-group.png",
    title: "Global Leadership",
    description: "Driving SME digital transformation worldwide.",
  },
  {
    icon: "https://atnexus.io/wp-content/uploads/2025/10/Mask-group-1.png",
    title: "Business Growth",
    description: "Enabling SMEs to thrive in a connected, tech-driven era.",
  },
  {
    icon: "https://atnexus.io/wp-content/uploads/2025/10/Mask-group-2.png",
    title: "Smart Solutions",
    description: "Delivering scalable, sustainable, and future-ready digital adoption.",
  },
];

export const whyItems = [
  "Tailored solutions for the unique needs of growing businesses.",
  "Every solution is built to create measurable impact.",
  "A dedicated team committed to driving client success.",
  "Guiding clients from vision to execution in digital transformation.",
  "Leveraging cloud, automation, AI, and data to stay ahead.",
];

export const valueCards: MissionCard[] = [
  {
    icon: "https://atnexus.io/wp-content/uploads/2025/10/Mask-group-5.png",
    title: "Integrity & Trust",
    description: "Building lasting partnerships through honesty and transparency.",
  },
  {
    icon: "https://atnexus.io/wp-content/uploads/2025/10/Group-1.png",
    title: "Innovation First",
    description: "Driving progress with creativity and future-ready solutions.",
  },
  {
    icon: "https://atnexus.io/wp-content/uploads/2025/10/Group-1948754902.png",
    title: "Customer Centricity",
    description: "Putting clients at the heart of everything we do.",
  },
  {
    icon: "https://atnexus.io/wp-content/uploads/2025/10/recommendation.png",
    title: "Excellence In Delivery",
    description: "Ensuring measurable results with quality execution.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Digital Transformation Of SMEs",
    description: "Tailored solutions for growth and efficiency.",
    icon: "digital",
  },
  {
    title: "Tailored Solutions For Growth And Efficiency",
    description: "Designing practical systems and workflows for better results.",
    icon: "growth",
  },
  {
    title: "IT & Technology Solutions",
    description: "Reliable technology foundations for day-to-day operations.",
    icon: "technology",
  },
  {
    title: "Website & Online Presence",
    description: "Building digital touchpoints that attract and convert clients.",
    icon: "web",
  },
];

export const affiliations = [
  "https://atnexus.io/wp-content/uploads/2025/10/Islamabad-Chamber-logo.jpg",
  "https://atnexus.io/wp-content/uploads/2025/10/PSEB-Logo-1.png",
  "https://atnexus.io/wp-content/uploads/2025/10/Ministry-of-IT-Logo-e1760118705413.png",
];

export const helpLinks = ["Help Center", "Trust and safety", "Privacy settings"];

export function ServiceIcon({ type }: { type: ServiceItem["icon"] }): ReactElement {
  if (type === "digital") {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M4 5h16v14H4z" />
        <path d="M8 3v4M16 3v4M8 17v4M16 17v4" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    );
  }

  if (type === "growth") {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 3 4-5" />
        <path d="M18 9h-4V5" />
      </svg>
    );
  }

  if (type === "technology") {
    return (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M3 5h18v14H3z" />
      <path d="M3 9h18" />
      <circle cx="7" cy="7" r="1" />
      <circle cx="10" cy="7" r="1" />
      <path d="m8 15 2.5 2.5L16 12" />
    </svg>
  );
}
