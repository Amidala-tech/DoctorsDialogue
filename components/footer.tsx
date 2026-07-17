import { Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Waveform } from "@/components/waveform";
import { navLinks, site } from "@/constants/site";

const featuredLinks = [
  { label: "Podcast Conversation", href: "/contact?type=podcast" },
  { label: "Solo Doctor Feature", href: "/contact?type=solo-talk" },
  { label: "Daily Live Session", href: "/contact?type=live-session" },
  { label: "Studio / Virtual Session", href: "/contact?type=studio-session" },
  { label: "Magazine Feature", href: "/contact?type=magazine" },
];

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-surface">
      <div className="container-edge grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src="/images/dd-logo-inverted.png"
            alt="Doctor's Dialogue — Conversations That Heal"
            width={612}
            height={261}
            className="h-auto w-48"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            A complete healthcare communication platform bringing doctors and
            communities together.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-gold">
            {site.motto}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-gold">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Get featured">
          <h3 className="eyebrow">Get Featured</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {featuredLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="link-gold inline-flex items-center gap-2.5"
              >
                <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="link-gold inline-flex items-center gap-2.5"
              >
                <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {site.address.company}
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Doctor's Dialogue on YouTube"
              className="flex size-10 items-center justify-center rounded-full border border-line text-sand transition-colors hover:border-gold hover:text-gold-bright"
            >
              <Youtube className="size-4" aria-hidden="true" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Doctor's Dialogue on Facebook"
              className="flex size-10 items-center justify-center rounded-full border border-line text-sand transition-colors hover:border-gold hover:text-gold-bright"
            >
              <Facebook className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="container-edge flex flex-col items-center justify-between gap-4 py-7 text-xs text-olive md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.address.company}. All rights
            reserved. &middot;{" "}
            <Link href="/privacy-policy" className="link-gold">
              Privacy Policy
            </Link>
          </p>
          <Waveform className="h-4 w-28 text-olive" />
          <p className="uppercase tracking-[0.28em]">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
