import { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

interface PageMetaProps {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

/**
 * Sets document <title> and meta tags.
 * Lightweight alternative to react-helmet for SPA.
 */
const PageMeta = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
}: PageMetaProps) => {
  useEffect(() => {
    const fullTitle = title.includes(siteConfig.brandName)
      ? title
      : `${title} | ${siteConfig.brandName}`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string | undefined, property = false) => {
      if (!content) return;
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", ogTitle || fullTitle, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:type", "website", true);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, ogTitle, ogDescription, ogImage, canonical]);

  return null;
};

export default PageMeta;
