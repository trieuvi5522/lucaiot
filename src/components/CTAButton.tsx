import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

interface CTAButtonProps {
  text?: string;
  to?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
  showArrow?: boolean;
}

const CTAButton = ({
  text,
  to = "/contact",
  variant = "default",
  size = "default",
  className = "",
  showArrow = true,
}: CTAButtonProps) => {
  const { t, localePath } = useLanguage();
  const label = text ?? t.primaryCTA;

  // Handle hash links (e.g. "#pricing") — don't prefix with locale
  const href = to.startsWith("#") ? to : localePath(to);

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link to={href} className="inline-flex items-center gap-2">
        {label}
        {showArrow && <ArrowRight size={16} />}
      </Link>
    </Button>
  );
};

export default CTAButton;
