import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Service } from "@/data/types";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="group bg-card rounded-lg border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
      <div className="flex-1">
        <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent mb-3">
          {service.group === "hosting" ? "Hosting" : "Service"}
        </span>
        <h3 className="text-xl font-display font-semibold text-card-foreground mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {service.shortDescription}
        </p>
        <ul className="space-y-2 mb-6">
          {service.bulletPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-card-foreground">
              <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to={`/services/${service.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline group-hover:gap-2.5 transition-all"
      >
        Learn more <ArrowRight size={14} />
      </Link>
    </div>
  );
};

export default ServiceCard;
