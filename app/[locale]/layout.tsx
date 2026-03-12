import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return params.then(({ locale }) => {
    if (!isLocale(locale)) {
      notFound();
    }

    return <>{children}</>;
  });
}
