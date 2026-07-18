import { ArrowDown, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Waveform } from "@/components/waveform";
import { site } from "@/constants/site";

const heroStrip = [
  "Doctor Podcasts",
  "Daily 5-Minute Live Health Sessions",
  "Studio & Virtual Video Sessions",
  "Doctor Solo Talks",
  "Monthly Healthcare Magazine",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-navy">
      {/* Soft radial light over the navy gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgb(77_143_209/0.18),transparent_60%)]"
      />
      <div aria-hidden="true" className="texture-grid absolute inset-0 opacity-70" />

      <div className="container-edge relative grid min-h-svh items-center gap-14 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="eyebrow text-azure">
              A Complete Healthcare Communication Platform
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif text-6xl font-medium leading-[0.98] text-white sm:text-7xl xl:text-8xl">
              Conversations
              <br />
              That <span className="italic text-azure">Heal</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <Waveform className="mt-8 text-azure" />
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-mist/85 md:text-lg">
              Doctor&rsquo;s Dialogue is a premium healthcare podcast and
              communication platform where doctors share trusted insights,
              meaningful experiences, and awareness-led conversations with the
              people who need them most.
            </p>
          </Reveal>
          <Reveal delay={0.38}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a href="#latest-episode">
                  <Play aria-hidden="true" />
                  Watch Latest Episode
                </a>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <a href="#platform-overview">
                  Explore The Platform
                  <ArrowDown aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Want to be featured?{" "}
              <Link href="/contact" className="link-accent text-azure">
                Contact us
              </Link>
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="relative">
          <a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Doctor's Dialogue on YouTube"
            className="group relative block overflow-hidden rounded-2xl border border-white/15 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-1.5"
          >
            <Image
              src="/images/dd-hero-editorial.jpg"
              alt="Two guests in conversation at the Doctor's Dialogue podcast studio"
              width={1376}
              height={632}
              priority
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-azure/50 bg-navy/70 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.26em] text-azure backdrop-blur">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-azure opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-azure" />
                  </span>
                  On Air
                </span>
                <p className="mt-3 font-serif text-xl text-white">
                  Where doctors speak, communities listen.
                </p>
              </div>
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-azure">
                <Play className="ml-0.5 size-5 fill-current" aria-hidden="true" />
              </span>
            </div>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-azure transition-transform duration-500 group-hover:scale-x-100"
            />
          </a>
        </Reveal>
      </div>

      {/* Format micro-strip */}
      <div className="relative border-t border-line bg-white">
        <div className="container-edge flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 lg:justify-between">
          {heroStrip.map((item) => (
            <span
              key={item}
              className="text-[0.65rem] uppercase tracking-[0.24em] text-faint"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
