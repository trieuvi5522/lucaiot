import { Mail, MessageCircle, Facebook, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface ContactShortcutsProps {
  className?: string;
}

const ContactShortcuts = ({ className = "" }: ContactShortcutsProps) => {
  const shortcuts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: siteConfig.whatsappPhone,
      href: `https://wa.me/${siteConfig.whatsappPhone.replace(/[\s+]/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contactEmail,
      href: `mailto:${siteConfig.contactEmail}`,
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Facebook",
      href: siteConfig.facebookUrl,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn",
      href: siteConfig.linkedinUrl,
    },
  ];

  return (
    <div className={`space-y-2 ${className}`}>
      {shortcuts.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-sm leading-5 text-muted-foreground hover:text-accent transition-colors whitespace-nowrap"
        >
          <span className="flex items-center justify-center w-5 h-5 shrink-0">
            <s.icon size={16} />
          </span>
          <span>{s.value}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactShortcuts;
