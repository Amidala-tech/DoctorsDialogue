import { Facebook, Youtube } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Waveform } from "@/components/waveform";
import { site } from "@/constants/site";

export function SocialStrip() {
  return (
    <section className="border-t border-line/60 py-16">
      <div className="container-edge flex flex-col items-center justify-between gap-8 md:flex-row">
        <Reveal>
          <p className="max-w-sm text-center font-serif text-2xl text-ivory md:text-left">
            Follow the conversation across our digital platforms.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                <Youtube aria-hidden="true" />
                Visit YouTube
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook aria-hidden="true" />
                Follow on Facebook
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-line/60 py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgb(184_154_94/0.16),transparent_70%)]"
      />
      <div className="container-edge relative flex flex-col items-center text-center">
        <Reveal>
          <Waveform className="mx-auto" />
          <h2 className="mx-auto mt-8 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-6xl">
            Bring Your Voice to the{" "}
            <span className="italic text-gold">Healthcare Movement</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed">
            Join Doctor&rsquo;s Dialogue to share expertise, build trust, and
            connect with audiences through meaningful health communication.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                <Youtube aria-hidden="true" />
                Visit YouTube
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
