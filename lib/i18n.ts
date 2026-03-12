import { notFound } from "next/navigation";

export const locales = ["es", "en"] as const;

function resolveBasePath() {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }

  if (process.env.GITHUB_ACTIONS === "true") {
    const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "web_resume";
    return `/${repoName}`;
  }

  return "";
}

export const publicBasePath = resolveBasePath();

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = "") {
  return `${publicBasePath}/${locale}${path}`;
}

export function requireLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}

export function withBasePath(path: string) {
  return `${publicBasePath}${path}`;
}
