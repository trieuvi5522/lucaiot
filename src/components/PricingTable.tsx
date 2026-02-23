import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingPlan } from "@/data/types";

interface PricingTableProps {
  plans: PricingPlan[];
  onSelectPlan: (planName: string) => void;
}

// Extract all unique features across plans
const getAllFeatures = (plans: PricingPlan[]): string[] => {
  const allFeatures: string[] = [];
  plans.forEach((plan) => {
    plan.features.forEach((f) => {
      if (!allFeatures.includes(f)) allFeatures.push(f);
    });
  });
  return allFeatures;
};

const PricingTable = ({ plans, onSelectPlan }: PricingTableProps) => {
  const allFeatures = getAllFeatures(plans);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 border-b border-border text-sm font-display font-semibold text-muted-foreground w-1/4">
              Features
            </th>
            {plans.map((plan) => (
              <th
                key={plan.name}
                className={`p-4 border-b text-center ${
                  plan.highlighted
                    ? "border-accent bg-accent/5"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                    Most Popular
                  </span>
                )}
                <div className="font-display font-semibold text-card-foreground">{plan.name}</div>
                <div className="mt-1 flex items-baseline justify-center gap-0.5">
                  <span className="text-2xl font-display font-bold text-card-foreground">{plan.price}</span>
                  {plan.period && <span className="text-xs text-muted-foreground">{plan.period}</span>}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature) => (
            <tr key={feature} className="border-b border-border/50 last:border-b-0">
              <td className="p-3 text-sm text-foreground">{feature}</td>
              {plans.map((plan) => {
                const has = plan.features.includes(feature);
                return (
                  <td
                    key={plan.name}
                    className={`p-3 text-center ${plan.highlighted ? "bg-accent/5" : ""}`}
                  >
                    {has ? (
                      <Check size={16} className="text-accent mx-auto" />
                    ) : (
                      <X size={16} className="text-muted-foreground/30 mx-auto" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-4" />
            {plans.map((plan) => (
              <td key={plan.name} className={`p-4 text-center ${plan.highlighted ? "bg-accent/5" : ""}`}>
                <Button
                  onClick={() => onSelectPlan(plan.name)}
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full"
                >
                  {plan.ctaText}
                </Button>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PricingTable;
