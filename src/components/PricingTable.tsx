import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingPlan } from "@/data/types";

interface PricingTableProps {
  plans: PricingPlan[];
  onSelectPlan: (planName: string) => void;
}

const PricingTable = ({ plans, onSelectPlan }: PricingTableProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative bg-card rounded-lg border p-6 flex flex-col ${
            plan.highlighted
              ? "border-accent shadow-lg ring-1 ring-accent/20"
              : "border-border shadow-card"
          }`}
        >
          {plan.highlighted && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>
          )}
          <div className="mb-6">
            <h3 className="text-lg font-display font-semibold text-card-foreground">{plan.name}</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-display font-bold text-card-foreground">{plan.price}</span>
              {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
            </div>
          </div>
          <ul className="space-y-2.5 mb-8 flex-1">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-card-foreground">
                <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => onSelectPlan(plan.name)}
            variant={plan.highlighted ? "default" : "outline"}
            className="w-full"
          >
            {plan.ctaText}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
