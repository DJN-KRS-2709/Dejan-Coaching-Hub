import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SelfCheck from "@/components/SelfCheck";
import { PageHero, PageShell, Section } from "@/components/site";
import type { Mode } from "@/content/stages";
import { usePageTitle } from "@/hooks/use-page-title";
import { useT } from "@/lib/i18n";

const SelfCheckPage = () => {
  const t = useT();
  usePageTitle(
    t("AI-readiness self-check", "Selbstcheck: Wie weit sind Sie mit KI?"),
    t(
      "Four questions, two minutes. Find out where you or your team are on the path from curious to AI-native, and what the next step is.",
      "Vier Fragen, zwei Minuten. Finden Sie heraus, wo Sie oder Ihr Team auf dem Weg von neugierig bis KI-nativ stehen und was der nächste Schritt ist.",
    ),
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
        eyebrow={t("AI-readiness self-check", "Selbstcheck: Wie weit sind Sie mit KI?")}
        title={t("Find your stage in two minutes.", "Finden Sie Ihre Stufe in zwei Minuten.")}
        lead={t(
          "Four questions, for you or for your team. Pick the answer that is true today, not the one you are aiming for. Your answers stay in your browser.",
          "Vier Fragen, für Sie oder für Ihr Team. Wählen Sie die Antwort, die heute zutrifft, nicht die, die Sie anstreben. Ihre Antworten bleiben in Ihrem Browser.",
        )}
      />
      <Section className="pt-10 md:pt-14">
        <SelfCheck mode={mode} onModeChange={setMode} />
      </Section>
    </PageShell>
  );
};

export default SelfCheckPage;
