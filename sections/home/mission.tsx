import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Waveform } from "@/components/waveform";

const missionPoints = [
  "Trusted health information",
  "Public awareness",
  "Medical education conversations",
  "Doctor stories and experiences",
  "Healthcare journalism",
];

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-mist py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_80%_10%,rgb(46_111_174/0.08),transparent_65%)]"
      />

      <div className="container-edge relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="eyebrow text-accent">More Than Treatment</p>
          <blockquote className="mt-8 font-serif text-4xl font-medium leading-[1.15] text-ink md:text-5xl">
            &ldquo;Healthcare is not only about treatment. It is also about{" "}
            <span className="italic text-accent">education</span>,{" "}
            <span className="italic text-accent">awareness</span>, and{" "}
            <span className="italic text-accent">communication</span>.&rdquo;
          </blockquote>
          <Waveform className="mt-10" />
          <p className="mt-8 max-w-lg leading-relaxed">
            Doctor&rsquo;s Dialogue helps bring doctors and communities together
            through trusted information and meaningful conversations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="outline">
              <Link href="/about">
                Learn More About Us
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Join the Movement</Link>
            </Button>
          </div>
        </Reveal>

        <div className="flex flex-col divide-y divide-line border-y border-line">
          {missionPoints.map((point, i) => (
            <Reveal key={point} delay={0.08 * i}>
              <div className="group flex items-center gap-6 py-6">
                <span className="font-serif text-xl text-faint transition-colors duration-300 group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl text-ink transition-transform duration-300 group-hover:translate-x-1.5">
                  {point}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
