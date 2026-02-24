import { Cpu, HardDrive, MemoryStick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingPlan } from "@/data/types";

interface PricingRowListProps {
  plans: PricingPlan[];
  onSelectPlan: (planName: string) => void;
}

const specIcon: Record<string, React.ReactNode> = {
  vCPU: <Cpu size={14} className="text-accent" />,
  RAM: <MemoryStick size={14} className="text-accent" />,
  Disk: <HardDrive size={14} className="text-accent" />,
};

const PricingRowList = ({ plans, onSelectPlan }: PricingRowListProps) => {
  return (
    <div className="space-y-3">
      {/* Header row — desktop only */}
      <div className="hidden md:grid md:grid-cols-[minmax(160px,1.5fr)_80px_80px_80px_100px_120px] items-center gap-2 px-5 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <span>Plan</span>
        <span className="text-center">vCPU</span>
        <span className="text-center">RAM</span>
        <span className="text-center">Disk</span>
        <span className="text-center">Price</span>
        <span />
      </div>

      {plans.map((plan) => {
        const specs = plan.specs ?? [];
        const vCPU = specs.find((s) => s.label === "vCPU")?.value ?? "—";
        const ram = specs.find((s) => s.label === "RAM")?.value ?? "—";
        const disk = specs.find((s) => s.label === "Disk")?.value ?? "—";

        return (
          <div
            key={plan.name}
            className={`rounded-lg border p-5 transition-all ${
              plan.highlighted
                ? "border-accent bg-accent/5 shadow-md"
                : "border-border bg-card shadow-card"
            }`}
          >
            {/* Desktop row */}
            <div className="hidden md:grid md:grid-cols-[minmax(160px,1.5fr)_80px_80px_80px_100px_120px] items-center gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-display font-semibold text-card-foreground truncate">{plan.name}</span>
                {plan.highlighted && (
                  <span className="shrink-0 inline-block bg-accent text-accent-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <span className="text-center text-sm text-card-foreground">{vCPU}</span>
              <span className="text-center text-sm text-card-foreground">{ram}</span>
              <span className="text-center text-sm text-card-foreground">{disk}</span>
              <div className="text-center">
                <span className="font-display font-bold text-card-foreground">{plan.price}</span>
                {plan.period && <span className="text-xs text-muted-foreground">{plan.period}</span>}
              </div>
              <Button
                size="sm"
                variant={plan.highlighted ? "default" : "outline"}
                onClick={() => onSelectPlan(plan.name)}
              >
                {plan.ctaText}
              </Button>
            </div>

            {/* Mobile stacked */}
            <div className="md:hidden space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-display font-semibold text-card-foreground">{plan.name}</span>
                  {plan.highlighted && (
                    <span className="ml-2 inline-block bg-accent text-accent-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full align-middle">
                      Popular
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <span className="font-display font-bold text-card-foreground">{plan.price}</span>
                  {plan.period && <span className="text-xs text-muted-foreground">{plan.period}</span>}
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">{specIcon.vCPU} {vCPU}</span>
                <span className="flex items-center gap-1">{specIcon.RAM} {ram}</span>
                <span className="flex items-center gap-1">{specIcon.Disk} {disk}</span>
              </div>
              <Button
                size="sm"
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full"
                onClick={() => onSelectPlan(plan.name)}
              >
                {plan.ctaText}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingRowList;
