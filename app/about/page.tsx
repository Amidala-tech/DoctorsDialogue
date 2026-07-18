import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  HeartPulse,
  Newspaper,
  Users,
  Youtube,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Waveform } from "@/components/waveform";
import { formats, site } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Doctor's Dialogue is a healthcare communication platform built to help doctors share trusted knowledge, real experiences, and awareness-driven conversations with wider communities.",
  alternates: { canonical: "/about" },
};

const ecosystem = [
  {
    icon: Users,
    title: "Expert discussions",
    description: "Specialists in conversation on the topics shaping public health.",
  },
  {
    icon: HeartPulse,
    title: "Health awareness content",
    description: "Clear, trustworthy guidance people can actually act on.",
  },
  {
    icon: GraduationCap,
    title: "Medical education conversations",
    description: "Learning-led dialogue that raises the standard of understanding.",
  },
  {
    icon: BookOpen,
    title: "Doctor stories & experiences",
    description: "The human side of medicine, told by the people who live it.",
  },
  {
    icon: Newspaper,
    title: "Healthcare journalism",
    description: "Editorial features that document and dignify healthcare work.",
  },
];

const values = [
  "Trust",
  "Clarity",
  "Awareness",
  "Accessibility",
  "Presence",
  "Impact",
];

export default function AboutPage() {
  return (
    <>
      {/* Intro hero — navy band */}
      <section className="relative overflow-hidden bg-hero-navy pb-20 pt-40 md:pb-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgb(77_143_209/0.16),transparent_65%)]"
        />
        <div aria-hidden="true" className="texture-grid absolute inset-0 opacity-60" />
        <div className="container-edge relative text-center">
          <Reveal>
            <p className="eyebrow text-azure">Who We Are</p>
            <h1 className="mx-auto mt-6 max-w-3xl font-serif text-6xl font-medium leading-[1.02] text-white md:text-7xl">
              About Doctor&rsquo;s <span className="italic text-azure">Dialogue</span>
            </h1>
            <Waveform className="mx-auto mt-8 text-azure" />
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-mist/85">
              A healthcare communication platform built to help doctors share
              trusted knowledge, real experiences, and awareness-driven
              conversations with wider communities.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube aria-hidden="true" />
                  Watch Conversations
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brand story */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-edge grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-card)]">
              <Image
                src="/images/dd-about-story.jpg"
                alt="A doctor in conversation with two guests at a table"
                width={1146}
                height={625}
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Bringing Doctors & Communities Together"
            />
            <Reveal delay={0.12}>
              <p className="mt-6 leading-relaxed">
                Doctor&rsquo;s Dialogue was created with a simple belief:
                healthcare communication should be clear, trustworthy, and
                accessible. By giving doctors a polished platform to speak,
                educate, and be featured, the brand helps bridge medical
                expertise and public understanding.
              </p>
              <div className="mt-10 rounded-2xl border border-line bg-mist p-8">
                <p className="eyebrow text-accent">Our Mission</p>
                <p className="mt-4 font-serif text-2xl leading-snug text-ink">
                  To make healthcare conversations more human, more credible,
                  and more widely accessible — through podcasts, short-form
                  sessions, video conversations, solo talks, and magazine
                  features.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="outline">
                  <Link href="/#platform-overview">
                    Explore Our Platform
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/#latest-episode">View Latest Episode</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Content ecosystem */}
      <section className="border-t border-line bg-mist py-24 md:py-32">
        <div className="container-edge">
          <SectionHeading
            eyebrow="What We Publish"
            title="Our Content Ecosystem"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((item, i) => (
              <Reveal key={item.title} delay={0.07 * i}>
                <div className="group h-full rounded-3xl border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-glow)]">
                  <span className="flex size-12 items-center justify-center rounded-full bg-mist text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <div className="flex h-full flex-col justify-between rounded-3xl bg-flagship p-8 shadow-[var(--shadow-card)]">
                <p className="font-serif text-2xl italic leading-snug text-white">
                  &ldquo;Your knowledge. Your voice. Your impact.&rdquo;
                </p>
                <Button asChild className="mt-8 w-fit">
                  <Link href="/contact">Be Featured</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How doctors participate */}
      <section id="content-formats" className="scroll-mt-24 border-t border-line bg-white py-24 md:py-32">
        <div className="container-edge grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Format Overview"
              title="How Doctors Participate"
              intro="Five editorial formats, one platform — choose the way you want your voice to reach people."
            />
            <Reveal delay={0.15}>
              <Button asChild className="mt-10">
                <Link href="/contact">
                  Be Featured
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="relative border-l border-line pl-10">
            {formats.map((format, i) => (
              <Reveal key={format.title} delay={0.08 * i}>
                <div className="group relative pb-12 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[45px] top-1.5 size-2.5 rounded-full border border-accent bg-white transition-colors duration-300 group-hover:bg-accent"
                  />
                  <h3 className="font-serif text-2xl text-ink">{format.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed">
                    {format.description}
                  </p>
                  <Link
                    href={format.href}
                    className="link-accent mt-3 inline-block text-[0.7rem] uppercase tracking-[0.22em] text-accent"
                  >
                    Apply for this format
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-line bg-mist py-24 md:py-32">
        <div className="container-edge text-center">
          <SectionHeading eyebrow="What Guides Us" title="Brand Values" align="center" />
          <Reveal delay={0.1}>
            <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-4">
              {values.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-line bg-white px-8 py-3.5 font-serif text-xl text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Closing statement */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgb(46_111_174/0.08),transparent_70%)]"
        />
        <div className="container-edge relative text-center">
          <Reveal>
            <p className="mx-auto max-w-3xl font-serif text-4xl font-medium leading-[1.15] text-ink md:text-5xl">
              Every conversation has the power to inform, reassure, and create
              meaningful public health awareness.{" "}
              <span className="italic text-accent">
                Doctor&rsquo;s Dialogue exists to make those conversations
                visible.
              </span>
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube aria-hidden="true" />
                  Watch on YouTube
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
