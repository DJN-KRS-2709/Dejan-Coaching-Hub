import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LEGAL } from "@/lib/legal";

interface LegalLayoutProps {
  title: string;
  children: ReactNode;
}

const LegalLayout = ({ title, children }: LegalLayoutProps) => (
  <div className="flex min-h-screen flex-col bg-canvas text-ink">
    <Navbar />
    <main className="flex-1 pt-16">
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <article lang="de" className="max-w-3xl">
            <h1 className="font-display text-[clamp(2.75rem,8vw,5rem)] text-ink mb-10">{title}</h1>
            <div className="space-y-8 text-base text-ink/70 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mb-3 [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mb-2 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-ink [&_p+p]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mt-3">
              {children}
            </div>
          </article>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export const LegalAddress = () => (
  <p>
    {LEGAL.name}
    <br />
    {LEGAL.street}
    <br />
    {LEGAL.city}
    <br />
    {LEGAL.country}
  </p>
);

export default LegalLayout;
