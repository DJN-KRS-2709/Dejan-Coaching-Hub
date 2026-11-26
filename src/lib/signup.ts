// Email signups: newsletter, course waitlist, masterclass dates and the self-check readout.
//
// =====================================================================================
// PLUG IN THE EMAIL TOOL HERE.
// Every signup form on the site posts JSON to SIGNUP_ENDPOINT:
//   { email, list, page, stage?, mode? }
// Today that is /api/signup (api/signup.js), a PLACEHOLDER that checks the request and
// answers { ok: true, placeholder: true } without storing or sending anything.
// When the email tool is chosen (Kit, Brevo, MailerLite, ...), either:
//   1. forward the request to the tool's API inside api/signup.js, with the API key kept
//      in a Vercel environment variable, or
//   2. set VITE_SIGNUP_ENDPOINT to the tool's own form endpoint and adapt toBody() below.
// Then name the tool in the Datenschutz page (section "Newsletter und Warteliste").
// =====================================================================================
export const SIGNUP_ENDPOINT: string = import.meta.env.VITE_SIGNUP_ENDPOINT || "/api/signup";

export type SignupList = "newsletter" | "cohort-waitlist" | "masterclass" | "self-check";

export interface SignupPayload {
  email: string;
  list: SignupList;
  page: string;
  stage?: number;
  mode?: "person" | "team";
}

export interface SignupResult {
  ok: boolean;
  // True while the placeholder endpoint answers: nothing was saved.
  placeholder: boolean;
}

const toBody = (payload: SignupPayload) => JSON.stringify(payload);

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export async function submitSignup(payload: SignupPayload): Promise<SignupResult> {
  const response = await fetch(SIGNUP_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: toBody(payload),
  });
  if (!response.ok) return { ok: false, placeholder: false };
  const data = await response.json().catch(() => ({}));
  return { ok: true, placeholder: Boolean(data?.placeholder) };
}
