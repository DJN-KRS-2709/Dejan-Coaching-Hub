import { ArrowRight } from "lucide-react";
import { StageChips, TEXT_LINK } from "@/components/site";
import type { Offer } from "@/content/offers";
import { INTRO_CALL_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

interface Props {
  offer: Offer;
  // Compact cards (home page) leave out the anchor id, so /work-with-me#id stays unique.
  compact?: boolean;
}

// Cards never carry a button. Their only action is a quiet text link to the free intro call.
const OfferCard = ({ offer, compact = false }: Props) => {
  const action = (
    <a href={INTRO_CALL_URL} target="_blank" rel="noopener noreferrer" className={cn(TEXT_LINK, "justify-self-start text-sm")}>
      Talk about this <ArrowRight className="h-4 w-4" />
    </a>
  );

  return (
    <article
      id={compact ? undefined : offer.id}
      className={cn(
        "grid min-w-0 scroll-mt-24 content-start gap-3 rounded-3xl border bg-white p-6 md:p-7",
        offer.featured ? "border-ink" : "border-ink/10",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <StageChips from={offer.stages[0]} to={offer.stages[1]} />
        {offer.tag && (
          <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-ink ring-1 ring-inset ring-ink/10">
            {offer.tag}
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-ink">{offer.title}</h3>
      <p className="text-[0.95rem] leading-relaxed text-ink/70">{offer.body}</p>
      <p className="text-sm text-ink/50">{offer.format}</p>
      <p className="text-xl font-extrabold tabular-nums tracking-tight text-ink">
        {offer.price}
        {offer.priceNote && <span className="ml-2 text-sm font-medium tracking-normal text-ink/50">{offer.priceNote}</span>}
      </p>
      <div className="mt-1 grid">{action}</div>
    </article>
  );
};

export default OfferCard;
