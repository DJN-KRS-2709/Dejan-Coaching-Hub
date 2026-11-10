import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SignupForm from "@/components/SignupForm";
import { StageChips } from "@/components/site";
import { buttonVariants } from "@/components/ui/button";
import type { Offer } from "@/content/offers";
import { cn } from "@/lib/utils";

interface Props {
  offer: Offer;
  // Compact cards (home page) link to the full offer instead of showing forms.
  compact?: boolean;
}

const OfferCard = ({ offer, compact = false }: Props) => {
  const { cta } = offer;
  const variant = offer.featured ? "brand" : "outline";

  // Text links are at least 44px tall, so they are easy to tap on a phone.
  const textLink =
    "inline-flex min-h-[44px] items-center gap-1 justify-self-start text-sm font-semibold text-ink hover:text-brand-ink";

  let action;
  if (compact) {
    action = (
      <Link to={`/work-with-me#${offer.id}`} className={textLink}>
        Details <ArrowRight className="h-4 w-4" />
      </Link>
    );
  } else if (cta.kind === "intro") {
    // No booking button per card: the page has one intro call button at the end.
    action = (
      <Link to="/work-with-me#how-it-works" className={textLink}>
        How to start <ArrowRight className="h-4 w-4" />
      </Link>
    );
  } else if (cta.kind === "link") {
    action = (
      <Link to={cta.to} className={cn(buttonVariants({ variant, size: "sm" }), "justify-self-start")}>
        {cta.label}
      </Link>
    );
  } else {
    action = <SignupForm list={cta.list} label="Your email" button={cta.label} />;
  }

  return (
    <article
      id={compact ? undefined : offer.id}
      className={cn(
        "grid min-w-0 scroll-mt-24 content-start gap-3 rounded-3xl bg-white p-6 md:p-7",
        offer.featured ? "border-2 border-brand" : "border border-ink/10",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <StageChips from={offer.stages[0]} to={offer.stages[1]} />
        {offer.tag && (
          <span className="rounded-full bg-brand-bg px-2.5 py-1 text-xs font-semibold text-brand-ink">{offer.tag}</span>
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
