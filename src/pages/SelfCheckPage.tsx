import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SelfCheck from "@/components/SelfCheck";
import { PageHero, PageShell, Section } from "@/components/site";
import type { Mode } from "@/content/stages";
import { usePageTitle } from "@/hooks/use-page-title";

const SelfCheckPage = () => {
  usePageTitle(
    "AI-readiness self-check",
    "Four questions, two minutes. Find out where you or your team are on the path from curious to AI-native, and what the next step is.",
  );
  const [params] = useSearchParams();
  const [mode, setMode] = useState<Mode>("person");
  useEffect(() => {
    const audience = params.get("for");
    if (audience === "team" || audience === "person") setMode(audience);
  }, [params]);

  return (
    <PageShell>
      <PageHero
        eyebrow="AI-readiness self-check"
        title="Find your stage in two minutes."
        lead="Four questions, for you or for your team. Pick the answer that is true today, not the one you are aiming for. Your answers stay in your browser."
      />
      <Section className="pt-10 md:pt-14">
        <SelfCheck mode={mode} onModeChange={setMode} />
      </Section>
    </PageShell>
  );
};

export default SelfCheckPage;
