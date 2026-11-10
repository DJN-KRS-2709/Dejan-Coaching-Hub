import { Eyebrow } from "@/components/site";
import { BACKGROUND, CLIENT_CASES, TESTIMONIALS, WORKED_WITH } from "@/content/proof";
import type { Case } from "@/content/proof";

export const WorkedWith = () => (
  <div className="grid gap-6 border-y border-ink/10 py-8 md:grid-cols-2 md:gap-10">
    <div>
      <Eyebrow className="mb-3">Worked with</Eyebrow>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {WORKED_WITH.map((name) => (
          <li key={name} className="text-xl font-semibold tracking-tight text-ink/80 md:text-2xl">
            {name}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <Eyebrow className="mb-3">Built product at</Eyebrow>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {BACKGROUND.map((name) => (
          <li key={name} className="text-xl font-semibold tracking-tight text-ink/80 md:text-2xl">
            {name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const CaseCard = ({ c }: { c: Case }) => (
  <article className="grid min-w-0 content-start gap-2 rounded-3xl border border-ink/10 bg-white p-6 md:p-7">
    <p className="text-xs font-bold uppercase tracking-[0.07em] text-ink/50">{c.who}</p>
    <h3 className="text-lg font-semibold tracking-tight text-ink">{c.title}</h3>
    <p className="text-[0.95rem] leading-relaxed text-ink/70">{c.body}</p>
  </article>
);

export const ClientCases = () => (
  <div className="grid gap-4 md:grid-cols-3">
    {CLIENT_CASES.map((c) => (
      <CaseCard key={c.who} c={c} />
    ))}
  </div>
);

// Testimonials: only real quotes are shown. The placeholders in src/content/proof.ts stay
// hidden until they are replaced with real quotes (name, title and written OK).
export const REAL_TESTIMONIALS = TESTIMONIALS.filter((t) => !t.placeholder);

export const Testimonials = () => {
  if (REAL_TESTIMONIALS.length === 0) return null;
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {REAL_TESTIMONIALS.map((t) => (
        <figure key={t.name} className="grid content-start gap-4 rounded-3xl border border-ink/10 bg-white p-6">
          <blockquote className="text-lg font-semibold leading-snug text-ink">"{t.quote}"</blockquote>
          <figcaption className="text-sm text-ink/60">
            <span className="font-semibold text-ink">{t.name}</span>, {t.role}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
