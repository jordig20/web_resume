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
  const navItems = [
    { href: localePath(locale), label: labels.nav.home },
    { href: localePath(locale, "/resume"), label: labels.nav.resume },
    { href: localePath(locale, "/portfolio"), label: labels.nav.portfolio }
  ];
  const contactHref = `${localePath(locale)}#contact`;

  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--line)] bg-[color:rgba(232,239,234,0.72)] backdrop-blur-md">
      <Container>
        <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href={localePath(locale)} className="text-sm uppercase tracking-[0.35em] text-[color:var(--accent-deep)] sm:tracking-[0.4em]">
            {name}
          </Link>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
            <div className="flex items-center justify-between gap-3 sm:justify-start">
              <nav className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--muted)] sm:gap-3 lg:gap-6">
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
            </div>
            <Link
              href={contactHref}
              className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--accent-deep)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[color:var(--accent)] sm:w-auto"
            >
              {labels.nav.contact}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
