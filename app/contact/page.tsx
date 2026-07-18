import {
  ArrowDown,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";
import { Suspense } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Waveform } from "@/components/waveform";
import { site } from "@/constants/site";
import { ContactForm } from "@/sections/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "For participation, collaborations, partnerships, and feature opportunities, connect with the Doctor's Dialogue team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Header — navy band */}
      <section className="relative overflow-hidden bg-hero-navy pb-16 pt-40 md:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgb(77_143_209/0.16),transparent_65%)]"
        />
        <div aria-hidden="true" className="texture-grid absolute inset-0 opacity-60" />
        <div className="container-edge relative text-center">
          <Reveal>
            <p className="eyebrow text-azure">Start the Conversation</p>
            <h1 className="mx-auto mt-6 max-w-3xl font-serif text-6xl font-medium leading-[1.02] text-white md:text-7xl">
              Contact Doctor&rsquo;s{" "}
              <span className="italic text-azure">Dialogue</span>
            </h1>
            <Waveform className="mx-auto mt-8 text-azure" />
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-mist/85">
              For participation, collaborations, partnerships, and feature
              opportunities, connect with the Doctor&rsquo;s Dialogue team.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="#contact-form">
                  Send an Enquiry
                  <ArrowDown aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <a href={site.phoneHref}>
                  <Phone aria-hidden="true" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <a href={`mailto:${site.email}`}>
                  <Mail aria-hidden="true" />
                  Email Us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 md:py-24">
        <div className="container-edge grid gap-6 md:grid-cols-3">
          <Reveal>
            <a
              href={`mailto:${site.email}`}
              className="group flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-[0_10px_30px_-24px_rgb(14_42_71/0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-glow)]"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-mist text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-serif text-2xl text-ink">
                Email Doctor&rsquo;s Dialogue
              </h2>
              <p className="mt-2 flex-1 text-sm">
                For participation &amp; collaboration enquiries.
              </p>
              <span className="link-accent mt-5 text-sm text-accent">{site.email}</span>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-[0_10px_30px_-24px_rgb(14_42_71/0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-glow)]">
              <span className="flex size-12 items-center justify-center rounded-full bg-mist text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-serif text-2xl text-ink">Call the Team</h2>
              <p className="mt-2 flex-1 text-sm">
                Speak with us about features and sessions.
              </p>
              <a href={site.phoneHref} className="link-accent mt-5 text-sm text-accent">
                {site.phone}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent mt-2 inline-flex w-fit items-center gap-2 text-sm text-steel hover:text-accent"
              >
                <MessageCircle className="size-4 text-accent" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-[0_10px_30px_-24px_rgb(14_42_71/0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-glow)]">
              <span className="flex size-12 items-center justify-center rounded-full bg-mist text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-serif text-2xl text-ink">Visit the Studio</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed">
                {site.address.company}
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent mt-5 inline-flex w-fit items-center gap-2 text-sm text-accent"
              >
                Open in Maps
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enquiry form */}
      <section
        id="contact-form"
        className="scroll-mt-24 border-t border-line bg-mist py-24 md:py-32"
      >
        <div className="container-edge grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Enquiry Form"
              title="Tell Us How You'd Like to Participate"
              intro="Choose the format that suits you — podcast, solo talk, live session, studio conversation, or magazine feature — and we'll take it from there."
            />
            <Reveal delay={0.15}>
              <div className="mt-10 rounded-2xl bg-flagship p-7 shadow-[var(--shadow-card)]">
                <p className="font-serif text-xl italic leading-snug text-white">
                  &ldquo;Whether you want to be featured, collaborate, or build
                  your voice in healthcare awareness, Doctor&rsquo;s Dialogue is
                  ready to connect.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Suspense
              fallback={
                <div
                  className="h-[36rem] animate-pulse rounded-3xl border border-line bg-white"
                  aria-hidden="true"
                />
              }
            >
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
