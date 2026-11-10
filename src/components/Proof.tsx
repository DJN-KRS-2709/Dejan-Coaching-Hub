import { Eyebrow } from "@/components/site";
import { BACKGROUND, CLIENT_CASES, TESTIMONIALS, WORKED_WITH } from "@/content/proof";
import type { Case } from "@/content/proof";

export const WorkedWith = () => (
  <div className="grid gap-6 border-y border-ink/10 py-8 md:grid-cols-2 md:gap-10">
    <div>
      <Eyebrow className="mb-3">Worked with</Eyebrow>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {WORKED_WITH.map((name) => (
          <li key={name} className="font-display text-2xl text-ink/80 md:text-3xl">
            {name}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <Eyebrow className="mb-3">Built product at</Eyebrow>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {BACKGROUND.map((name) => (
          <li key={name} className="font-display text-2xl text-ink/80 md:text-3xl">
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

// Testimonials. Placeholders are clearly marked and say what goes there. See src/content/proof.ts.
export const Testimonials = () => {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {TESTIMONIALS.map((t, i) =>
        t.placeholder ? (
          <figure
            key={i}
            className="grid content-start gap-3 rounded-3xl border-2 border-dashed border-[#e2be4a] bg-[#fff4cc] p-6 text-[#4d3b00]"
          >
            <span className="justify-self-start rounded-md bg-[#4d3b00] px-2 py-1 text-[0.68rem] font-bold uppercase tracking-[0.06em] text-[#fff4cc]">
              Testimonial placeholder
            </span>
            <blockquote className="text-[0.95rem]">{t.quote}</blockquote>
            <figcaption className="text-sm">Add the person's name and title, with their written OK.</figcaption>
          </figure>
        ) : (
          <figure key={i} className="grid content-start gap-4 rounded-3xl border border-ink/10 bg-white p-6">
            <blockquote className="text-lg font-semibold leading-snug text-ink">"{t.quote}"</blockquote>
            <figcaption className="text-sm text-ink/60">
              <span className="font-semibold text-ink">{t.name}</span>, {t.role}
            </figcaption>
          </figure>
        ),
      )}
    </div>
  );
};
