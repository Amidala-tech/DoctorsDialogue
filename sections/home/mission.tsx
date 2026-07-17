import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/images/dd-mission-abstract.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink"
      />

      <div className="container-edge relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="eyebrow">More Than Treatment</p>
          <blockquote className="mt-8 font-serif text-4xl font-medium leading-[1.15] text-ivory md:text-5xl">
            &ldquo;Healthcare is not only about treatment. It is also about{" "}
            <span className="italic text-gold">education</span>,{" "}
            <span className="italic text-gold">awareness</span>, and{" "}
            <span className="italic text-gold">communication</span>.&rdquo;
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

        <div className="flex flex-col divide-y divide-line/70 border-y border-line/70">
          {missionPoints.map((point, i) => (
            <Reveal key={point} delay={0.08 * i}>
              <div className="group flex items-center gap-6 py-6">
                <span className="font-serif text-xl text-olive transition-colors duration-300 group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl text-ivory transition-transform duration-300 group-hover:translate-x-1.5">
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
