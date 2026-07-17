import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { formats } from "@/constants/site";

export function FeaturedSection() {
  return (
    <section
      id="be-featured"
      className="scroll-mt-24 border-t border-line/60 py-24 md:py-32"
    >
      <div className="container-edge">
        <SectionHeading
          eyebrow="Share Your Expertise With The World"
          title="Multiple Ways to Be Featured"
          intro="Doctors can participate in the format that best suits their expertise, audience, and communication style."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-4xl">
          {formats.map((format, i) => (
            <Reveal key={format.title} delay={0.06 * i}>
              <Link
                href={format.href}
                className="group flex items-center gap-6 border-b border-line/70 py-8 transition-colors duration-300 first:border-t hover:bg-surface/60 md:gap-10 md:px-6"
              >
                <span className="font-serif text-2xl text-olive transition-colors duration-300 group-hover:text-gold md:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block font-serif text-2xl text-ivory transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                    {format.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-sand">
                    {format.description}
                  </span>
                </span>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-line text-sand transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center font-serif text-2xl italic text-gold">
            Share your expertise with the world.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
