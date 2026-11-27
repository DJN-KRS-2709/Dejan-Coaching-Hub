import { Link, useLocation } from "react-router-dom";
import { EN_ONLY, langOf, twinOf } from "@/lib/i18n";
import { FOCUS_RING } from "@/lib/focus";
import { cn } from "@/lib/utils";

// Where the switch goes from the current page: the same page in the other language, with the
// same ?query and #hash. English-only pages (see EN_ONLY) and unknown pages fall back to a page
// that exists.
export function useSwitchTarget() {
  const { pathname, search, hash } = useLocation();
  const lang = langOf(pathname);
  const twin = twinOf(pathname);
  const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  if (twin) return { lang, to: (lang === "de" ? twin.en : twin.de) + search + hash };
  if (EN_ONLY[path]) return { lang, to: EN_ONLY[path] };
  return { lang, to: lang === "de" ? "/" : "/de" };
}

// The visible language switch: one link to the other language, keyboard reachable.
const LangSwitch = ({ className, onClick }: { className?: string; onClick?: () => void }) => {
  const { lang, to } = useSwitchTarget();
  const other = lang === "de" ? "en" : "de";
  return (
    <Link
      to={to}
      onClick={onClick}
      hrefLang={other}
      lang={other}
      aria-label={other === "de" ? "Deutsch: diese Seite auf Deutsch" : "English: this page in English"}
      data-lang-switch={other}
      className={cn(
        FOCUS_RING,
        "inline-flex h-11 min-w-[44px] shrink-0 items-center justify-center rounded-full px-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink",
        className,
      )}
    >
      {other.toUpperCase()}
    </Link>
  );
};

export default LangSwitch;
