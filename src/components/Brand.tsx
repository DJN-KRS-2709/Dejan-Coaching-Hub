import { cn } from "@/lib/utils";

// The mark: five rising bars, the path in miniature. Bars 1 to 4 take the text color,
// the top bar is the one electric blue.
export const BrandMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 20"
    className={cn("h-[0.85em] w-auto shrink-0", className)}
    aria-hidden="true"
    focusable="false"
  >
    <rect x="0" y="14" width="4" height="6" rx="0.8" fill="currentColor" />
    <rect x="5" y="10.5" width="4" height="9.5" rx="0.8" fill="currentColor" />
    <rect x="10" y="7" width="4" height="13" rx="0.8" fill="currentColor" />
    <rect x="15" y="3.5" width="4" height="16.5" rx="0.8" fill="currentColor" />
    <rect x="20" y="0" width="4" height="20" rx="0.8" fill="#2B59FF" />
  </svg>
);

export const Wordmark = ({ className }: { className?: string }) => (
  <span className={cn("inline-flex items-center gap-2 font-display tracking-tight", className)}>
    <BrandMark />
    DEJAN KRSTIC
  </span>
);
