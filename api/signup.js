// PLACEHOLDER signup endpoint (Vercel serverless function at /api/signup).
//
// The newsletter, course waitlist, masterclass and self-check forms post here as JSON:
//   { email, list, page, stage?, mode? }
// It checks the request and answers { ok: true, placeholder: true }, but it STORES AND
// SENDS NOTHING, and logs no personal data.
//
// =====================================================================================
// PLUG IN THE EMAIL TOOL HERE: replace the marked block below with a call to the tool's
// API (Kit, Brevo, MailerLite, ...). Keep the API key in a Vercel environment variable,
// use double opt-in, map `list` to the tool's list or tag, and return
// { ok: true, placeholder: false } once the contact is created.
// =====================================================================================

const LISTS = new Set(["newsletter", "cohort-waitlist", "masterclass", "self-check"]);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: "invalid_json" });
    }
  }

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const list = body?.list;
  if (!EMAIL.test(email) || email.length > 254 || !LISTS.has(list)) {
    return res.status(400).json({ ok: false, error: "invalid_request" });
  }

  // ---- PLACEHOLDER: the email tool call goes here. Nothing is stored. ----

  return res.status(200).json({ ok: true, placeholder: true });
}
