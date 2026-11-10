import { Link } from "react-router-dom";
import IntroCallLink from "@/components/IntroCallLink";
import { CaseCard, WorkedWith } from "@/components/Proof";
import { ClosingLine, Eyebrow, PageShell, Section, SectionHead } from "@/components/site";
import { buttonVariants } from "@/components/ui/button";
import { BACKGROUND_CASES } from "@/content/proof";
import { usePageTitle } from "@/hooks/use-page-title";
import { YEARS } from "@/lib/links";

const CAREER = [
  { org: "Dejan Krstic", role: "Founder, AI product leadership coach, from 2027", now: true },
  { org: "Product School", role: "Ex-CPO, 2026. Instructor and speaker before that." },
  { org: "Spotify", role: "Group Product Manager, Creator and Enterprise Payouts, until 2026" },
  { org: "SoundCloud", role: "Lead Product Manager, Insights and Royalties" },
  { org: "BMG", role: "Director of Business Analysis" },
  { org: "Universal Music", role: "Built the infrastructure and products that ship audio to streaming services." },
];

const BMG = {
  who: "BMG · Director of Business Analysis",
  title: "Royalty systems",
  body: "Led the teams behind royalty systems and technical services, connecting technology, rights and finance in one of the most complex value chains in music.",
};

const About = () => {
  usePageTitle(
    "About",
    `Dejan Krstic: ${YEARS} years building products at Spotify, SoundCloud and BMG, Ex-CPO of Product School. Founder, AI product leadership coach.`,
  );

  return (
    <PageShell>
      <section className="pb-12 pt-12 md:pb-20 md:pt-20">
        <div className="container px-4 md:px-6">
          {/* Phone: title, portrait, story. Desktop: title and story left, portrait right. */}
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-x-16 lg:gap-y-6">
            <div className="animate-fade-in lg:col-start-1 lg:row-start-1">
              <Eyebrow>About</Eyebrow>
              <h1 className="mt-4 font-display text-[clamp(2.75rem,9vw,6rem)]">Hi, I'm Dejan.</h1>
            </div>
            <div className="mx-auto w-full max-w-[480px] overflow-hidden rounded-3xl border border-ink/10 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <img
                src="/images/dejan-portrait-960.jpg"
                srcSet="/images/dejan-portrait-480.jpg 480w, /images/dejan-portrait-960.jpg 960w"
                sizes="(min-width: 480px) 480px, 100vw"
                width={960}
                height={1200}
                alt="Portrait of Dejan Krstic, smiling, in a black t-shirt"
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
            <div className="grid max-w-xl gap-5 text-base leading-relaxed text-ink/75 md:text-lg lg:col-start-1 lg:row-start-2">
              <p className="text-xl font-semibold leading-snug text-ink md:text-2xl">
                I call myself a product management dinosaur.
              </p>
              <p>
                When I started, I wrote thirty-page specs and then waited six months to find out whether anyone had
                built what I meant. They never had.
              </p>
              <p>
                Today you can test an idea in an afternoon, and anyone in the room can do it. That is the most exciting
                thing that has happened to product work in my career, and most people are watching it instead of doing
                it.
              </p>
              <p>
                I've spent {YEARS} years building products in music and tech, and taught, coached and spoke on the side
                for most of them. Now it is my whole job: helping people and product teams get from watching to
                building.
              </p>
              <p>I teach in German and English, and I am at home in Croatian, Serbian and Bosnian.</p>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionHead eyebrow="Career" title={`${YEARS} years of building products.`} />
            <ol className="border-l-2 border-ink">
              {CAREER.map((c) => (
                <li key={c.org} className="relative pb-5 pl-5">
                  <span
                    className={`absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 ${
                      c.now ? "border-ink bg-ink" : "border-ink bg-canvas"
                    }`}
                    aria-hidden="true"
                  />
                  <p className="font-semibold text-ink">{c.org}</p>
                  <p className="text-sm text-ink/60">{c.role}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHead eyebrow="What I built" title="The work behind the advice." />
            <div className="grid gap-4">
              {[...BACKGROUND_CASES, BMG].map((c) => (
                <CaseCard key={c.who} c={c} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <WorkedWith />
      </Section>

      <Section className="border-t-0 pt-0 md:pt-0">
        <div className="max-w-3xl">
          <ClosingLine>Start where you are.</ClosingLine>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <IntroCallLink size="lg" />
            <Link to="/self-check" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Find your stage
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default About;
