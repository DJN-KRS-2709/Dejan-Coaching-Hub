import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { INTRO_CALL_LABEL, INTRO_CALL_LABEL_DE, INTRO_CALL_URL } from "@/lib/links";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Props = VariantProps<typeof buttonVariants> & {
  className?: string;
  label?: string;
  onClick?: () => void;
};

// The one booking button on the site: a free 20-minute intro call on Setmore.
// Hierarchy: filled blue (brand) only in a page's hero and closing band, navOutline only in the nav.
const IntroCallLink = ({ variant = "brand", size, className, label, onClick }: Props) => {
  const lang = useLang();
  return (
  <a
    href={INTRO_CALL_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    data-cta={variant ?? "brand"}
    className={cn(buttonVariants({ variant, size }), className)}
  >
    {label ?? (lang === "de" ? INTRO_CALL_LABEL_DE : INTRO_CALL_LABEL)}
  </a>
  );
};

export default IntroCallLink;
