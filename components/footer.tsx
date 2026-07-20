import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SocialIcons } from "@/components/social-icons";
import { Waveform } from "@/components/waveform";
import { navLinks, site, socialLinks } from "@/constants/site";

const featuredLinks = [
  { label: "Podcast Conversation", href: "/contact?type=podcast" },
  { label: "Solo Doctor Feature", href: "/contact?type=solo-talk" },
  { label: "Daily Live Session", href: "/contact?type=live-session" },
  { label: "Studio / Virtual Session", href: "/contact?type=studio-session" },
  { label: "Magazine Feature", href: "/contact?type=magazine" },
];

export function Footer() {
  return (
    <footer className="bg-deep text-white/70">
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
          <p className="eyebrow mt-4 text-[0.7rem] text-azure">{site.motto}</p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="eyebrow text-azure">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-accent hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Get featured">
          <h3 className="eyebrow text-azure">Get Featured</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {featuredLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-accent hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow text-azure">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="link-accent inline-flex items-center gap-2.5 hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-azure" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="link-accent inline-flex items-center gap-2.5 hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-azure" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-azure" aria-hidden="true" />
              <span>
                {site.address.company}
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
          </ul>
          <SocialIcons surface="navy" className="mt-6" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-edge flex flex-col items-center justify-between gap-4 py-7 text-xs text-white/45 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.address.company}. All rights
            reserved. &middot;{" "}
            <Link href="/privacy-policy" className="link-accent hover:text-white">
              Privacy Policy
            </Link>
          </p>
          <Waveform className="h-4 w-28 text-azure/60" />
          <p className="uppercase tracking-[0.28em]">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
