export function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs uppercase tracking-[0.45em] text-[color:var(--accent)]">{eyebrow}</p>
      <h2 className="text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{description}</p> : null}
    </div>
  );
}
