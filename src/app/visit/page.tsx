import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { facilities } from "@/content/site";
import { visitorContact, visitorFacts } from "@/content/visitor";

export const metadata: Metadata = {
  title: "Visit",
  description: "Plan a visit to Viveka Smaraka in Mysuru with verified location, facility, and contact information.",
};

export default function VisitPage() {
  return (
    <main id="main-content" className="visit-page">
      <section className="visit-hero shell">
        <SectionLabel>Visit Viveka Smaraka</SectionLabel>
        <div className="visit-hero__grid">
          <h1>Arrive with time<br /><em>to look, learn, and be still.</em></h1>
          <p>Visitor information is being published progressively. Verified facts are separated from details still awaiting confirmation so planning information never looks more certain than it is.</p>
        </div>
      </section>

      <section className="visitor-facts shell" aria-label="Visitor information status">
        {visitorFacts.map((fact, index) => (
          <article key={fact.label} className={`visitor-fact visitor-fact--${fact.verification}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p>{fact.label}</p>
              {fact.href ? <a href={fact.href}>{fact.value}</a> : <strong>{fact.value}</strong>}
              <small>{fact.detail}</small>
            </div>
            <mark>{fact.verification === "verified" ? "Verified" : "Pending"}</mark>
          </article>
        ))}
      </section>

      <section className="visit-spaces" id="spaces">
        <div className="shell">
          <div className="visit-spaces__heading">
            <SectionLabel>Spaces</SectionLabel>
            <h2>A visit moves between memory, interpretation, study, gathering, and stillness.</h2>
          </div>
          <div className="visit-spaces__grid">
            {facilities.map((facility) => (
              <article key={facility.slug}>
                <span>{facility.index}</span>
                <small>{facility.role}</small>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="visit-contact shell">
        <div>
          <SectionLabel>Before travelling</SectionLabel>
          <h2>Confirm what can change.</h2>
          <p>{visitorContact.note}</p>
        </div>
        <address>
          <span>{visitorContact.label}</span>
          <strong>{visitorContact.address}</strong>
          <a href={`tel:${visitorContact.phonePrimary.replace(/\s/g, "")}`}>{visitorContact.phonePrimary}</a>
          <a href={`tel:${visitorContact.phoneSecondary.replace(/\s/g, "")}`}>{visitorContact.phoneSecondary}</a>
          <a href={`tel:${visitorContact.mobile.replace(/\s/g, "")}`}>{visitorContact.mobile}</a>
          <a href={`mailto:${visitorContact.email}`}>{visitorContact.email}</a>
        </address>
      </section>

      <section className="visit-next">
        <div className="shell">
          <span>Continue</span>
          <h2>Understand the place before you arrive.</h2>
          <div>
            <Link className="button button--warm" href="/heritage">Explore the heritage <ArrowIcon /></Link>
            <Link className="button button--ghost" href="/#experience">Explore the campus</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
