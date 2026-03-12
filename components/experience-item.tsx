type ExperienceItemProps = {
  period: string;
  role: string;
  company: string;
  summary: string;
  bullets: string[];
};

export function ExperienceItem({ period, role, company, summary, bullets }: ExperienceItemProps) {
  return (
    <article className="grid gap-4 rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(245,243,234,0.96),rgba(232,239,234,0.92))] p-6 shadow-[var(--shadow)] backdrop-blur-sm md:grid-cols-[160px_1fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">{period}</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold tracking-[-0.02em]">{role}</h3>
        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">{company}</p>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{summary}</p>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--foreground)]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
