import { site } from "@/constants/site";

/**
 * Admin-editable fallback for the "Latest Episode" module.
 *
 * The site is fully static, so the newest video is maintained here.
 * Update these fields whenever a new episode is published — the Home
 * page section renders directly from this object.
 */
export type LatestEpisode = {
  videoTitle: string;
  videoUrl: string;
  /** Path under /public, or a full https URL to a YouTube thumbnail. */
  thumbnailUrl: string;
  publishedDate: string;
  duration: string;
  summary: string;
};

export const latestEpisode: LatestEpisode = {
  videoTitle: "Latest conversation from Doctor's Dialogue on YouTube",
  videoUrl: site.youtube,
  thumbnailUrl: "/images/dd-featured-video-bg.jpg",
  publishedDate: "New episodes weekly",
  duration: "Watch now",
  summary:
    "Expert-led discussions that inform, educate, and build awareness — straight from our studio to your screen.",
};
