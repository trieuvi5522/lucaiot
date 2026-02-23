import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";

interface CTAButtonProps {
  text?: string;
  to?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
  showArrow?: boolean;
}

const CTAButton = ({
  text = siteConfig.primaryCTA,
  to = "/contact",
  variant = "default",
  size = "default",
  className = "",
  showArrow = true,
}: CTAButtonProps) => {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link to={to} className="inline-flex items-center gap-2">
        {text}
        {showArrow && <ArrowRight size={16} />}
      </Link>
    </Button>
  );
};

export default CTAButton;
