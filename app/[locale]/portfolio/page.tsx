import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { SiteHeader } from "@/components/site-header";
import { getProjects } from "@/content/projects";
import { getSiteContent, getUiCopy } from "@/content/site";
import { requireLocale } from "@/lib/i18n";

export default async function PortfolioPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = requireLocale((await params).locale);
  const copy = getUiCopy(locale);
  const site = getSiteContent(locale);
  const projects = getProjects(locale);

  return (
    <div className="grain min-h-screen pb-16">
      <SiteHeader locale={locale} name={site.name} labels={copy} currentPath="/portfolio" />
      <main className="py-16 sm:py-20">
        <Container>
          <div className="rounded-[2.25rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,rgba(247,245,238,0.94),rgba(224,234,226,0.82))] p-8 shadow-[var(--shadow)]">
            <SectionTitle
              eyebrow={copy.projects.eyebrow}
              title={copy.projects.pageTitle}
              description={copy.projects.pageDescription}
            />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} labels={copy.projects} />
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}
