import { cn } from "@/lib/utils";

/** ECG-style pulse line — echoes the brand mark under the logo. */
export function Waveform({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-40 text-accent", className)}
    >
      <path
        d="M0 12h56l5-7 6 14 5-11 4 6 3-2h81"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
