/**
 * Translation dictionary for the Luca IoT website.
 * To add a new language, add a new key to the Translations type and
 * provide values for every translation key.
 *
 * To expand translations for page content later, simply add new keys here.
 */

export type Locale = "en" | "vi";

export interface TranslationStrings {
  /* Navigation */
  navHome: string;
  navAbout: string;
  navServices: string;
  navUseCases: string;
  navContact: string;

  /* CTA */
  primaryCTA: string;
  viewServices: string;

  /* Common */
  readMore: string;
  learnMore: string;
  startNow: string;
  requestPlan: string;
  sendMessage: string;
}

const en: TranslationStrings = {
  navHome: "Home",
  navAbout: "About",
  navServices: "Services",
  navUseCases: "Use Cases",
  navContact: "Contact",

  primaryCTA: "Contact Now for Consultation",
  viewServices: "View Services",

  readMore: "Read More",
  learnMore: "Learn More",
  startNow: "Start",
  requestPlan: "Request this plan",
  sendMessage: "Send Message",
};

const vi: TranslationStrings = {
  navHome: "Trang chủ",
  navAbout: "Giới thiệu",
  navServices: "Dịch vụ",
  navUseCases: "Ứng dụng",
  navContact: "Liên hệ",

  primaryCTA: "Liên hệ tư vấn ngay",
  viewServices: "Xem dịch vụ",

  readMore: "Xem thêm",
  learnMore: "Tìm hiểu thêm",
  startNow: "Bắt đầu",
  requestPlan: "Yêu cầu gói này",
  sendMessage: "Gửi tin nhắn",
};

export const translations: Record<Locale, TranslationStrings> = { en, vi };
