export type MissionCard = {
  icon: string;
  title: string;
  description: string;
};

export const primaryNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
] as const;

export const serviceMenuLinks = [
  { href: "/services", label: "IT Services" },
  { href: "/home-health-care-operations", label: "Home Health Care Operations" },
] as const;

export const missionCards: MissionCard[] = [
  {
    icon: "/theme/mission-global-leadership.png",
    title: "Global Leadership",
    description: "Driving SME digital transformation worldwide.",
  },
  {
    icon: "/theme/mission-business-growth.png",
    title: "Business Growth",
    description: "Enabling SMEs to thrive in a connected, tech-driven era.",
  },
  {
    icon: "/theme/mission-smart-solutions.png",
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
    icon: "/theme/value-integrity-trust.png",
    title: "Integrity & Trust",
    description: "Building lasting partnerships through honesty and transparency.",
  },
  {
    icon: "/theme/value-innovation-first.png",
    title: "Innovation First",
    description: "Driving progress with creativity and future-ready solutions.",
  },
  {
    icon: "/theme/value-customer-centricity.png",
    title: "Customer Centricity",
    description: "Putting clients at the heart of everything we do.",
  },
  {
    icon: "/theme/value-excellence-delivery.png",
    title: "Excellence In Delivery",
    description: "Ensuring measurable results with quality execution.",
  },
];

export const affiliations = [
  "/theme/affiliation-1.png",
  "/theme/affiliation-2.png",
  "/theme/affiliation-3.png",
];

export const helpLinks = ["Help Center", "Trust and safety", "Privacy settings"];
