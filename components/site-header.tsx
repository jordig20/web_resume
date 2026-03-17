"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: localePath(locale), label: labels.nav.home },
    { href: localePath(locale, "/resume"), label: labels.nav.resume },
    { href: localePath(locale, "/portfolio"), label: labels.nav.portfolio }
  ];
  const contactHref = `${localePath(locale)}#contact`;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--line)] bg-[color:rgba(232,239,234,0.72)] backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <Link
            href={localePath(locale)}
            className="min-w-0 text-xs uppercase tracking-[0.22em] text-[color:var(--accent-deep)] sm:text-sm sm:tracking-[0.4em]"
            onClick={closeMenu}
          >
            <span className="block truncate">{name}</span>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <nav className="flex items-center gap-6 text-sm text-[color:var(--muted)]">
              {navItems.map((item) => (
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
              href={contactHref}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent-deep)] px-4 py-2 text-sm font-medium !text-white transition hover:bg-[color:var(--accent)]"
            >
              {labels.nav.contact}
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-[color:rgba(24,78,103,0.18)] bg-[color:rgba(15,47,64,0.92)] text-white shadow-[0_14px_32px_rgba(24,78,103,0.18)] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(7,17,24,0.44)] transition lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 w-[min(22rem,88vw)] border-l border-[color:rgba(38,77,102,0.18)] bg-[linear-gradient(180deg,rgba(245,250,252,0.98),rgba(232,241,246,0.97))] p-5 shadow-[0_30px_90px_rgba(16,33,43,0.24)] backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--accent-deep)]">Menu</p>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="inline-flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border border-[color:rgba(24,78,103,0.16)] bg-[color:rgba(255,255,255,0.92)] text-[color:var(--accent-deep)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 rounded-[1.2rem] border border-[color:rgba(38,77,102,0.12)] bg-[linear-gradient(180deg,rgba(230,241,247,0.9),rgba(222,235,242,0.84))] p-3 shadow-[0_16px_36px_rgba(24,78,103,0.08)]">
          <div className="space-y-3 rounded-[0.95rem] bg-[color:rgba(255,255,255,0.28)] p-1.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-[1.05rem] border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.92)] px-4 py-3 text-base text-[color:var(--foreground)] shadow-[0_10px_24px_rgba(24,78,103,0.06)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-[1.2rem] border border-[color:var(--line)] bg-white/60 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Language</p>
          <div className="mt-3">
            <LanguageSwitcher locale={locale} path={currentPath} labels={labels.switcher} />
          </div>
        </div>

        <Link
          href={contactHref}
          onClick={closeMenu}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--accent-deep)] px-4 py-3 text-sm font-medium !text-white transition hover:bg-[color:var(--accent)]"
        >
          {labels.nav.contact}
        </Link>
      </div>
    </header>
  );
}
