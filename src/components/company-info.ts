// Single source of truth for company details used on the contact page,
// footer, and legal pages (Privacy, Terms, SMS Terms).
export const company = {
  brand: "A&T Nexus",
  legalName: "A&T NEXUS SOLUTIONS LLC",
  website: "atnexus.io",
  email: "info@atnexus.io",
  phoneDisplay: "+1 (224) 395-6843",
  phoneHref: "tel:+12243956843",
  addressLines: ["2501 Chatham Rd # 6227", "Springfield, IL 62704"],
  governingState: "Illinois",
  legalLastUpdated: "November 2026",
} as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
  { href: "/sms-terms", label: "SMS Terms" },
] as const;
