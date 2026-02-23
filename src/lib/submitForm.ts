/**
 * Centralized form submission utility.
 *
 * Currently uses FormSubmit.co (https://formsubmit.co) as the email relay.
 * To switch providers, replace the `submitToProvider` implementation below.
 *
 * TODO: Replace with your preferred provider:
 *   - EmailJS: https://www.emailjs.com
 *   - FormSubmit: https://formsubmit.co (current)
 *   - Lovable Cloud edge function
 */

import { siteConfig } from "@/data/siteConfig";

export interface ContactFormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
}

export interface PlanRequestFormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  notes: string;
  service: string;
  plan: string;
}

type FormPayload = ContactFormData | PlanRequestFormData;

// ── Provider implementation ──────────────────────────────────
// Using FormSubmit.co free tier — sends to siteConfig.contactEmail.
// No signup required: first submission triggers an activation email.

const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${siteConfig.contactEmail}`;

async function submitToProvider(payload: Record<string, string>): Promise<void> {
  const res = await fetch(FORMSUBMIT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...payload,
      _subject: payload._subject || "New inquiry from Luca IoT website",
      _captcha: "false",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Submission failed (${res.status}): ${text}`);
  }
}

// ── Public API ───────────────────────────────────────────────

export async function submitContactForm(data: ContactFormData): Promise<void> {
  await submitToProvider({
    _subject: "New Contact Inquiry — Luca IoT",
    Name: data.name,
    Email: data.email,
    Phone: `${data.countryCode} ${data.phone}`,
    Message: data.message,
  });
}

export async function submitPlanRequest(data: PlanRequestFormData): Promise<void> {
  await submitToProvider({
    _subject: `Plan Request: ${data.service} — ${data.plan}`,
    Name: data.name,
    Email: data.email,
    Phone: `${data.countryCode} ${data.phone}`,
    Service: data.service,
    Plan: data.plan,
    Notes: data.notes || "(none)",
  });
}
