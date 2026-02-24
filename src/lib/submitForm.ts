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

import { z } from "zod";
import { siteConfig } from "@/data/siteConfig";

// ── Validation schemas ──────────────────────────────────────

const nameSchema = z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters");
const emailSchema = z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters");
const phoneSchema = z.string().trim().max(20, "Phone number is too long");
const countryCodeSchema = z.string().trim().min(1).max(5);

const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  countryCode: countryCodeSchema,
  phone: phoneSchema,
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const planRequestSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  countryCode: countryCodeSchema,
  phone: phoneSchema,
  notes: z.string().trim().max(2000, "Notes must be less than 2000 characters").optional().default(""),
  service: z.string().trim().min(1).max(200),
  plan: z.string().trim().min(1).max(200),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type PlanRequestFormData = z.infer<typeof planRequestSchema>;

// ── Provider implementation ──────────────────────────────────
// Using FormSubmit.co free tier — sends to siteConfig.contactEmail.
// No signup required: first submission triggers an activation email.

const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${siteConfig.contactEmail}`;

function sanitize(value: string): string {
  return value.replace(/[<>]/g, "");
}

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
    throw new Error("Submission failed. Please try again later.");
  }
}

// ── Public API ───────────────────────────────────────────────

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const validated = contactFormSchema.parse(data);
  await submitToProvider({
    _subject: "New Contact Inquiry — Luca IoT",
    Name: sanitize(validated.name),
    Email: sanitize(validated.email),
    Phone: `${sanitize(validated.countryCode)} ${sanitize(validated.phone)}`,
    Message: sanitize(validated.message),
  });
}

export async function submitPlanRequest(data: PlanRequestFormData): Promise<void> {
  const validated = planRequestSchema.parse(data);
  await submitToProvider({
    _subject: `Plan Request: ${sanitize(validated.service)} — ${sanitize(validated.plan)}`,
    Name: sanitize(validated.name),
    Email: sanitize(validated.email),
    Phone: `${sanitize(validated.countryCode)} ${sanitize(validated.phone)}`,
    Service: sanitize(validated.service),
    Plan: sanitize(validated.plan),
    Notes: sanitize(validated.notes || "") || "(none)",
  });
}
