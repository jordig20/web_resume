import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  labels
}: {
  project: Project;
  labels: {
    cardLabel: string;
    viewProject: string;
    viewCode: string;
  };
}) {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(248,245,237,0.96),rgba(239,243,235,0.92))] p-6 shadow-[var(--shadow)] backdrop-blur-sm transition hover:-translate-y-1">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-[color:var(--muted)]">{project.year}</span>
        <span className="rounded-full bg-[color:rgba(49,95,74,0.1)] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[color:var(--accent-deep)]">
          {labels.cardLabel}
        </span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em]">{project.title}</h3>
      <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{project.description}</p>
      <p className="mt-4 text-sm leading-6 text-[color:var(--foreground)]">{project.impact}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.55)] px-3 py-1 text-xs text-[color:var(--muted)]"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 flex gap-4 text-sm text-[color:var(--accent-deep)]">
        {project.href ? (
          <Link href={project.href} target="_blank" rel="noreferrer" className="transition hover:opacity-70">
            {labels.viewProject}
          </Link>
        ) : null}
        {project.repo ? (
          <Link href={project.repo} target="_blank" rel="noreferrer" className="transition hover:opacity-70">
            {labels.viewCode}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
