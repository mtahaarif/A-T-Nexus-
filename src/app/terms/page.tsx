import type { Metadata } from "next";
import Link from "next/link";

import LegalPage, { LegalContactBlock } from "@/components/LegalPage";
import { company } from "@/components/company-info";

export const metadata: Metadata = {
  title: "Terms and Conditions | A&T Nexus",
  description: "The terms that govern your use of the A&T Nexus website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro={
        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern your use of {company.website}
          , operated by {company.legalName} (&quot;{company.brand}&quot;, &quot;we&quot;,
          &quot;us&quot;). They are intended for users in the United States.
        </p>
      }
    >
      <section>
        <h2>1. Agreement</h2>
        <p>
          By using this website, you agree to these Terms and our{" "}
          <Link href="/privacy">Privacy Policy</Link>. If you do not agree, please do not use
          the site. Client engagements are governed by a separate proposal, statement of work,
          or written contract, which takes priority over these Terms for that engagement.
        </p>
      </section>

      <section>
        <h2>2. Eligibility and acceptable use</h2>
        <p>
          You must be at least 18 years old and able to form a binding contract to submit a
          business enquiry. You agree to provide accurate information and not to misuse the
          site, including by scraping it, sending spam through our forms, introducing malicious
          code, or attempting to bypass its security.
        </p>
      </section>

      <section>
        <h2>3. SMS messaging</h2>
        <p>
          If you opt in to receive text messages from {company.brand}, our{" "}
          <Link href="/sms-terms">SMS Terms</Link> apply. Consent to SMS is optional and is not
          a condition of using the site or purchasing services. Message and data rates may
          apply. Reply STOP to opt out or HELP for help.
        </p>
      </section>

      <section>
        <h2>4. Intellectual property</h2>
        <p>
          The content on this site, including text, graphics, logos, and design, belongs to{" "}
          {company.brand} or its licensors. You may view it for personal, non-commercial
          purposes. Copying, modifying, distributing, or creating derivative works requires our
          prior written permission.
        </p>
      </section>

      <section>
        <h2>5. Informational content only</h2>
        <p>
          Content on this site, including service descriptions and examples, is general
          information and not legal, financial, medical, or other professional advice. Results
          described on the site are illustrative and are not a guarantee of similar outcomes.
        </p>
      </section>

      <section>
        <h2>6. Third-party services and links</h2>
        <p>
          The site may link to or integrate with third-party services, such as WhatsApp. We are
          not responsible for those services, and your use of them is at your own risk and
          subject to their terms.
        </p>
      </section>

      <section>
        <h2>7. Disclaimer of warranties</h2>
        <p>
          The site is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;, without
          warranties of any kind, express or implied. We do not guarantee that the site will be
          uninterrupted, error-free, or free of harmful components.
        </p>
      </section>

      <section>
        <h2>8. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {company.brand} and its owners, employees, and
          contractors are not liable for any indirect, incidental, special, consequential, or
          punitive damages arising from your use of the site, even if advised of the
          possibility. Our total liability for any claim relating to the site will not exceed
          US$100. Some states do not allow these limits, so they may not fully apply to you.
        </p>
      </section>

      <section>
        <h2>9. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold {company.brand} harmless from any claims,
          losses, and expenses, including reasonable attorneys&apos; fees, arising from your
          misuse of the site or violation of these Terms.
        </p>
      </section>

      <section>
        <h2>10. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of the United States and the State of{" "}
          {company.governingState}, without regard to conflict-of-law rules. Any dispute will
          be brought in the state or federal courts located in {company.governingState}, and
          you consent to their jurisdiction. If you are a consumer in a state that does not
          allow this, you may have additional rights under your local law.
        </p>
      </section>

      <section>
        <h2>11. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. When we do, we will change the
          &quot;Last updated&quot; date above. Continuing to use the site after a change means
          you accept the updated Terms.
        </p>
      </section>

      <section>
        <h2>12. Contact</h2>
        <p>Questions about these Terms can be sent to:</p>
        <LegalContactBlock purpose="Email" />
      </section>
    </LegalPage>
  );
}
