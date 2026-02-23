import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/**
 * Fixed-width nav slots (px) sized to the longest label across EN/VI.
 * Order: Home, About, Services, Use Cases, Contact
 */
const NAV_SLOT_WIDTHS = [80, 90, 90, 110, 90];
const CTA_MIN_WIDTH = 160;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t, localePath } = useLanguage();

  const navLinks = [
    { href: localePath("/"), label: t.navHome },
    { href: localePath("/about"), label: t.navAbout },
    { href: localePath("/services"), label: t.navServices },
    { href: localePath("/use-cases"), label: t.navUseCases },
    { href: localePath("/contact"), label: t.navContact },
  ];

  const pathWithoutLocale = location.pathname.replace(/^\/(en|vi)/, "") || "/";

  const isActive = (href: string) => {
    const hrefClean = href.replace(/^\/(en|vi)/, "") || "/";
    return pathWithoutLocale === hrefClean;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Desktop: 3-column grid keeps logo / nav / actions pinned */}
      <div className="container mx-auto hidden md:grid h-16 px-4"
        style={{ gridTemplateColumns: "auto 1fr auto" }}>
        {/* Left: Logo */}
        <Link to={localePath("/")} className="flex items-center gap-1 font-display font-bold text-xl text-foreground whitespace-nowrap">
          <span className="text-accent">&lt;</span>
          {siteConfig.brandName}
          <span className="text-accent">/&gt;</span>
        </Link>

        {/* Center: Nav with fixed-width slots */}
        <nav className="flex items-center justify-center gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent text-center whitespace-nowrap ${
                isActive(link.href) ? "text-accent" : "text-muted-foreground"
              }`}
              style={{ width: NAV_SLOT_WIDTHS[i], minWidth: NAV_SLOT_WIDTHS[i] }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Language switch + CTA */}
        <div className="flex items-center gap-3 justify-end">
          <LanguageSwitcher />
          <Button asChild size="sm" className="whitespace-nowrap" style={{ minWidth: CTA_MIN_WIDTH }}>
            <Link to={localePath("/contact")}>{t.primaryCTA}</Link>
          </Button>
        </div>
      </div>

      {/* Mobile: simple flex */}
      <div className="container mx-auto flex md:hidden items-center justify-between h-16 px-4">
        <Link to={localePath("/")} className="flex items-center gap-1 font-display font-bold text-xl text-foreground whitespace-nowrap">
          <span className="text-accent">&lt;</span>
          {siteConfig.brandName}
          <span className="text-accent">/&gt;</span>
        </Link>
        <button
          className="p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block py-2.5 text-sm font-medium transition-colors hover:text-accent whitespace-nowrap ${
                isActive(link.href) ? "text-accent" : "text-muted-foreground"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between mt-3 mb-2">
            <span className="text-xs text-muted-foreground">Language</span>
            <LanguageSwitcher />
          </div>
          <Button asChild className="w-full mt-2 whitespace-nowrap" size="sm">
            <Link to={localePath("/contact")} onClick={() => setMobileOpen(false)}>
              {t.primaryCTA}
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
