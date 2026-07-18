"use client";

import { CheckCircle2, LoaderCircle, RotateCcw, Send, Youtube } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { interestTypes, site } from "@/constants/site";

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-5 py-3.5 text-sm text-ink placeholder:text-faint transition-colors duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgb(77_143_209/0.18)] focus:outline-none";

/**
 * Enquiry form powered by FormSubmit (https://formsubmit.co): submissions are
 * delivered straight to the Doctor's Dialogue inbox with no backend. If the
 * network request fails, it falls back to opening the visitor's email app.
 * The interest dropdown pre-selects from /contact?type=…
 *
 * Note: FormSubmit sends a one-time activation email to the inbox on the
 * first submission — activate it once and everything flows automatically.
 */
export function ContactForm() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") ?? "";
  const initialType = interestTypes.some((t) => t.value === typeParam)
    ? typeParam
    : "";

  const [interest, setInterest] = useState(initialType);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback">(
    "idle",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const interestLabel =
      interestTypes.find((t) => t.value === data.get("interest"))?.label ??
      "General Enquiry";
    const subject = `Doctor's Dialogue Enquiry — ${interestLabel}`;

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: data.get("name"),
          Email: data.get("email"),
          Phone: data.get("phone"),
          "Organization / Clinic": data.get("organization") || "—",
          "Interest Type": interestLabel,
          Message: data.get("message"),
          _subject: subject,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
      setStatus("sent");
    } catch {
      // Network/service failure: draft the enquiry in the visitor's email app.
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone")}`,
        `Organization / Clinic: ${data.get("organization") || "—"}`,
        `Interest: ${interestLabel}`,
        "",
        `${data.get("message")}`,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("fallback");
    }
  }

  if (status === "sent" || status === "fallback") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-accent/40 bg-white p-10 text-center shadow-[var(--shadow-card)] md:p-14">
        <span className="flex size-16 items-center justify-center rounded-full bg-mist text-accent">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-serif text-3xl text-ink">
          {status === "sent"
            ? "Your enquiry has been sent"
            : "Your enquiry is on its way"}
        </h3>
        <p className="mt-4 max-w-md leading-relaxed">
          {status === "sent" ? (
            <>
              Thank you for reaching out — your message is with the
              Doctor&rsquo;s Dialogue team at{" "}
              <span className="text-accent">{site.email}</span>. We&rsquo;ll get
              back to you for participation and collaboration opportunities.
            </>
          ) : (
            <>
              We couldn&rsquo;t reach the form service, so we&rsquo;ve opened
              your email app with your message drafted to{" "}
              <span className="text-accent">{site.email}</span> — just press
              send.
            </>
          )}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={site.youtube} target="_blank" rel="noopener noreferrer">
              <Youtube aria-hidden="true" />
              Watch on YouTube
            </a>
          </Button>
          <Button variant="ghost" onClick={() => setStatus("idle")}>
            <RotateCcw aria-hidden="true" />
            Send Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-card)] md:p-12"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-3 block !text-[0.65rem] text-ink">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Dr. Full Name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow mb-3 block !text-[0.65rem] text-ink">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="eyebrow mb-3 block !text-[0.65rem] text-ink">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 00000 00000"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="organization"
            className="eyebrow mb-3 block !text-[0.65rem] text-ink"
          >
            Organization / Clinic Name
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            placeholder="Your clinic or hospital"
            className={inputClasses}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="interest" className="eyebrow mb-3 block !text-[0.65rem] text-ink">
            Interest Type *
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%232e6fae%22 stroke-width=%221.5%22%3E%3Cpath d=%22m4 6 4 4 4-4%22/%3E%3C/svg%3E')] bg-[position:right_1.25rem_center] bg-no-repeat pr-12`}
          >
            <option value="" disabled>
              Select how you&rsquo;d like to participate
            </option>
            {interestTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="eyebrow mb-3 block !text-[0.65rem] text-ink">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your specialty and what you'd like to share…"
            className={`${inputClasses} resize-y`}
          />
        </div>
      </div>

      <div className="mt-9 flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-faint">
          We&rsquo;ll get back to you for participation and collaboration
          opportunities. By submitting, you agree to our{" "}
          <Link href="/privacy-policy" className="link-accent text-accent">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3">
          <Button type="reset" variant="ghost" onClick={() => setInterest("")}>
            Reset Form
          </Button>
          <Button type="submit" size="lg" disabled={status === "sending"}>
            {status === "sending" ? (
              <LoaderCircle className="animate-spin" aria-hidden="true" />
            ) : (
              <Send aria-hidden="true" />
            )}
            {status === "sending" ? "Sending…" : "Submit Enquiry"}
          </Button>
        </div>
      </div>
    </form>
  );
}
