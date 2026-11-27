import { Link } from "react-router-dom";
import LegalLayout, { LegalAddress } from "@/components/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/legal";

const Datenschutz = () => (
  <LegalLayout title="Datenschutz" lang="de">
    <section>
      <h2>1. Verantwortlicher</h2>
      <p>Verantwortlicher im Sinne der DSGVO für die Datenverarbeitung auf dieser Website ist:</p>
      <LegalAddress />
      <p>
        E-Mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p>
        Weitere Angaben finden Sie im <Link to="/de/impressum">Impressum</Link>.
      </p>
    </section>

    <section>
      <h2>2. Überblick</h2>
      <p>
        Diese Website setzt keine Cookies ein und nutzt keine Analyse-, Tracking- oder
        Werbedienste. Personenbezogene Daten verarbeite ich nur, soweit dies für den Betrieb
        der Website und die Beantwortung Ihrer Anfragen erforderlich ist.
      </p>
      <p>
        Die Auswertung des Selbstchecks erfolgt vollständig in Ihrem Browser. Ihre Antworten
        werden weder übertragen noch gespeichert.
      </p>
    </section>

    <section>
      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird von Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
        USA, gehostet. Beim Aufruf der Website verarbeitet Vercel automatisch technische
        Daten, die Ihr Browser übermittelt, insbesondere:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seite oder Datei</li>
        <li>Referrer-URL (die zuvor besuchte Seite)</li>
        <li>Browsertyp, Browserversion und Betriebssystem</li>
      </ul>
      <p>
        Die Verarbeitung dieser Daten ist erforderlich, um die Website auszuliefern und ihre
        Sicherheit und Stabilität zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO. Mein berechtigtes Interesse liegt im sicheren und zuverlässigen Betrieb der
        Website.
      </p>
      <p>
        Vercel kann Daten in den USA verarbeiten. Vercel ist nach dem EU-U.S. Data Privacy
        Framework zertifiziert; die Übermittlung erfolgt auf Grundlage des
        Angemessenheitsbeschlusses der Europäischen Kommission (Art. 45 DSGVO). Mit Vercel
        besteht ein Vertrag über die Auftragsverarbeitung gemäß Art. 28 DSGVO. Weitere Informationen:{" "}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung von Vercel
        </a>
        .
      </p>
    </section>

    <section>
      <h2>4. Schriftarten</h2>
      <p>
        Die Schriftarten dieser Website werden lokal von diesem Server geladen. Eine
        Verbindung zu Servern Dritter (zum Beispiel Google) wird dabei nicht hergestellt.
      </p>
    </section>

    <section>
      <h2>5. Kontakt per E-Mail</h2>
      <p>
        Wenn Sie mir eine E-Mail schreiben, verarbeite ich Ihre E-Mail-Adresse, Ihren Namen
        und den Inhalt Ihrer Nachricht, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf einen Vertrag oder auf
        vorvertragliche Maßnahmen gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
        der Beantwortung von Anfragen). Ich lösche die Daten, sobald sie für diesen Zweck
        nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>
    </section>

    <section>
      <h2>6. Terminbuchung über Setmore</h2>
      <p>
        Zur Buchung eines kostenlosen Erstgesprächs verlinkt diese Website auf den
        Online-Terminbuchungsdienst Setmore. Sie werden erst dann zu Setmore weitergeleitet,
        wenn Sie einen Buchungslink anklicken. Dort geben Sie die für die Buchung
        erforderlichen Daten ein (zum Beispiel Name, E-Mail-Adresse, Telefonnummer und
        Wunschtermin). Setmore verarbeitet diese Daten in meinem Auftrag und stellt sie mir
        zur Durchführung des Termins bereit. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
      </p>
      <p>
        Setmore kann Daten außerhalb der EU, insbesondere in den USA, verarbeiten. Weitere
        Informationen:{" "}
        <a href="https://www.setmore.com/privacy" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung von Setmore
        </a>
        .
      </p>
    </section>

    <section>
      <h2>7. Links zu anderen Websites</h2>
      <p>
        Diese Website enthält einfache Links, zum Beispiel zu meinem LinkedIn-Profil. Dabei
        werden keine Inhalte von LinkedIn eingebunden, und solange Sie den Link nicht
        anklicken, werden keine Daten an LinkedIn übertragen. Nach dem Klick gelten die
        Datenschutzbestimmungen des jeweiligen Anbieters.
      </p>
    </section>

    <section>
      <h2>8. Ihre Rechte als betroffene Person</h2>
      <p>Sie haben im Rahmen der gesetzlichen Bestimmungen das Recht auf:</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>
          Widerspruch gegen eine Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          (Art. 21 DSGVO)
        </li>
        <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Um Ihre Rechte auszuüben, genügt eine E-Mail an{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Außerdem haben Sie das Recht, sich
        bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
      </p>
    </section>

    <section>
      <h2>9. SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres
        Browsers.
      </p>
    </section>

    <p className="text-sm text-ink/60">Stand: November 2026</p>
  </LegalLayout>
);

export default Datenschutz;
