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
    <section className="relative overflow-hidden bg-hero-navy py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgb(77_143_209/0.14),transparent_65%)]"
      />
      <div aria-hidden="true" className="texture-grid absolute inset-0 opacity-50" />
      <div className="container-edge relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-azure">Presence &amp; Impact</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-white md:text-5xl">
            Build Awareness.
            <br />
            Build Trust.
            <br />
            Build Your <span className="italic text-azure">Presence</span>.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-mist/85">
            Every appearance on Doctor&rsquo;s Dialogue extends your voice beyond
            the clinic — across podcasts, live sessions, video, and print.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Collaborate With Us</Link>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <Link href="/contact?type=general-feature">Build Your Presence</Link>
            </Button>
          </div>
        </Reveal>

        <ul className="space-y-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit} delay={0.08 * i}>
              <li className="group flex items-center gap-5 rounded-2xl border border-white/12 bg-white/[0.06] px-7 py-5 backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:border-azure/60">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-azure/60 text-azure">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="font-serif text-xl text-white">{benefit}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
