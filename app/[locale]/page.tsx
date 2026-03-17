import type { CSSProperties } from "react";
import Link from "next/link";
import { Container } from "@/components/container";
import { ContactSection } from "@/components/contact-section";
import { ExperienceItem } from "@/components/experience-item";
import { ProfilePhotoSlider } from "@/components/profile-photo-slider";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { SiteHeader } from "@/components/site-header";
import { SkillBadge } from "@/components/skill-badge";
import { getProjects } from "@/content/projects";
import { getSiteContent, getUiCopy } from "@/content/site";
import { localePath, requireLocale, withBasePath } from "@/lib/i18n";

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = requireLocale((await params).locale);
  const copy = getUiCopy(locale);
  const site = getSiteContent(locale);
  const featuredProjects = getProjects(locale).slice(0, 2);
  const profileSlides = [
    {
      src: "/profile-hike-banff.webp",
      alt: "Jordi hiking in the mountains near Banff"
    },
    {
      src: "/profile-hike-summit.webp",
      alt: "Jordi outdoors in the mountains"
    },
    {
      src: "/profile-hike-ridge.webp",
      alt: "Jordi on a mountain route near Banff"
    }
  ];

  return (
    <div className="grain pb-16">
      <SiteHeader locale={locale} name={site.name} labels={copy} currentPath="" />
      <main>
        <section className="py-8 sm:py-12">
          <Container>
            <div
              className="cascade-hero rounded-[2.5rem] border border-[color:rgba(255,255,255,0.18)] px-6 py-6 text-white shadow-[0_30px_90px_rgba(16,33,43,0.18)] sm:px-8 sm:py-8"
              style={
                {
                  "--hero-background": `linear-gradient(104deg, rgba(14, 37, 48, 0.62) 8%, rgba(19, 74, 95, 0.22) 40%, rgba(235, 248, 255, 0.06) 72%), linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(12, 26, 34, 0.16)), url("${withBasePath("/hero-moraine-lake.webp")}") center 58% / cover no-repeat`
                } as CSSProperties
              }
            >
              <div className="grid gap-6 lg:grid-cols-[1.32fr_0.68fr] lg:items-end">
                <div className="fade-rise">
                  {copy.hero.eyebrow ? (
                    <p className="text-sm uppercase tracking-[0.45em] text-[color:rgba(234,240,244,0.84)]">
                      {copy.hero.eyebrow}
                    </p>
                  ) : null}
                  <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                    {copy.hero.title[0]}
                    <br />
                    {copy.hero.title[1]}
                  </h1>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[color:rgba(239,247,251,0.94)]">
                    {site.intro}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href={localePath(locale, "/portfolio")}
                      className="rounded-full bg-[color:var(--accent-deep)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--accent)]"
                    >
                      {copy.hero.primaryCta}
                    </Link>
                    <Link
                      href={localePath(locale, "/resume")}
                      className="rounded-full border border-white/40 bg-white/14 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20"
                    >
                      {copy.hero.secondaryCta}
                    </Link>
                  </div>
                </div>
                <div className="fade-rise-delayed max-w-[22rem] justify-self-end rounded-[1.75rem] border border-white/14 bg-[color:rgba(15,45,58,0.16)] p-2.5 shadow-[0_20px_60px_rgba(8,14,18,0.16)] backdrop-blur-sm">
                  <div className="overflow-hidden rounded-[1.4rem] border border-white/12 bg-black/10">
                    <img
                      src={withBasePath("/jordi-portrait.webp")}
                      alt="Jordi Granada Rubio on a snowy mountain ridge in Banff"
                      width={960}
                      height={1280}
                      className="h-[18rem] w-full object-cover object-[50%_58%] sm:h-[16rem] sm:object-[50%_66%] lg:h-[18rem] lg:object-[50%_62%] xl:h-[19rem] xl:object-[50%_60%]"
                    />
                  </div>
                  <div className="mt-2.5 rounded-[1.25rem] border border-white/12 bg-[color:rgba(12,36,48,0.34)] p-3.5">
                    <p className="text-sm uppercase tracking-[0.35em] text-[color:rgba(228,236,241,0.76)]">
                      {copy.hero.notesTitle}
                    </p>
                    <div className="mt-3 space-y-3">
                    <div>
                      <p className="text-sm text-[color:rgba(228,236,241,0.68)]">{copy.hero.location}</p>
                      <p className="mt-1 text-base text-white">{site.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[color:rgba(228,236,241,0.68)]">{copy.hero.focus}</p>
                      <p className="mt-1 text-base text-white">{copy.hero.focusValue}</p>
                    </div>
                    <div className="rounded-[1rem] border border-white/10 bg-black/10 p-3 text-sm leading-5 text-[color:rgba(236,241,244,0.84)]">
                      {copy.hero.note}
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-6">
                <SectionTitle
                  eyebrow={copy.profile.eyebrow}
                  title={copy.profile.title}
                  description={copy.profile.description}
                />
                <ProfilePhotoSlider slides={profileSlides} label={copy.profile.mediaLabel} />
              </div>
              <div className="grid gap-4">
                {site.profileItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(248,251,252,0.96),rgba(236,244,247,0.86))] p-5 text-base leading-7 text-[color:var(--muted)] shadow-[var(--shadow)]"
                  >
                    <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--accent-deep)]">{item.title}</p>
                    <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <SectionTitle
                eyebrow={copy.projects.eyebrow}
                title={copy.projects.title}
                description={copy.projects.description}
              />
              <Link href={localePath(locale, "/portfolio")} className="text-sm text-[color:var(--accent-deep)]">
                {copy.projects.viewAll}
              </Link>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} labels={copy.projects} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionTitle
                eyebrow={copy.skills.eyebrow}
                title={copy.skills.title}
                description={copy.skills.description}
              />
              <div className="flex flex-wrap gap-3">
                {site.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <SectionTitle
              eyebrow={copy.experience.eyebrow}
              title={copy.experience.title}
              description={copy.experience.description}
            />
            <div className="mt-10 space-y-6">
              {site.experience.map((item) => (
                <ExperienceItem key={`${item.company}-${item.period}`} {...item} />
              ))}
            </div>
          </Container>
        </section>

        <ContactSection copy={copy.contact} />
      </main>
    </div>
  );
}
