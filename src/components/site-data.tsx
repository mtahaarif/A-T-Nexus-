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

export const affiliations = [
  "https://atnexus.io/wp-content/uploads/2025/10/Islamabad-Chamber-logo.jpg",
  "https://atnexus.io/wp-content/uploads/2025/10/PSEB-Logo-1.png",
  "https://atnexus.io/wp-content/uploads/2025/10/Ministry-of-IT-Logo-e1760118705413.png",
];

export const helpLinks = ["Help Center", "Trust and safety", "Privacy settings"];
