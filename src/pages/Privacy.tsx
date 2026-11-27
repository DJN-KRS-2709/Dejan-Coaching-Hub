import { Link } from "react-router-dom";
import LegalLayout, { LegalAddress } from "@/components/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/legal";

// English translation of the German Datenschutz page (src/pages/Datenschutz.tsx), section by
// section. DRAFT for Dejan's legal check. Keep both pages in step when one changes.
const Privacy = () => (
  <LegalLayout title="Privacy notice" lang="en">
    <section>
      <h2>1. Controller</h2>
      <p>The controller responsible for data processing on this website is:</p>
      <LegalAddress />
      <p>
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p>
        You will find more details in the <Link to="/impressum">Impressum</Link> (legal notice).
      </p>
    </section>

    <section>
      <h2>2. Overview</h2>
      <p>
        This website sets no cookies and uses no analytics, tracking or advertising services.
        Personal data is processed only to the extent needed to run the website and to answer
        your requests.
      </p>
      <p>
        The self-check is evaluated entirely in your browser. Your answers are not sent and not
        stored.
      </p>
    </section>

    <section>
      <h2>3. Hosting and server log files</h2>
      <p>
        This website is hosted by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
        USA. When you open the website, Vercel automatically processes technical data that your
        browser sends, in particular:
      </p>
      <ul>
        <li>IP address</li>
        <li>Date and time of access</li>
        <li>Page or file requested</li>
        <li>Referrer URL (the page you visited before)</li>
        <li>Browser type, browser version and operating system</li>
      </ul>
      <p>
        This data is needed to deliver the website and to keep it secure and stable. The legal
        basis is Art. 6(1)(f) GDPR; my legitimate interest is the secure and reliable operation of
        the website.
      </p>
      <p>
        Vercel may process data in the USA. Vercel is certified under the EU-U.S. Data Privacy
        Framework; transfers are based on the European Commission's adequacy decision (Art. 45
        GDPR). A data processing agreement under Art. 28 GDPR is in place with Vercel. More
        information:{" "}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          Vercel's privacy policy
        </a>
        .
      </p>
    </section>

    <section>
      <h2>4. Fonts</h2>
      <p>
        The fonts used on this website are loaded locally from this server. No connection is made
        to third-party servers (for example Google).
      </p>
    </section>

    <section>
      <h2>5. Contact by email</h2>
      <p>
        If you write me an email, I process your email address, your name and the content of your
        message to answer your request. The legal basis is Art. 6(1)(b) GDPR if your request
        aims at a contract or pre-contractual measures, and otherwise Art. 6(1)(f) GDPR
        (legitimate interest in answering requests). I delete the data as soon as it is no longer
        needed for this purpose and no legal retention obligations apply.
      </p>
    </section>

    <section>
      <h2>6. Booking through Setmore</h2>
      <p>
        To book a free intro call, this website links to the online booking service Setmore. You
        are only taken to Setmore when you click a booking link. There you enter the data needed
        for the booking (for example name, email address, phone number and preferred time).
        Setmore processes this data on my behalf and makes it available to me so that the
        appointment can take place. The legal basis is Art. 6(1)(b) GDPR.
      </p>
      <p>
        Setmore may process data outside the EU, in particular in the USA. More information:{" "}
        <a href="https://www.setmore.com/privacy" target="_blank" rel="noopener noreferrer">
          Setmore's privacy policy
        </a>
        .
      </p>
    </section>

    <section>
      <h2>7. Links to other websites</h2>
      <p>
        This website contains plain links, for example to my LinkedIn profile. No LinkedIn
        content is embedded and no data is sent to LinkedIn unless you click the link. After the
        click, the privacy terms of that provider apply.
      </p>
    </section>

    <section>
      <h2>8. Your rights</h2>
      <p>Within the limits of the law, you have the right to:</p>
      <ul>
        <li>Access to your stored data (Art. 15 GDPR)</li>
        <li>Correction of inaccurate data (Art. 16 GDPR)</li>
        <li>Erasure (Art. 17 GDPR)</li>
        <li>Restriction of processing (Art. 18 GDPR)</li>
        <li>Data portability (Art. 20 GDPR)</li>
        <li>Objection to processing based on Art. 6(1)(f) GDPR (Art. 21 GDPR)</li>
        <li>Withdrawal of consent you have given, with effect for the future (Art. 7(3) GDPR)</li>
      </ul>
      <p>
        To use your rights, an email to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> is
        enough. You also have the right to lodge a complaint with a data protection supervisory
        authority (Art. 77 GDPR).
      </p>
    </section>

    <section>
      <h2>9. SSL and TLS encryption</h2>
      <p>
        For security reasons, this website uses SSL or TLS encryption. You can recognize an
        encrypted connection by "https://" in your browser's address bar.
      </p>
    </section>

    <p className="text-sm text-ink/60">Last updated: November 2026</p>
  </LegalLayout>
);

export default Privacy;
