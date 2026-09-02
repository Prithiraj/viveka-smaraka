const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export const siteConfig = {
  name: "Viveka Smaraka",
  fullName: "Swami Vivekananda Cultural Youth Centre — Viveka Smaraka",
  url: configuredUrl || "https://vivekasmaraka.org",
  description:
    "A living cultural youth centre in Mysuru connecting the historic legacy of Swami Vivekananda with contemporary learning, character, culture, and service.",
  locality: "Mysuru",
  region: "Karnataka",
  country: "IN",
} as const;

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
