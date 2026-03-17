"use client";

import { BriefcaseBusiness, FileText, Home, Mail } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { LanguageSwitcher } from "@/components/language-switcher";
import { localePath, type Locale } from "@/lib/i18n";

export function SiteHeader({
  locale,
  name,
  labels,
  currentPath
}: {
  locale: Locale;
  name: string;
  labels: {
    nav: {
      home: string;
      resume: string;
      portfolio: string;
      contact: string;
    };
    switcher: {
      es: string;
      en: string;
    };
  };
  currentPath: "" | "/resume" | "/portfolio";
}) {
  const currentHref = currentPath ? localePath(locale, currentPath) : localePath(locale);
  const navItems = [
    { href: localePath(locale), label: labels.nav.home, icon: Home },
    { href: localePath(locale, "/resume"), label: labels.nav.resume, icon: FileText },
    { href: localePath(locale, "/portfolio"), label: labels.nav.portfolio, icon: BriefcaseBusiness },
    { href: `${localePath(locale)}#contact`, label: labels.nav.contact, icon: Mail }
  ];

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[color:var(--line)] bg-[color:rgba(232,239,234,0.72)] backdrop-blur-md">
        <Container>
          <div className="flex items-center justify-between gap-4 py-4">
            <Link
              href={localePath(locale)}
              className="min-w-0 text-xs uppercase tracking-[0.22em] text-[color:var(--accent-deep)] sm:text-sm sm:tracking-[0.4em]"
            >
              <span className="block truncate">{name}</span>
            </Link>

            <div className="hidden items-center gap-3 lg:flex">
              <nav className="flex items-center gap-6 text-sm text-[color:var(--muted)]">
                {navItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-1 transition hover:bg-[color:rgba(49,95,74,0.08)] hover:text-[color:var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <LanguageSwitcher locale={locale} path={currentPath} labels={labels.switcher} />
              <Link
                href={navItems[3].href}
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent-deep)] px-4 py-2 text-sm font-medium !text-white transition hover:bg-[color:var(--accent)]"
              >
                {labels.nav.contact}
              </Link>
            </div>

            <div className="lg:hidden">
              <LanguageSwitcher locale={locale} path={currentPath} labels={labels.switcher} />
            </div>
          </div>
        </Container>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 lg:hidden">
        <div className="mx-auto max-w-md rounded-[1.75rem] border border-[color:rgba(38,77,102,0.14)] bg-[linear-gradient(180deg,rgba(244,250,252,0.96),rgba(229,240,246,0.94))] p-2 shadow-[0_20px_50px_rgba(16,33,43,0.18)] backdrop-blur-xl">
          <nav className="grid grid-cols-4 gap-2">
            {navItems.map((item) => {
              const active = item.href === currentHref || (item.label === labels.nav.contact && currentPath === "");
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-[4.5rem] flex-col items-center justify-center rounded-[1.1rem] px-2 py-2 text-center text-[11px] transition ${
                    active
                      ? "bg-[color:rgba(15,47,64,0.94)] !text-white shadow-[0_14px_30px_rgba(24,78,103,0.22)]"
                      : "bg-[color:rgba(255,255,255,0.66)] text-[color:var(--muted)]"
                  }`}
                >
                  <Icon className="mb-1.5 h-4 w-4" />
                  <span className="leading-4">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
