import type { Metadata } from "next";
import { EditorialPage } from "@/components/ui/EditorialPage";

export const metadata: Metadata = { title: "Support", description: "Support youth programmes, education, heritage, and learning at Viveka Smaraka." };

export default function SupportPage() {
  return <EditorialPage eyebrow="Support" title="Carry the idea forward." intro="The support experience is intentionally reframed around future impact rather than construction. Payment integration and verified donation instructions belong in the operational phase." sections={[
    { title: "Youth programmes", body: "Enable structured programmes in concentration, character, communication, leadership, culture, service, and life skills." },
    { title: "Education & study", body: "Support the library, study facilities, competitive-exam resources, career readiness, and access for students." },
    { title: "Heritage conservation", body: "Help maintain and interpret the historic environment so future visitors can encounter the Mysuru story with care and context." },
    { title: "CSR & institutions", body: "Create a separate partnership pathway with clear programme sponsorship, reporting expectations, and institutional contact points." },
  ]} cta={{ label: "Understand our impact approach", href: "/impact" }} />;
}
