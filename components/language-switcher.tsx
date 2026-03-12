import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({
  locale,
  path,
  labels
}: {
  locale: Locale;
  path: string;
  labels: { es: string; en: string };
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[color:rgba(24,78,103,0.18)] bg-[color:rgba(255,255,255,0.94)] px-2 py-1 shadow-[0_10px_30px_rgba(24,78,103,0.08)]">
      {(["es", "en"] as const).map((entry) => {
        const active = entry === locale;

        return (
          <Link
            key={entry}
            href={localePath(entry, path)}
            className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] transition ${
              active
                ? "bg-[#0f2f40] !text-white shadow-[0_6px_18px_rgba(15,47,64,0.28)]"
                : "text-[color:#184e67] hover:bg-[color:rgba(24,78,103,0.08)] hover:text-[color:var(--foreground)]"
            }`}
          >
            {labels[entry]}
          </Link>
        );
      })}
    </div>
  );
}
