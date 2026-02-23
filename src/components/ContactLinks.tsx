import { Mail, MessageCircle, Facebook, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface ContactLinksProps {
  variant?: "default" | "light";
}

const ContactLinks = ({ variant = "default" }: ContactLinksProps) => {
  const iconClass =
    variant === "light"
      ? "text-primary-foreground/60 hover:text-accent"
      : "text-muted-foreground hover:text-accent";

  const links = [
    {
      href: `mailto:${siteConfig.contactEmail}`,
      icon: Mail,
      label: "Email",
    },
    {
      href: `https://wa.me/${siteConfig.whatsappPhone.replace(/[\s+]/g, "")}`,
      icon: MessageCircle,
      label: "WhatsApp",
    },
    {
      href: siteConfig.facebookUrl,
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: siteConfig.linkedinUrl,
      icon: Linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className={`${iconClass} transition-colors`}
          aria-label={link.label}
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
