import { Check } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const benefits = [
  "Reach a wider audience",
  "Share authentic medical knowledge",
  "Strengthen your digital presence",
  "Get featured across multiple platforms",
  "Become part of a healthcare awareness movement",
];

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden border-t border-line/60 bg-surface/40 py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgb(184_154_94/0.1),transparent_65%)]"
      />
      <div className="container-edge relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Presence &amp; Impact</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-ivory md:text-5xl">
            Build Awareness.
            <br />
            Build Trust.
            <br />
            Build Your <span className="italic text-gold">Presence</span>.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed">
            Every appearance on Doctor&rsquo;s Dialogue extends your voice beyond
            the clinic — across podcasts, live sessions, video, and print.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Collaborate With Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact?type=general-feature">Build Your Presence</Link>
            </Button>
          </div>
        </Reveal>

        <ul className="space-y-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit} delay={0.08 * i}>
              <li className="group flex items-center gap-5 rounded-2xl border border-line bg-raised/70 px-7 py-5 transition-all duration-300 hover:-translate-x-1 hover:border-gold/50">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="font-serif text-xl text-ivory">{benefit}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
