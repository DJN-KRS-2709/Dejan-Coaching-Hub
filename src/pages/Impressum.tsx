import LegalLayout, { LegalAddress } from "@/components/LegalLayout";
import { LEGAL } from "@/lib/legal";

const Impressum = () => (
  <LegalLayout title="Impressum">
    <section>
      <h2>Angaben gemäß § 5 DDG</h2>
      <LegalAddress />
    </section>

    <section>
      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
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

export default Impressum;
