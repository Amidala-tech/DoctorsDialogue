"use client";

import { CheckCircle2, LoaderCircle, RotateCcw, Send, Youtube } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { interestTypes, site } from "@/constants/site";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-5 py-3.5 text-sm text-ink placeholder:text-faint transition-colors duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgb(77_143_209/0.18)] focus:outline-none";

const errorInputClasses = "border-red-400 focus:border-red-500 focus:shadow-[0_0_0_3px_rgb(239_68_68/0.15)]";

// Requires a local part, "@", and a domain with a real TLD — rejects
// obvious junk like "asdf@asdf" while staying RFC-reasonable.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Indian mobile numbers: 10 digits, starting 6–9. Combined with the fixed
// "+91" prefix in the UI this guarantees exactly 12 digits total.
const PHONE_DIGITS_REGEX = /^[6-9]\d{9}$/;

type FormErrors = Partial<Record<"name" | "email" | "phone" | "interest" | "message", string>>;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-xs text-red-600" role="alert">
      {message}
    </p>
  );
}

/**
 * Enquiry form powered by FormSubmit (https://formsubmit.co): submissions are
 * delivered straight to the Doctor's Dialogue inbox with no backend. If the
 * network request fails, it falls back to opening the visitor's email app.
 * The interest dropdown pre-selects from /contact?type=…
 *
 * Validation runs entirely client-side (native browser validation is
 * disabled via `noValidate` so we control the messaging): email must match
 * a real address shape, and phone is captured as a fixed "+91" prefix plus
 * exactly 10 digits (starting 6–9) so junk like "123" or letters can't be
 * submitted.
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
  const [phoneDigits, setPhoneDigits] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback">(
    "idle",
  );

  function clearError(field: keyof FormErrors) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, "").slice(0, 10);
    setPhoneDigits(digits);
    clearError("phone");
  }

  function resetFormState() {
    setInterest("");
    setPhoneDigits("");
    setErrors({});
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(email)) {
      nextErrors.email = "Enter a valid email address, e.g. name@example.com.";
    }
    if (!PHONE_DIGITS_REGEX.test(phoneDigits)) {
      nextErrors.phone = "Enter a valid 10-digit mobile number starting 6–9.";
    }
    if (!interest) nextErrors.interest = "Please select how you'd like to participate.";
    if (!message) nextErrors.message = "Please share a short message.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});

    const interestLabel =
      interestTypes.find((t) => t.value === interest)?.label ?? "General Enquiry";
    const subject = `Doctor's Dialogue Enquiry — ${interestLabel}`;
    const phone = `+91${phoneDigits}`;

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Phone: phone,
          "Organization / Clinic": data.get("organization") || "—",
          "Interest Type": interestLabel,
          Message: message,
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
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Organization / Clinic: ${data.get("organization") || "—"}`,
        `Interest: ${interestLabel}`,
        "",
        message,
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
          <Button
            variant="ghost"
            onClick={() => {
              resetFormState();
              setStatus("idle");
            }}
          >
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
      noValidate
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
            autoComplete="name"
            placeholder="Dr. Full Name"
            onChange={() => clearError("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputClasses, errors.name && errorInputClasses)}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow mb-3 block !text-[0.65rem] text-ink">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            onChange={() => clearError("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(inputClasses, errors.email && errorInputClasses)}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
        <div>
          <label htmlFor="phone" className="eyebrow mb-3 block !text-[0.65rem] text-ink">
            Phone Number *
          </label>
          <div
            className={cn(
              "flex items-stretch overflow-hidden rounded-xl border border-line bg-white transition-colors duration-300 focus-within:border-accent focus-within:shadow-[0_0_0_3px_rgb(77_143_209/0.18)]",
              errors.phone && errorInputClasses,
            )}
          >
            <span className="flex select-none items-center border-r border-line bg-mist px-4 text-sm font-medium text-ink">
              +91
            </span>
            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="98765 43210"
              value={phoneDigits}
              onChange={handlePhoneChange}
              maxLength={10}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
              className="w-full bg-transparent px-5 py-3.5 text-sm text-ink placeholder:text-faint focus:outline-none"
            />
          </div>
          {errors.phone ? (
            <FieldError id="phone-error" message={errors.phone} />
          ) : (
            <p id="phone-hint" className="mt-2 text-xs text-faint">
              10-digit Indian mobile number, no spaces.
            </p>
          )}
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
            value={interest}
            onChange={(e) => {
              setInterest(e.target.value);
              clearError("interest");
            }}
            aria-invalid={!!errors.interest}
            aria-describedby={errors.interest ? "interest-error" : undefined}
            className={cn(
              inputClasses,
              errors.interest && errorInputClasses,
              "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%232e6fae%22 stroke-width=%221.5%22%3E%3Cpath d=%22m4 6 4 4 4-4%22/%3E%3C/svg%3E')] bg-[position:right_1.25rem_center] bg-no-repeat pr-12",
            )}
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
          <FieldError id="interest-error" message={errors.interest} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="eyebrow mb-3 block !text-[0.65rem] text-ink">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your specialty and what you'd like to share…"
            onChange={() => clearError("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(inputClasses, "resize-y", errors.message && errorInputClasses)}
          />
          <FieldError id="message-error" message={errors.message} />
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
          <Button type="reset" variant="ghost" onClick={resetFormState}>
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
