import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Waveform } from "@/components/waveform";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Doctor's Dialogue collects, uses, and protects the personal information you share with us, including data submitted through our contact form.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "17 July 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line/60 py-10 first:border-t-0 first:pt-0">
      <h2 className="font-serif text-3xl text-ivory">{title}</h2>
      <div className="mt-5 space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgb(184_154_94/0.1),transparent_65%)]"
        />
        <div className="container-edge relative text-center">
          <Reveal>
            <p className="eyebrow">Your Data, Respected</p>
            <h1 className="mx-auto mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-6xl">
              Privacy <span className="italic text-gold">Policy</span>
            </h1>
            <Waveform className="mx-auto mt-8" />
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-olive">
              Last updated: {lastUpdated}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container-edge max-w-3xl pb-24">
        <Reveal>
          <Section title="Who we are">
            <p>
              Doctor&rsquo;s Dialogue is a healthcare communication platform
              operated by <strong className="text-ivory">{site.address.company}</strong>,{" "}
              {site.address.line1}, {site.address.line2} (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;). This policy explains how we
              collect, use, and protect personal information when you use this
              website, in line with applicable Indian law, including the
              Digital Personal Data Protection Act, 2023.
            </p>
          </Section>

          <Section title="Information we collect">
            <p>
              When you submit our contact / enquiry form, we collect the
              information you provide:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-gold">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Organization or clinic name (optional)</li>
              <li>
                Your interest type (e.g. podcast conversation, solo feature,
                live session, studio session, magazine feature, collaboration)
              </li>
              <li>The content of your message</li>
            </ul>
            <p>
              We do not use analytics trackers or advertising cookies on this
              website, and we do not collect payment information.
            </p>
          </Section>

          <Section title="How we use your information">
            <ul className="list-disc space-y-2 pl-6 marker:text-gold">
              <li>
                To respond to your enquiry and discuss participation, feature,
                or collaboration opportunities with Doctor&rsquo;s Dialogue.
              </li>
              <li>
                To coordinate podcast recordings, live sessions, video
                sessions, and magazine features you ask to take part in.
              </li>
              <li>To maintain a record of our correspondence with you.</li>
            </ul>
            <p>
              We use your information only for the purposes above. We do not
              sell or rent personal information to anyone, and we do not use it
              for third-party marketing.
            </p>
          </Section>

          <Section title="How form submissions are processed">
            <p>
              Our enquiry form is delivered using{" "}
              <a
                href="https://formsubmit.co"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold text-gold"
              >
                FormSubmit
              </a>
              , a third-party form-forwarding service. When you press
              &ldquo;Submit Enquiry&rdquo;, the details you entered are
              transmitted securely (over HTTPS) to FormSubmit, which forwards
              them as an email to our inbox at{" "}
              <a href={`mailto:${site.email}`} className="link-gold text-gold">
                {site.email}
              </a>
              . FormSubmit processes this data solely to deliver your message;
              see the{" "}
              <a
                href="https://formsubmit.co/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold text-gold"
              >
                FormSubmit privacy policy
              </a>{" "}
              for details. If the service is unavailable, the form instead
              opens your own email app with a pre-drafted message — in that
              case nothing is sent until you choose to send it yourself.
            </p>
          </Section>

          <Section title="Data retention">
            <p>
              Enquiry emails are kept for as long as needed to handle your
              request and any resulting collaboration, and then for a
              reasonable period for record-keeping. You may ask us to delete
              your correspondence at any time (see &ldquo;Your rights&rdquo;
              below).
            </p>
          </Section>

          <Section title="Sharing of information">
            <p>We share personal information only with:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-gold">
              <li>
                Service providers that make this website work (FormSubmit for
                form delivery, and our website hosting provider), strictly to
                the extent needed to provide those services.
              </li>
              <li>
                Authorities, where disclosure is required by applicable law.
              </li>
            </ul>
          </Section>

          <Section title="Third-party links">
            <p>
              This website links to external platforms such as YouTube,
              Facebook, WhatsApp, and Google Maps. Once you leave our site,
              those platforms&rsquo; own privacy policies apply. We encourage
              you to review them.
            </p>
          </Section>

          <Section title="Security">
            <p>
              This website is served over HTTPS, and form submissions are
              transmitted over encrypted connections. Access to the enquiry
              inbox is limited to the Doctor&rsquo;s Dialogue team. No method
              of transmission or storage is 100% secure, but we take
              commercially reasonable measures to protect your information.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Subject to applicable law, you may request access to, correction
              of, or deletion of the personal information you have shared with
              us, or withdraw consent to its further use. To exercise any of
              these rights, contact us at{" "}
              <a href={`mailto:${site.email}`} className="link-gold text-gold">
                {site.email}
              </a>{" "}
              or {site.phone}. We will respond within a reasonable timeframe.
            </p>
          </Section>

          <Section title="Children's privacy">
            <p>
              This website is intended for healthcare professionals and adult
              audiences. We do not knowingly collect personal information from
              children. If you believe a child has submitted information to
              us, please contact us and we will delete it.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. The
              &ldquo;Last updated&rdquo; date at the top of this page shows
              when it was last revised. Material changes will be reflected on
              this page.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              For any questions about this policy or how your data is handled:
            </p>
            <p>
              {site.address.company}
              <br />
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              Email:{" "}
              <a href={`mailto:${site.email}`} className="link-gold text-gold">
                {site.email}
              </a>
              <br />
              Phone:{" "}
              <a href={site.phoneHref} className="link-gold text-gold">
                {site.phone}
              </a>
            </p>
            <div className="pt-4">
              <Button asChild variant="outline">
                <Link href="/contact">Back to Contact</Link>
              </Button>
            </div>
          </Section>
        </Reveal>
      </div>
    </>
  );
}
