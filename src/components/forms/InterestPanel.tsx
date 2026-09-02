import type { InterestKind } from "@/lib/forms/interest";
import { isInterestCaptureConfigured } from "@/lib/forms/interest";
import { contentRepository } from "@/lib/content";
import { InterestForm } from "./InterestForm";

interface InterestPanelProps {
  kind: InterestKind;
  contextSlug?: string;
  contextTitle: string;
  eyebrow?: string;
  title?: string;
}

export async function InterestPanel({
  kind,
  contextSlug,
  contextTitle,
  eyebrow = "Stay connected",
  title = "Tell us what you are interested in.",
}: InterestPanelProps) {
  const contact = await contentRepository.getVisitorContact();
  const enabled = isInterestCaptureConfigured();

  return (
    <section className="interest-panel">
      <div className="shell interest-panel__grid">
        <div className="interest-panel__intro">
          <span>{eyebrow}</span>
          <h2>{title}</h2>
          <p>
            Online intake is deliberately separated from the interface. It only activates when an institutional endpoint is configured on the server.
          </p>
        </div>

        {enabled ? (
          <InterestForm kind={kind} contextSlug={contextSlug} contextTitle={contextTitle} />
        ) : (
          <div className="interest-panel__offline">
            <span>Online intake not connected on this deployment</span>
            <p>Until the institutional intake endpoint is enabled, please contact the Mysuru office directly.</p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phonePrimary.replace(/\s/g, "")}`}>{contact.phonePrimary}</a>
          </div>
        )}
      </div>
    </section>
  );
}
