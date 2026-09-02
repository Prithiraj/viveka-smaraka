export type InterestKind = "programme" | "event" | "general";

export interface InterestSubmission {
  kind: InterestKind;
  contextSlug?: string;
  contextTitle: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  consent: true;
}

export type InterestValidationResult =
  | { ok: true; spam: true }
  | { ok: true; spam: false; data: InterestSubmission }
  | { ok: false; errors: string[] };

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function isInterestCaptureConfigured() {
  return Boolean(process.env.INTEREST_WEBHOOK_URL?.trim());
}

export function validateInterestSubmission(input: unknown): InterestValidationResult {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: ["Invalid submission."] };
  }

  const payload = input as Record<string, unknown>;
  if (stringValue(payload.company)) return { ok: true, spam: true };

  const kind = stringValue(payload.kind) as InterestKind;
  const contextSlug = stringValue(payload.contextSlug);
  const contextTitle = stringValue(payload.contextTitle);
  const name = stringValue(payload.name);
  const email = stringValue(payload.email).toLowerCase();
  const phone = stringValue(payload.phone);
  const message = stringValue(payload.message);
  const consent = payload.consent === true;
  const errors: string[] = [];

  if (!["programme", "event", "general"].includes(kind)) errors.push("Unknown interest type.");
  if (contextTitle.length < 2 || contextTitle.length > 160) errors.push("Invalid context.");
  if (name.length < 2 || name.length > 100) errors.push("Please enter your name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 180) errors.push("Please enter a valid email address.");
  if (phone.length > 40) errors.push("Phone number is too long.");
  if (message.length > 1200) errors.push("Message must be 1,200 characters or fewer.");
  if (!consent) errors.push("Consent is required before sending your details.");

  if (errors.length) return { ok: false, errors };

  return {
    ok: true,
    spam: false,
    data: {
      kind,
      ...(contextSlug ? { contextSlug } : {}),
      contextTitle,
      name,
      email,
      ...(phone ? { phone } : {}),
      ...(message ? { message } : {}),
      consent: true,
    },
  };
}
