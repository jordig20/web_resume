"use client";

import { useMemo, useState } from "react";
import { TurnstileWidget } from "@/components/turnstile-widget";

type IntentId = "work" | "collaboration" | "hello";

type ContactCopy = {
  eyebrow: string;
  title: string;
  description: string;
  introLabel: string;
  formLabel: string;
  intents: Array<{
    id: IntentId;
    title: string;
    description: string;
  }>;
  activeIntentLabel: string;
  fields: {
    name: string;
    email: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    message: Record<IntentId, string>;
  };
  submit: string;
  sending: string;
  success: string;
  error: string;
  turnstile: {
    label: string;
    expired: string;
    error: string;
    missing: string;
  };
};

export function ContactSection({ copy }: { copy: ContactCopy }) {
  const [intent, setIntent] = useState<IntentId>("work");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const submittedAt = useMemo(() => Date.now(), []);
  const activeIntent = copy.intents.find((entry) => entry.id === intent) ?? copy.intents[0];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setTurnstileError("");
    setErrorMessage("");

    if (siteKey && !turnstileToken) {
      setTurnstileError(copy.turnstile.error);
      return;
    }

    setStatus("sending");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          intent,
          name,
          email,
          message,
          turnstileToken,
          website: formData.get("website"),
          submittedAt
        })
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Request failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTurnstileToken("");
      setTurnstileResetKey((current) => current + 1);
      form.reset();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : copy.error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-28 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        <div className="rounded-[1.4rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(247,251,253,0.995),rgba(236,244,248,0.99))] p-3.5 shadow-[var(--shadow)] max-[440px]:rounded-[1.2rem] max-[440px]:p-3 sm:rounded-[2.25rem] sm:bg-[linear-gradient(180deg,rgba(247,251,253,0.96),rgba(233,242,247,0.88))] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="space-y-5 sm:space-y-6">
              <div className="max-w-2xl">
                <p className="mb-3 text-[11px] uppercase tracking-[0.32em] text-[color:var(--accent)] max-[440px]:tracking-[0.24em]">
                  {copy.eyebrow}
                </p>
                <h2 className="text-2xl leading-tight font-semibold tracking-[-0.03em] max-[440px]:text-[1.65rem] sm:text-4xl">
                  {copy.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] max-[440px]:text-[0.95rem] max-[440px]:leading-6 sm:mt-4 sm:text-base">
                  {copy.description}
                </p>
              </div>

              <div className="rounded-[1.2rem] border border-[color:rgba(38,77,102,0.12)] bg-[linear-gradient(180deg,rgba(243,249,252,0.98),rgba(235,244,248,0.96))] p-3 shadow-[0_12px_32px_rgba(24,78,103,0.06)] max-[440px]:rounded-[1rem] max-[440px]:p-2.5 sm:rounded-[1.6rem] sm:bg-[linear-gradient(180deg,rgba(243,249,252,0.82),rgba(235,244,248,0.74))] sm:p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-deep)] max-[440px]:tracking-[0.2em]">
                  {copy.introLabel}
                </p>
                <div className="mt-3 space-y-3">
                  {copy.intents.map((entry) => {
                    const isActive = entry.id === intent;

                    return (
                      <button
                        key={entry.id}
                        type="button"
                        onClick={() => setIntent(entry.id)}
                        className={`w-full rounded-[1rem] border p-3 text-left transition max-[440px]:rounded-[0.9rem] max-[440px]:p-2.5 sm:rounded-[1.5rem] sm:p-4 ${
                          isActive
                            ? "border-[color:rgba(24,78,103,0.24)] bg-[linear-gradient(180deg,rgba(235,245,250,0.98),rgba(228,240,246,0.96))] shadow-[0_18px_45px_rgba(24,78,103,0.08)] sm:bg-[linear-gradient(180deg,rgba(24,78,103,0.14),rgba(24,78,103,0.06))]"
                            : "border-[color:var(--line)] bg-[color:rgba(255,255,255,0.94)] hover:border-[color:rgba(24,78,103,0.2)] hover:bg-[color:rgba(255,255,255,0.98)] sm:bg-white/72 sm:hover:bg-white/88"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[1.05rem] font-medium tracking-[-0.02em] text-[color:var(--foreground)] max-[440px]:text-base sm:text-lg">
                              {entry.title}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-[color:var(--muted)] max-[440px]:text-[0.94rem] max-[440px]:leading-6">
                              {entry.description}
                            </p>
                          </div>
                          <span
                            className={`mt-1 h-3 w-3 shrink-0 rounded-full ${
                              isActive ? "bg-[color:var(--accent-deep)]" : "bg-[color:rgba(24,78,103,0.18)]"
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="rounded-[1.2rem] border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.96)] p-3.5 max-[440px]:rounded-[1rem] max-[440px]:p-3 sm:rounded-[1.8rem] sm:bg-[color:rgba(255,255,255,0.72)] sm:p-6">
              <div className="flex flex-col gap-2 border-b border-[color:var(--line)] pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-deep)] max-[440px]:tracking-[0.2em]">
                    {copy.formLabel}
                  </p>
                  <p className="mt-2 text-base font-medium tracking-[-0.02em] text-[color:var(--foreground)] max-[440px]:text-[0.98rem] sm:text-lg">
                    {copy.activeIntentLabel} <span className="text-[color:var(--accent-deep)]">{activeIntent.title}</span>
                  </p>
                </div>
              </div>

              <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                <input type="hidden" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-[color:var(--muted)]">{copy.fields.name}</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder={copy.placeholders.name}
                      required
                      className="w-full rounded-[0.9rem] border border-[color:var(--line)] bg-white px-3.5 py-3 text-base text-[color:var(--foreground)] outline-none transition placeholder:text-[color:rgba(86,112,128,0.72)] focus:border-[color:rgba(24,78,103,0.34)] focus:ring-4 focus:ring-[rgba(24,78,103,0.08)] max-[440px]:px-3 max-[440px]:py-2.5"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-[color:var(--muted)]">{copy.fields.email}</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder={copy.placeholders.email}
                      required
                      className="w-full rounded-[0.9rem] border border-[color:var(--line)] bg-white px-3.5 py-3 text-base text-[color:var(--foreground)] outline-none transition placeholder:text-[color:rgba(86,112,128,0.72)] focus:border-[color:rgba(24,78,103,0.34)] focus:ring-4 focus:ring-[rgba(24,78,103,0.08)] max-[440px]:px-3 max-[440px]:py-2.5"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-[color:var(--muted)]">{copy.fields.message}</span>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={copy.placeholders.message[intent]}
                    required
                    rows={6}
                    className="w-full resize-y rounded-[0.9rem] border border-[color:var(--line)] bg-white px-3.5 py-3 text-base leading-7 text-[color:var(--foreground)] outline-none transition placeholder:text-[color:rgba(86,112,128,0.72)] focus:border-[color:rgba(24,78,103,0.34)] focus:ring-4 focus:ring-[rgba(24,78,103,0.08)] max-[440px]:px-3 max-[440px]:py-2.5 max-[440px]:text-[0.96rem] max-[440px]:leading-6"
                  />
                </label>

                <div className="space-y-3 overflow-hidden rounded-[0.95rem] border border-[color:var(--line)] bg-[color:rgba(237,246,251,0.94)] p-3.5 max-[440px]:rounded-[0.9rem] max-[440px]:p-3 sm:bg-[color:rgba(237,246,251,0.64)]">
                  <p className="text-sm text-[color:var(--muted)]">{copy.turnstile.label}</p>
                  <div className="max-w-full overflow-x-auto">
                    <TurnstileWidget
                      siteKey={siteKey}
                      resetKey={turnstileResetKey}
                      onVerify={(token) => {
                        setTurnstileToken(token);
                        setTurnstileError("");
                      }}
                      onExpire={() => {
                        setTurnstileToken("");
                        setTurnstileError(copy.turnstile.expired);
                      }}
                      onError={() => {
                        setTurnstileToken("");
                        setTurnstileError(copy.turnstile.error);
                      }}
                    />
                  </div>
                  {!siteKey ? <p className="text-sm text-[color:#8e3b31]">{copy.turnstile.missing}</p> : null}
                  {turnstileError ? <p className="text-sm text-[color:#8e3b31]">{turnstileError}</p> : null}
                </div>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending" || (!turnstileToken && Boolean(siteKey))}
                    className="w-full rounded-full bg-[color:var(--accent-deep)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--accent)] disabled:cursor-wait disabled:opacity-70 max-[440px]:px-4 max-[440px]:py-2.5 sm:w-auto"
                  >
                    {status === "sending" ? copy.sending : copy.submit}
                  </button>

                  <p
                    className={`text-sm leading-6 ${
                      status === "error" ? "text-[color:#8e3b31]" : "text-[color:var(--muted)]"
                    }`}
                  >
                    {status === "success" ? copy.success : status === "error" ? errorMessage || copy.error : null}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
