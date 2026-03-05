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
  /** Optional spec columns for row-style pricing (e.g. vCPU, RAM, Disk) */
  specs?: { label: string; value: string }[];
}

export interface FAQItem {
  question: LocaleString;
  answer: LocaleString;
}

export interface ProcessStep {
  title: LocaleString;
  description: LocaleString;
}

/** A card with title and description for richer section content */
export interface ContentCard {
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
  /** Optional sub-headline shown above heroText in the hero section */
  heroSubheadline?: LocaleString;
  targetUsers: LocaleString[];
  painPoints: LocaleString[];
  /** Rich pain-point cards with title + description (used instead of painPoints when present) */
  painPointCards?: ContentCard[];
  includedScope: LocaleString[];
  /** Rich offer cards with title + description (used instead of includedScope when present) */
  offerCards?: ContentCard[];
  technicalCapabilities: string[];
  processSteps: ProcessStep[];
  pricingType: "public_packages" | "contact_for_quote";
  pricingPlans?: PricingPlan[];
  faq: FAQItem[];
  relatedServiceIds: string[];
  relatedUseCaseIds: string[];
  /** Optional per-service overrides for section titles */
  sectionTitles?: {
    painPoints?: LocaleString;
    included?: LocaleString;
    process?: LocaleString;
  };
  /** Optional per-service intro text for sections */
  sectionIntros?: {
    painPoints?: LocaleString;
    included?: LocaleString;
    process?: LocaleString;
  };
}

export interface UseCaseSection {
  id: string;
  title: LocaleString;
  body: LocaleString;
  image?: string;
  imageAlt?: LocaleString;
  imageCaption?: LocaleString;
}

export interface TechHighlight {
  feature: LocaleString;
  technical: LocaleString;
  benefit: LocaleString;
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
  hideChallenge?: boolean;
  hideSolution?: boolean;
  heroImage?: string;
  sections?: UseCaseSection[];
  techHighlights?: TechHighlight[];
}
