import { Facebook, Instagram, Linkedin, type LucideIcon, Youtube } from "lucide-react";

import { socialLinks } from "@/constants/site";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
};

type SocialIconsProps = {
  /** Background the icons sit on — picks a matching border/hover treatment. */
  surface?: "navy" | "white";
  className?: string;
};

/** Row of circular social links, shared by the footer and the mobile nav drawer. */
export function SocialIcons({ surface = "white", className }: SocialIconsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Doctor's Dialogue on ${link.label}`}
            className={cn(
              "flex size-10 items-center justify-center rounded-xl border transition-colors",
              surface === "navy"
                ? "border-white/20 text-white/70 hover:border-azure hover:text-azure"
                : "border-line text-steel hover:border-accent hover:text-accent",
            )}
          >
            {Icon ? (
              <Icon className="size-4" aria-hidden="true" />
            ) : (
              <span className="text-[0.85rem] font-semibold leading-none" aria-hidden="true">
                X
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
