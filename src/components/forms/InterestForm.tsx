"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import type { InterestKind } from "@/lib/forms/interest";

interface InterestFormProps {
  kind: InterestKind;
  contextSlug?: string;
  contextTitle: string;
}

type FormState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function InterestForm({ kind, contextSlug, contextTitle }: InterestFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>({ status: "idle" });

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state.status === "sending") return;

    const form = new FormData(event.currentTarget);
    setState({ status: "sending" });

    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          contextSlug,
          contextTitle,
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          message: form.get("message"),
          company: form.get("company"),
          consent: form.get("consent") === "on",
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string; errors?: string[] }
        | null;

      if (!response.ok || !result?.ok) {
        const message = result?.errors?.[0] || result?.message || "Your interest could not be sent. Please try the contact details shown on this page.";
        setState({ status: "error", message });
        return;
      }

      formRef.current?.reset();
      setState({ status: "success", message: "Thank you. Your interest has been sent to the configured institutional intake endpoint." });
    } catch {
      setState({ status: "error", message: "The submission service could not be reached. Please use the contact details shown on this page." });
    }
  };

  return (
    <form className="interest-form" ref={formRef} onSubmit={submit}>
      <div className="interest-form__grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required maxLength={100} />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={180} />
        </label>
        <label>
          <span>Phone <small>optional</small></span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
        <label className="interest-form__message">
          <span>What would you like to know? <small>optional</small></span>
          <textarea name="message" rows={4} maxLength={1200} />
        </label>
      </div>

      <label className="interest-form__honeypot" aria-hidden="true">
        Company
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="interest-form__consent">
        <input name="consent" type="checkbox" required />
        <span>I agree to send these details for this enquiry. The frontend does not store submissions; when enabled, they are forwarded to the institution&apos;s configured intake endpoint.</span>
      </label>

      <div className="interest-form__footer">
        <button className="button button--dark" type="submit" disabled={state.status === "sending"}>
          {state.status === "sending" ? "Sending…" : "Send interest"}
        </button>
        <div className={`interest-form__status interest-form__status--${state.status}`} aria-live="polite">
          {state.status === "success" || state.status === "error" ? state.message : ""}
        </div>
      </div>
    </form>
  );
}
