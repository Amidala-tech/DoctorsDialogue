import { CalendarDays, Clock3, ExternalLink, Play, Youtube } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { latestEpisode } from "@/constants/latest-episode";
import { site } from "@/constants/site";

export function LatestEpisodeSection() {
  return (
    <section id="latest-episode" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-edge">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Latest from Doctor's Dialogue"
            title="The Newest Conversation"
            intro="Watch the newest conversation from our YouTube channel and discover expert-led discussions that inform, educate, and build awareness."
          />
          <Reveal delay={0.15}>
            <Button asChild variant="outline">
              <a href={site.youtubeVideos} target="_blank" rel="noopener noreferrer">
                View More Episodes
                <ExternalLink aria-hidden="true" />
              </a>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <article className="group relative overflow-hidden rounded-3xl border border-line bg-surface shadow-[var(--shadow-card)] transition-all duration-500 hover:border-gold/40 hover:shadow-[var(--shadow-glow)]">
            <div className="grid lg:grid-cols-[1.35fr_1fr]">
              <a
                href={latestEpisode.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Play latest episode: ${latestEpisode.videoTitle}`}
                className="relative block aspect-video overflow-hidden lg:aspect-auto lg:min-h-[26rem]"
              >
                <Image
                  src={latestEpisode.thumbnailUrl}
                  alt="Latest Doctor's Dialogue episode thumbnail"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-transparent"
                />
                <span className="absolute inset-0 m-auto flex size-20 items-center justify-center rounded-full border border-ivory/30 bg-ink/60 text-ivory backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
                </span>
              </a>

              <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
                <span className="inline-flex w-fit items-center rounded-full border border-gold/40 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.26em] text-gold">
                  Latest Episode
                </span>
                <h3 className="font-serif text-3xl leading-snug text-ivory md:text-4xl">
                  {latestEpisode.videoTitle}
                </h3>
                <p className="leading-relaxed">{latestEpisode.summary}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-olive">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="size-3.5 text-gold" aria-hidden="true" />
                    {latestEpisode.publishedDate}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="size-3.5 text-gold" aria-hidden="true" />
                    {latestEpisode.duration}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-4">
                  <Button asChild>
                    <a
                      href={latestEpisode.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play aria-hidden="true" />
                      Play Latest Episode
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                      <Youtube aria-hidden="true" />
                      Watch on YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100"
            />
          </article>
        </Reveal>
      </div>
    </section>
  );
}
