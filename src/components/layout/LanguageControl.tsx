import Link from "next/link";
import { languageEditions } from "@/i18n/config";

export function LanguageControl() {
  const english = languageEditions.find((edition) => edition.code === "en")!;
  const kannada = languageEditions.find((edition) => edition.code === "kn")!;

  return (
    <details className="language-control">
      <summary aria-label="Language options">EN <span aria-hidden="true">/</span> ಕನ್ನಡ</summary>
      <div className="language-control__menu">
        <span className="is-current">
          <strong>{english.nativeLabel}</strong>
          <small>Current edition</small>
        </span>
        <Link href={kannada.href}>
          <strong>{kannada.nativeLabel}</strong>
          <small>Reviewed edition in preparation</small>
        </Link>
      </div>
    </details>
  );
}
