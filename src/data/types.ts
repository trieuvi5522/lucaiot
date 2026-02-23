import type { Locale } from "@/i18n/translations";

/** A string with translations for each supported locale */
export type LocaleString = Record<Locale, string>;

/** Helper to create a LocaleString with same value for all locales (for technical terms) */
export const ls = (en: string, vi: string): LocaleString => ({ en, vi });

export interface SiteConfig {
  brandName: string;
  ownerName: string;
  role: LocaleString;
  contactEmail: string;
  whatsappPhone: string;
  facebookUrl: string;
  linkedinUrl: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: LocaleString;
  answer: LocaleString;
}

export interface ProcessStep {
  title: LocaleString;
  description: LocaleString;
}

export interface Service {
  id: string;
  slug: string;
  title: LocaleString;
  group: "hosting" | "service";
  shortDescription: LocaleString;
  bulletPoints: [LocaleString, LocaleString, LocaleString];
  heroText: LocaleString;
  targetUsers: LocaleString[];
  painPoints: LocaleString[];
  includedScope: LocaleString[];
  technicalCapabilities: string[];
  processSteps: ProcessStep[];
  pricingType: "public_packages" | "contact_for_quote";
  pricingPlans?: PricingPlan[];
  faq: FAQItem[];
  relatedServiceIds: string[];
  relatedUseCaseIds: string[];
}

export interface UseCase {
  id: string;
  slug: string;
  title: LocaleString;
  shortDescription: LocaleString;
  industry: LocaleString;
  challenge: LocaleString;
  solution: LocaleString;
  results: LocaleString[];
  servicesUsed: string[];
}
