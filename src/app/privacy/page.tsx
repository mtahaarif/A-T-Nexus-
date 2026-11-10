import type { Metadata } from "next";
import Link from "next/link";

import LegalPage, { LegalContactBlock } from "@/components/LegalPage";
import { company } from "@/components/company-info";

export const metadata: Metadata = {
  title: "Privacy Policy | A&T Nexus",
  description:
    "How A&T Nexus collects, uses, shares, and protects personal information, including SMS opt-in data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <p>
          This Privacy Policy explains how {company.legalName} (&quot;{company.brand}&quot;,
          &quot;we&quot;, &quot;us&quot;) collects, uses, and protects personal information
          when you visit {company.website} or contact us.
        </p>
      }
    >
      <section>
        <h2>1. Who we are</h2>
        <p>
          {company.brand} operates {company.website} and provides IT services, software
          development, digital transformation, and home health care operations support to
          businesses. Our contact details are listed at the end of this policy.
        </p>
      </section>

      <section>
        <h2>2. Information we collect</h2>
        <ul>
          <li>
            <strong>Contact and business details</strong> you submit through our forms, such as
            your name, email address, phone number, company, the service you are interested in,
            and your message.
          </li>
          <li>
            <strong>Consent records</strong>, such as whether you accepted our Terms and Privacy
            Policy and whether you opted in to SMS, along with the date and time of that choice.
          </li>
          <li>
            <strong>Technical data</strong>, such as IP address, device type, browser, and pages
            viewed.
          </li>
          <li>
            <strong>Analytics data</strong>, if we enable analytics tools on the site.
          </li>
        </ul>
        <p>
          We do not knowingly collect personal information from children under 13. If you
          believe a child has given us personal information, contact us and we will delete it.
        </p>
      </section>

      <section>
        <h2>3. How we use information</h2>
        <ul>
          <li>To respond to your enquiries and provide the services you request.</li>
          <li>To send SMS messages you have opted in to (see section 6).</li>
          <li>To operate, maintain, and secure our website.</li>
          <li>To understand how the site is used and improve it.</li>
          <li>To comply with the law and enforce our <Link href="/terms">Terms</Link>.</li>
        </ul>
      </section>

      <section>
        <h2>4. Cookies and similar technologies</h2>
        <p>
          We may use cookies and similar technologies to remember preferences and analyze
          traffic. You can manage or block cookies in your browser settings, though some parts
          of the site may not work as intended.
        </p>
      </section>

      <section>
        <h2>5. Sharing of personal information</h2>
        <p>
          We do not sell your personal information. We may share it with:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> that help us run our business, such as hosting,
            email delivery, SMS delivery, and analytics providers, under agreements that limit
            how they use the data.
          </li>
          <li>
            <strong>Authorities or others</strong> when required by law, or to protect our
            rights, safety, or property.
          </li>
          <li>
            <strong>A successor business</strong> in connection with a merger, acquisition, or
            sale of assets.
          </li>
        </ul>
        <p>
          Information you provide as part of a client engagement, including any health-related
          information handled through our home health care operations services, is governed by
          the separate agreement with that client.
        </p>
      </section>

      <section>
        <h2>6. SMS and text messaging</h2>
        <p>
          If you provide your mobile number and opt in to SMS on our contact form or another{" "}
          {company.brand} form, we may use that number to send text messages for account
          notifications (such as service updates and appointment reminders) and customer care
          (such as replies to your enquiries and support requests).
        </p>
        <ul>
          <li>Message frequency varies. Message and data rates may apply.</li>
          <li>
            Reply <strong>STOP</strong> to opt out of future messages. Reply{" "}
            <strong>HELP</strong> for help.
          </li>
          <li>
            Mobile opt-in information and SMS consent are not sold, rented, or shared with third
            parties or affiliates for their marketing or promotional purposes. We share them
            only with service providers that deliver our messages, or where required by law.
          </li>
          <li>
            You can withdraw consent at any time by replying STOP or by emailing{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </li>
        </ul>
        <p>
          See our <Link href="/sms-terms">SMS Terms</Link> for full program details.
        </p>
      </section>

      <section>
        <h2>7. Retention</h2>
        <p>
          We keep contact submissions and related records only as long as needed to respond to
          your enquiry, provide services, meet legitimate business needs, resolve disputes, and
          comply with legal obligations. After that, we delete or de-identify them. We keep
          records of SMS consent and opt-outs as long as needed to honor your choices.
        </p>
      </section>

      <section>
        <h2>8. Your privacy rights</h2>
        <p>
          Depending on where you live, including California (CCPA/CPRA), Virginia, Colorado, and
          other U.S. states with privacy laws, you may have the right to:
        </p>
        <ul>
          <li>Know what personal information we hold about you and access it.</li>
          <li>Correct inaccurate information.</li>
          <li>Delete your personal information.</li>
          <li>Opt out of the sale or sharing of personal information, where applicable.</li>
          <li>Not be discriminated against for exercising these rights.</li>
        </ul>
        <p>
          To make a request, contact us using the details below. We may need to verify your
          identity before acting on it, and an authorized agent may submit a request on your
          behalf where state law allows.
        </p>
      </section>

      <section>
        <h2>9. Security</h2>
        <p>
          We use reasonable administrative, technical, and organizational safeguards to protect
          personal information. No method of transmission or storage is completely secure, so
          we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>10. Third-party links</h2>
        <p>
          Our site may link to third-party websites and services, such as WhatsApp or LinkedIn.
          Their own privacy policies govern how they handle your information.
        </p>
      </section>

      <section>
        <h2>11. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will change the
          &quot;Last updated&quot; date above. Continuing to use the site after a change means
          you accept the updated policy.
        </p>
      </section>

      <section>
        <h2>12. Contact us</h2>
        <p>For privacy questions or requests, contact:</p>
        <LegalContactBlock purpose="Privacy requests" />
      </section>
    </LegalPage>
  );
}
