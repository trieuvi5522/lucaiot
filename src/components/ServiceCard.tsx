import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Factory, Home, Briefcase } from "lucide-react";
import { Service } from "@/data/types";
import { useLanguage } from "@/i18n/LanguageContext";
import { ReactNode } from "react";

interface ServiceCardProps {
  service: Service;
  hideCategoryLabel?: boolean;
  topVisual?: ReactNode;
  /** Inline icon shown next to the title in a single row */
  inlineIcon?: ReactNode;
  /** Enable premium hover glow + lift effect */
  hoverGlow?: boolean;
}

const ServiceCard = ({ service, hideCategoryLabel, topVisual, inlineIcon, hoverGlow }: ServiceCardProps) => {
  const { t, loc, localePath } = useLanguage();

  return (
    <div
      className={[
        "group bg-card rounded-lg border border-border p-6 shadow-card transition-all duration-300 flex flex-col h-full",
        hoverGlow
          ? "md:hover:-translate-y-1.5 md:hover:shadow-[0_8px_30px_-8px_hsl(var(--accent)/0.18)] md:hover:border-accent/30 focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
          : "hover:shadow-card-hover",
      ].join(" ")}
    >
      {!hideCategoryLabel && !inlineIcon && (
        <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent mb-3">
          {service.group === "hosting" ? t.sdHosting : t.sdService}
        </span>
      )}
      {topVisual && !inlineIcon && (
        <div className="mb-4 flex items-center h-8">
          {topVisual}
        </div>
      )}
      {inlineIcon ? (
        <div className="flex items-center gap-3 mb-3">
          <span className="shrink-0 w-7 h-7 flex items-center justify-center">{inlineIcon}</span>
          <h3 className="text-xl font-display font-semibold text-card-foreground min-h-[1.75rem] leading-snug">
            {loc(service.title)}
          </h3>
        </div>
      ) : (
        <h3 className="text-xl font-display font-semibold text-card-foreground mb-2 min-h-[1.75rem]">
          {loc(service.title)}
        </h3>
      )}
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
        {loc(service.shortDescription)}
      </p>
      <ul className="space-y-3 mb-6 flex-1">
        {service.bulletPoints.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-card-foreground leading-relaxed">
            <span className="w-4 h-4 mt-0.5 shrink-0 flex items-center justify-center">
              <CheckCircle2 size={16} className="text-accent" />
            </span>
            <span>{loc(point)}</span>
          </li>
        ))}
      </ul>
      <Link
        to={localePath(`/services/${service.slug}`)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline group-hover:gap-2.5 transition-all mt-auto"
      >
        {t.learnMore} <ArrowRight size={14} />
      </Link>
    </div>
  );
};

// Icon mapping for service cards on the Services listing page
const serviceIconMap: Record<string, ReactNode> = {
  "industrial-iot": <Factory size={24} className="text-accent" />,
  "smart-home-iot": <Home size={24} className="text-accent" />,
  "iot-consulting": <Briefcase size={24} className="text-accent" />,
};

export { serviceIconMap };
export default ServiceCard;
