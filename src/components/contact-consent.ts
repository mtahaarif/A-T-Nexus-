import { company } from "@/components/company-info";

// Exact consent wording shown next to each checkbox on the contact form.
// The API route copies this text into the submission email so there is a
// record of what the person agreed to. If you change the wording, also
// update `legalLastUpdated` in company-info.ts and the SMS Terms page.

const smsFooter =
  "Message frequency varies. Message & data rates may apply. Reply STOP to opt out or HELP for help. " +
  "We do not sell, rent, or share your mobile number or personal information with third parties for their marketing purposes.";

export const consentText = {
  terms: "I agree to the Terms and Conditions and Privacy Policy.",
  smsAccount:
    `I agree to receive SMS messages from ${company.brand} regarding account notifications, ` +
    `including account updates, service updates, and appointment reminders. ${smsFooter}`,
  smsCare:
    `I agree to receive SMS messages from ${company.brand} for customer care, ` +
    `including replies to my inquiries, support requests, service questions, and appointment coordination. ${smsFooter}`,
} as const;

export const CONSENT_VERSION = company.legalLastUpdated;

// 7–15 digits, allowing common separators: +1 (224) 395-6843, 224.395.6843, etc.
export function isValidPhone(phone: string) {
  if (!/^[+\d\s().-]+$/.test(phone)) return false;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}
