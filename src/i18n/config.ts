export const defaultLocale = "en" as const;

export const languageEditions = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    href: "/",
    status: "current",
  },
  {
    code: "kn",
    label: "Kannada",
    nativeLabel: "ಕನ್ನಡ",
    href: "/kn",
    status: "review",
  },
] as const;

export type LocaleCode = (typeof languageEditions)[number]["code"];
