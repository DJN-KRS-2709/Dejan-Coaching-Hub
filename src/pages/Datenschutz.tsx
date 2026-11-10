import { Link } from "react-router-dom";
import LegalLayout, { LegalAddress } from "@/components/LegalLayout";
import { LEGAL } from "@/lib/legal";

const Datenschutz = () => (
  <LegalLayout title="Datenschutz">
    <section>
      <h2>1. Verantwortlicher</h2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
      <LegalAddress />
      <p>
        E-Mail: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
      </p>
      <p>
        Weitere Angaben finden Sie im <Link to="/impressum">Impressum</Link>.
      </p>
    </section>

    <section>
      <h2>2. Überblick</h2>
      <p>
        Diese Website setzt keine Cookies und verwendet keine Analyse-, Tracking- oder
        Werbedienste. Personenbezogene Daten werden nur in dem Umfang verarbeitet, der für
        den Betrieb der Website und die Beantwortung Ihrer Anfragen erforderlich ist.
      </p>
      <p>
        Der Selbstcheck wird vollständig in Ihrem Browser ausgewertet. Ihre Antworten werden
        nicht übertragen und nicht gespeichert, solange Sie die Auswertung nicht per E-Mail
        anfordern (siehe Abschnitt 7).
      </p>
    </section>

    <section>
      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird bei Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
        USA, gehostet. Beim Aufruf der Website verarbeitet Vercel automatisch technische
        Daten, die Ihr Browser übermittelt, insbesondere:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seite bzw. Datei</li>
        <li>Referrer-URL (die zuvor besuchte Seite)</li>
        <li>Browsertyp, Browserversion und Betriebssystem</li>
      </ul>
      <p>
        Diese Daten sind erforderlich, um die Website auszuliefern sowie ihre Sicherheit und
        Stabilität zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; mein
        berechtigtes Interesse liegt im sicheren und zuverlässigen Betrieb der Website.
      </p>
      <p>
        Vercel kann Daten in den USA verarbeiten. Vercel ist nach dem EU-U.S. Data Privacy
        Framework zertifiziert; die Übermittlung erfolgt auf Grundlage des
        Angemessenheitsbeschlusses der EU-Kommission (Art. 45 DSGVO). Mit Vercel besteht ein
        Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Weitere Informationen:{" "}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung von Vercel
        </a>
        .
      </p>
    </section>

    <section>
      <h2>4. Schriftarten</h2>
      <p>
        Die auf dieser Website verwendeten Schriftarten werden lokal von diesem Server
        geladen. Es wird dabei keine Verbindung zu Servern Dritter (zum Beispiel Google)
        hergestellt.
      </p>
    </section>

    <section>
      <h2>5. Kontakt per E-Mail</h2>
      <p>
        Wenn Sie mir eine E-Mail schreiben, verarbeite ich Ihre E-Mail-Adresse, Ihren Namen
        und den Inhalt Ihrer Nachricht, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage auf einen Vertrag oder vorvertragliche
        Maßnahmen zielt, und im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
        der Beantwortung von Anfragen). Ich lösche die Daten, sobald sie für diesen Zweck
        nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>
    </section>

    <section>
      <h2>6. Terminbuchung über Setmore</h2>
      <p>
        Für die Buchung eines kostenlosen Kennenlerngesprächs verlinkt diese Website auf den
        Online-Terminbuchungsdienst Setmore. Erst wenn Sie einen Buchungslink anklicken,
        werden Sie zu Setmore weitergeleitet. Dort geben Sie die für die Buchung nötigen
        Daten ein (zum Beispiel Name, E-Mail-Adresse, Telefonnummer und gewünschter Termin).
        Diese Daten werden von Setmore in meinem Auftrag verarbeitet und mir zur Durchführung
        des Termins bereitgestellt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
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
      <h2>7. Newsletter, Warteliste und Masterclass</h2>
      <p>
        Wenn Sie sich für meinen Newsletter, die Warteliste des Kurses, die Termine der
        Masterclass oder die Auswertung des Selbstchecks eintragen, verarbeite ich Ihre
        E-Mail-Adresse und die Angabe, wofür Sie sich eingetragen haben. Bei der Auswertung des
        Selbstchecks speichere ich zusätzlich Ihr Ergebnis (die Stufe und ob Sie den Check für
        sich oder für Ihr Team gemacht haben). Ich nutze diese Daten nur, um Ihnen die
        gewünschten E-Mails zu senden.
      </p>
      <p>
        Nach der Anmeldung erhalten Sie eine E-Mail, in der Sie die Anmeldung bestätigen
        (Double-Opt-in). Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        Sie können sie jederzeit widerrufen, über den Abmeldelink in jeder E-Mail oder per
        E-Mail an mich. Nach der Abmeldung lösche ich Ihre Daten.
      </p>
      {/* PLATZHALTER: vor dem Start den E-Mail-Dienst eintragen (Name, Anschrift, Ort der
          Verarbeitung, Vertrag zur Auftragsverarbeitung). Siehe src/lib/signup.ts. */}
      <p>
        Für den Versand nutze ich den E-Mail-Dienst [Platzhalter: Anbieter wird vor dem Start
        ergänzt], mit dem ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO besteht.
      </p>
    </section>

    <section>
      <h2>8. Links zu anderen Websites</h2>
      <p>
        Diese Website enthält einfache Links, zum Beispiel zu meinem LinkedIn-Profil. Dabei
        werden keine Inhalte von LinkedIn eingebunden und keine Daten an LinkedIn übertragen,
        solange Sie den Link nicht anklicken. Nach dem Klick gelten die Datenschutzhinweise
        des jeweiligen Anbieters.
      </p>
    </section>

    <section>
      <h2>9. Ihre Rechte</h2>
      <p>Sie haben im Rahmen der gesetzlichen Vorgaben das Recht auf:</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>
          Widerspruch gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit. f DSGVO beruhen
          (Art. 21 DSGVO)
        </li>
        <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte genügt eine E-Mail an{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>. Außerdem haben Sie das Recht, sich
        bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
      </p>
    </section>

    <section>
      <h2>10. SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres
        Browsers.
      </p>
    </section>

    <p className="text-sm text-ink/50">Stand: November 2026</p>
  </LegalLayout>
);

export default Datenschutz;
