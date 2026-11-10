import type { Metadata } from "next";
import Link from "next/link";

import LegalPage, { LegalContactBlock } from "@/components/LegalPage";
import { company } from "@/components/company-info";

export const metadata: Metadata = {
  title: "SMS Terms | A&T Nexus",
  description:
    "How the A&T Nexus text messaging program works, including opt-in, message frequency, rates, and how to reply STOP or HELP.",
};

export default function SmsTermsPage() {
  return (
    <LegalPage
      title="SMS Terms"
      intro={
        <p>
          These SMS Terms explain how {company.legalName} (&quot;{company.brand}&quot;,
          &quot;we&quot;, &quot;us&quot;) sends text messages to people who opt in on our
          website. They apply in addition to our{" "}
          <Link href="/terms">Terms and Conditions</Link> and{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      }
    >
      <section>
        <h2>1. Program description</h2>
        <p>
          {company.brand} may send SMS messages to mobile numbers that have opted in through
          our website forms. We run two messaging programs:
        </p>
        <ul>
          <li>
            <strong>Account notifications:</strong> account updates, service updates, project
            status updates, and appointment or call reminders.
          </li>
          <li>
            <strong>Customer care:</strong> replies to your enquiries, support requests,
            service questions, and appointment coordination.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. How to opt in</h2>
        <p>
          You opt in by entering your mobile number and checking the SMS consent box for one or
          both programs on our <Link href="/contact">contact form</Link> or another{" "}
          {company.brand} form. The boxes are unchecked by default and consent is voluntary.
          Consent to receive text messages is not required to submit a form, contact us, or
          purchase any of our services.
        </p>
      </section>

      <section>
        <h2>3. Message types and frequency</h2>
        <p>
          Messages relate to the program you opted in to, as described above. Message frequency
          varies based on your project and our conversation with you. We do not use SMS opt-in
          to add you to unrelated promotional or marketing lists.
        </p>
      </section>

      <section>
        <h2>4. Rates</h2>
        <p>
          Message and data rates may apply, depending on your mobile carrier and plan.{" "}
          {company.brand} does not charge a separate fee for text messages, but your carrier
          may.
        </p>
      </section>

      <section>
        <h2>5. Opting out (STOP) and getting help (HELP)</h2>
        <ul>
          <li>
            Reply <strong>STOP</strong> to any message to stop receiving texts from that
            program. You will receive one final message confirming you have been unsubscribed.
          </li>
          <li>
            Reply <strong>HELP</strong> to any message for help information.
          </li>
          <li>
            You can also withdraw consent or ask about SMS at any time by emailing{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>, calling{" "}
            <a href={company.phoneHref}>{company.phoneDisplay}</a>, or using our{" "}
            <Link href="/contact">contact form</Link>.
          </li>
        </ul>
        <p>
          If you opt out and later want to receive messages again, you can opt back in through
          one of our website forms.
        </p>
      </section>

      <section>
        <h2>6. Carrier liability</h2>
        <p>
          Mobile carriers are not liable for delayed or undelivered messages. Delivery depends
          on your carrier and device and is not guaranteed.
        </p>
      </section>

      <section>
        <h2>7. Privacy</h2>
        <p>
          Our <Link href="/privacy">Privacy Policy</Link> explains how we handle your phone
          number and consent. Mobile opt-in information and SMS consent are not sold, rented,
          or shared with third parties or affiliates for their marketing or promotional
          purposes. We share them only with service providers that help us deliver messages
          (such as our SMS platform), or where required by law.
        </p>
      </section>

      <section>
        <h2>8. Changes to these terms</h2>
        <p>
          We may update these SMS Terms from time to time. When we do, we will change the
          &quot;Last updated&quot; date above. Continuing to receive messages after a change
          means you accept the updated terms.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>Questions about our SMS program can be sent to:</p>
        <LegalContactBlock purpose="SMS questions" />
      </section>
    </LegalPage>
  );
}
