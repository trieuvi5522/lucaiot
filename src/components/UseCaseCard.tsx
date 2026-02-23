import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { UseCase } from "@/data/types";

interface UseCaseCardProps {
  useCase: UseCase;
}

const UseCaseCard = ({ useCase }: UseCaseCardProps) => {
  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="h-2 bg-accent" />
      <div className="p-6">
        <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent mb-2">
          {useCase.industry}
        </span>
        <h3 className="text-lg font-display font-semibold text-card-foreground mb-2">
          {useCase.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
          {useCase.shortDescription}
        </p>
        <Link
          to={`/use-cases/${useCase.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline group-hover:gap-2.5 transition-all"
        >
          Read case study <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default UseCaseCard;
