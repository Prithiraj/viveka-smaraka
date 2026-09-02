import { NextResponse } from "next/server";
import { isInterestCaptureConfigured, validateInterestSubmission } from "@/lib/forms/interest";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    { enabled: isInterestCaptureConfigured() },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: ["Invalid JSON payload."] }, { status: 400 });
  }

  const validation = validateInterestSubmission(payload);
  if (!validation.ok) {
    return NextResponse.json({ ok: false, errors: validation.errors }, { status: 400 });
  }

  if (validation.spam) {
    return NextResponse.json({ ok: true }, { status: 202 });
  }

  const endpoint = process.env.INTEREST_WEBHOOK_URL?.trim();
  if (!endpoint) {
    return NextResponse.json(
      { ok: false, code: "integration_not_configured", message: "Online submissions are not connected on this deployment." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const url = new URL(endpoint);
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error("Unsupported webhook protocol");

    const headers: HeadersInit = { "Content-Type": "application/json" };
    const token = process.env.INTEREST_WEBHOOK_TOKEN?.trim();
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(url, {
      method: "POST",
      headers,
      cache: "no-store",
      body: JSON.stringify({
        ...validation.data,
        submittedAt: new Date().toISOString(),
        source: "viveka-smaraka-web",
        sourcePage: request.headers.get("referer") || undefined,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "The institutional intake endpoint did not accept the submission." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json(
      { ok: false, message: "The institutional intake endpoint could not be reached." },
      { status: 502 },
    );
  }
}
