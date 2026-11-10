import { useId, useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/links";
import { isEmail, submitSignup } from "@/lib/signup";
import type { SignupList } from "@/lib/signup";
import type { Mode } from "@/content/stages";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "done" | "placeholder" | "error" | "invalid";

interface Props {
  list: SignupList;
  label: string;
  button: string;
  stage?: number;
  mode?: Mode;
  dark?: boolean;
  className?: string;
}

// One email field for the newsletter, the course waitlist, masterclass dates and the
// self-check readout. Where it posts: src/lib/signup.ts.
const SignupForm = ({ list, label, button, stage, mode, dark = false, className }: Props) => {
  const id = useId();
  const { pathname } = useLocation();
  const [email, setEmail] = useState("");
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (trap) return; // A bot filled the hidden field.
    if (!isEmail(email)) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const result = await submitSignup({ email: email.trim(), list, page: pathname, stage, mode });
      if (!result.ok) setStatus("error");
      else setStatus(result.placeholder ? "placeholder" : "done");
    } catch {
      setStatus("error");
    }
  };

  const messages: Record<Status, string> = {
    idle: "",
    sending: "Sending...",
    done: "Thanks. Check your inbox to confirm.",
    placeholder: "Thanks. Preview only: the email tool is not connected yet, so nothing was saved.",
    error: `That didn't work. Please try again, or email me at ${CONTACT_EMAIL}.`,
    invalid: "Enter an email address like you@company.com.",
  };

  const sent = status === "done" || status === "placeholder";

  return (
    <form onSubmit={onSubmit} noValidate className={cn("grid gap-2", className)}>
      <label htmlFor={`${id}-email`} className={cn("text-sm font-semibold", dark ? "text-white" : "text-ink")}>
        {label}
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={`${id}-email`}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "invalid" || status === "error") setStatus("idle");
          }}
          disabled={sent}
          aria-invalid={status === "invalid"}
          aria-describedby={`${id}-msg`}
          className={cn(
            "h-11 min-w-0 flex-1 rounded-full border px-4 text-base outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand md:text-sm",
            dark
              ? "border-white/20 bg-white/10 text-white placeholder:text-white/50"
              : "border-ink/15 bg-white text-ink placeholder:text-ink/40",
          )}
        />
        {/* Honeypot: hidden from people, bots fill it in. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={trap}
          onChange={(e) => setTrap(e.target.value)}
          className="hidden"
          aria-hidden="true"
        />
        <Button type="submit" variant={dark ? "light" : "brand"} disabled={status === "sending" || sent}>
          {button}
        </Button>
      </div>
      <p
        id={`${id}-msg`}
        aria-live="polite"
        className={cn(
          "min-h-[1.25rem] text-sm",
          status === "invalid" || status === "error"
            ? dark
              ? "text-red-300"
              : "text-red-700"
            : dark
              ? "text-white/70"
              : "text-ink/60",
        )}
      >
        {messages[status]}
      </p>
      <p className={cn("text-xs", dark ? "text-white/50" : "text-ink/50")}>
        No spam. Unsubscribe any time.{" "}
        <Link to="/datenschutz" className="underline underline-offset-2">
          Privacy (Datenschutz)
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
