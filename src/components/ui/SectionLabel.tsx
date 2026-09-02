import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  );
}
