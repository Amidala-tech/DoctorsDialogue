import {
  ArrowUpRight,
  BookOpen,
  Mic,
  MonitorPlay,
  Radio,
  Timer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const supportingCards = [
  {
    icon: Timer,
    title: "Daily 5-Minute Live Sessions",
    description: "Short, impactful health discussions with audience engagement.",
    href: "/contact?type=live-session",
    cta: "Join a Live Session",
  },
  {
    icon: MonitorPlay,
    title: "Studio & Virtual Video Sessions",
    description: "Flexible conversations produced with a polished visual format.",
    href: "/contact?type=studio-session",
    cta: "Book a Session",
  },
  {
    icon: Radio,
    title: "Doctor Solo Talks",
    description: "Focused expert-led messages, guidance, and awareness content.",
    href: "/contact?type=solo-talk",
    cta: "Submit for Solo Talk",
  },
];

export function PlatformSection() {
  return (
    <section
      id="platform-overview"
      className="relative scroll-mt-24 border-t border-line/60 bg-surface/40 py-24 md:py-32"
    >
      <div className="container-edge">
        <SectionHeading
          eyebrow="What We Do"
          title="A Complete Healthcare Communication Platform"
          intro="Doctor's Dialogue creates spaces for doctors to educate, connect, and create lasting public impact through multiple media formats."
        />

        {/* Asymmetric editorial grid: one statement card + supporting cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <Link
              href="/contact?type=podcast"
              className="group relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden rounded-3xl border border-line transition-all duration-500 hover:border-gold/50 hover:shadow-[var(--shadow-glow)]"
            >
              <Image
                src="/images/dd-card-podcast.jpg"
                alt="Broadcast microphones in the Doctor's Dialogue studio"
                fill
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
              />
              <div className="relative p-8 md:p-12">
                <span className="flex size-12 items-center justify-center rounded-full border border-gold/50 bg-ink/70 text-gold backdrop-blur">
                  <Mic className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-4xl text-ivory md:text-5xl">
                  Doctor Podcasts
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-sand">
                  In-depth conversations on specialties, experiences, and the
                  health topics that matter most to your community.
                </p>
                <span className="link-gold mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
                  Explore Doctor Podcasts
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>

          {supportingCards.map((card, i) => (
            <Reveal key={card.title} delay={0.08 * (i + 1)}>
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-3xl border border-line bg-raised p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-glow)]"
              >
                <span className="flex size-12 items-center justify-center rounded-full border border-line text-gold transition-colors duration-300 group-hover:border-gold/60">
                  <card.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-ivory">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed">
                  {card.description}
                </p>
                <span className="link-gold mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-gold">
                  {card.cta}
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.32} className="lg:col-span-3">
            <Link
              href="/contact?type=magazine"
              className="group relative flex min-h-[16rem] flex-col justify-end overflow-hidden rounded-3xl border border-line transition-all duration-500 hover:border-gold/50 hover:shadow-[var(--shadow-glow)] md:min-h-[18rem]"
            >
              <Image
                src="/images/dd-card-magazine.jpg"
                alt="Open premium healthcare magazine on a desk"
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent"
              />
              <div className="relative max-w-lg p-8 md:p-12">
                <span className="flex size-12 items-center justify-center rounded-full border border-gold/50 bg-ink/70 text-gold backdrop-blur">
                  <BookOpen className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-3xl text-ivory md:text-4xl">
                  Monthly Healthcare Magazine
                </h3>
                <p className="mt-3 leading-relaxed text-sand">
                  Digital and print features that extend doctor voices beyond
                  video — healthcare journalism with an editorial finish.
                </p>
                <span className="link-gold mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
                  Magazine Feature
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
