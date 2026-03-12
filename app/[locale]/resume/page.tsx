import Link from "next/link";
import { Container } from "@/components/container";
import { ExperienceItem } from "@/components/experience-item";
import { SectionTitle } from "@/components/section-title";
import { SiteHeader } from "@/components/site-header";
import { getSiteContent, getUiCopy } from "@/content/site";
import { requireLocale } from "@/lib/i18n";

export default async function ResumePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = requireLocale((await params).locale);
  const copy = getUiCopy(locale);
  const site = getSiteContent(locale);

  return (
    <div className="grain min-h-screen pb-16">
      <SiteHeader locale={locale} name={site.name} labels={copy} currentPath="/resume" />
      <main className="py-16 sm:py-20">
        <Container>
          <SectionTitle eyebrow={copy.resume.eyebrow} title={site.name} description={`${site.role}. ${site.intro}`} />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(248,245,237,0.96),rgba(232,239,234,0.92))] p-6 shadow-[var(--shadow)]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">{copy.resume.contact}</p>
                <div className="mt-4 space-y-2 text-sm text-[color:var(--foreground)]">
                  <p>{site.location}</p>
                  <Link href={`mailto:${site.email}`} className="text-[color:var(--accent-deep)]">
                    {site.email}
                  </Link>
                  <p>{site.domain}</p>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">{copy.resume.links}</p>
                <div className="mt-4 flex flex-col gap-2 text-sm text-[color:var(--accent-deep)]">
                  {site.socialLinks.map((link) => (
                    <Link key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">{copy.resume.skills}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {site.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.55)] px-3 py-1 text-xs text-[color:var(--muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <section className="space-y-6">
              {site.experience.map((item) => (
                <ExperienceItem key={`${item.company}-${item.period}`} {...item} />
              ))}
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}
