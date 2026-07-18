import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="eyebrow text-accent">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-ink md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-steel md:text-lg">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
