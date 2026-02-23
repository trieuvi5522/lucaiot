import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import ContactLinks from "@/components/ContactLinks";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display font-bold text-xl">
              <span className="text-accent">&lt;</span>
              {siteConfig.brandName}
              <span className="text-accent">/&gt;</span>
            </Link>
            <p className="mt-3 text-sm text-primary-foreground/70 max-w-xs">
              End-to-end IoT consulting, design, deployment, and maintenance services.
            </p>
            <div className="mt-4">
              <ContactLinks variant="light" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/use-cases", label: "Use Cases" },
                { href: "/about", label: "About Me" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-accent transition-colors">
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappPhone.replace(/[\s+]/g, "")}`}
                  className="hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {siteConfig.whatsappPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
