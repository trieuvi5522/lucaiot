export interface SiteConfig {
  brandName: string;
  ownerName: string;
  role: string;
  contactEmail: string;
  whatsappPhone: string;
  facebookUrl: string;
  linkedinUrl: string;
  primaryCTA: string;
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
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  group: "hosting" | "service";
  shortDescription: string;
  bulletPoints: [string, string, string];
  heroText: string;
  targetUsers: string[];
  painPoints: string[];
  includedScope: string[];
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
  title: string;
  shortDescription: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  servicesUsed: string[];
}
