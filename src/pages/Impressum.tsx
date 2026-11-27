import LegalLayout, { LegalAddress } from "@/components/LegalLayout";
import { CONTACT_EMAIL, LEGAL } from "@/lib/legal";
import { useLang } from "@/lib/i18n";

// The Impressum is German on both language versions (/impressum and /de/impressum).
const Impressum = () => {
  const en = useLang() === "en";
  return (
  <LegalLayout title="Impressum" lang="de">
    {en && (
      <p lang="en" className="text-ink/80">
        Legal notice under German law. The details below are in German.
      </p>
    )}
    <section>
      <h2>Angaben gemäß § 5 DDG</h2>
      <LegalAddress />
    </section>

    <section>
      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </section>

    {LEGAL.vatId && (
      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          <br />
          {LEGAL.vatId}
        </p>
      </section>
    )}

    <section>
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <LegalAddress />
    </section>

    <section>
      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </section>
  </LegalLayout>
  );
};

export default Impressum;
