export function LanguageControl() {
  return (
    <details className="language-control">
      <summary aria-label="Language options">EN <span aria-hidden="true">/</span> ಕನ್ನಡ</summary>
      <div className="language-control__menu">
        <span className="is-current">
          <strong>English</strong>
          <small>Current edition</small>
        </span>
        <span aria-disabled="true">
          <strong>ಕನ್ನಡ</strong>
          <small>Reviewed edition in preparation</small>
        </span>
      </div>
    </details>
  );
}
