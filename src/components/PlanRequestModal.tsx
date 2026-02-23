import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import CountryPhoneInput from "@/components/CountryPhoneInput";
import ContactShortcuts from "@/components/ContactShortcuts";
import { siteConfig } from "@/data/siteConfig";
import { Separator } from "@/components/ui/separator";

interface PlanRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: string;
  planName: string;
  planPrice?: string;
  planPeriod?: string;
  planFeatures?: string[];
}

export interface PlanRequestData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  notes: string;
  service: string;
  plan: string;
}

const PlanRequestModal = ({
  open,
  onOpenChange,
  serviceName,
  planName,
  planPrice,
  planPeriod,
  planFeatures,
}: PlanRequestModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "VN",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requestData: PlanRequestData = {
      ...formData,
      service: serviceName,
      plan: planName,
    };
    console.log("Plan request submitted:", requestData);
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", countryCode: "VN", phone: "", notes: "" });
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display">
            {submitted ? "Request Sent!" : `Request: ${planName}`}
          </DialogTitle>
          <DialogDescription>
            {submitted
              ? "We'll get back to you within 24 hours."
              : `${serviceName} — ${planName} plan`}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="text-center py-4">
            <p className="text-sm text-muted-foreground">
              In the meantime, feel free to reach us at{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:underline">
                {siteConfig.contactEmail}
              </a>
            </p>
            <Button onClick={handleClose} className="mt-4">
              Close
            </Button>
          </div>
        ) : (
          <>
            {/* Plan summary */}
            {(planPrice || planFeatures) && (
              <div className="bg-muted/50 rounded-lg p-4 mb-2">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xl font-display font-bold text-foreground">{planPrice}</span>
                  {planPeriod && <span className="text-sm text-muted-foreground">{planPeriod}</span>}
                </div>
                {planFeatures && planFeatures.length > 0 && (
                  <ul className="space-y-1">
                    {planFeatures.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 size={12} className="text-accent shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                    {planFeatures.length > 4 && (
                      <li className="text-xs text-muted-foreground/60 pl-5">
                        +{planFeatures.length - 4} more features
                      </li>
                    )}
                  </ul>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="plan-name">Full Name *</Label>
                <Input
                  id="plan-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="plan-email">Email *</Label>
                <Input
                  id="plan-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <CountryPhoneInput
                countryCode={formData.countryCode}
                phone={formData.phone}
                onCountryChange={(code) => setFormData({ ...formData, countryCode: code })}
                onPhoneChange={(phone) => setFormData({ ...formData, phone })}
                id="plan-phone"
              />
              <div>
                <Label htmlFor="plan-notes">Notes / Requirements</Label>
                <Textarea
                  id="plan-notes"
                  rows={3}
                  placeholder="Any specific requirements or questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full">
                Request This Plan
              </Button>
            </form>

            <Separator className="my-2" />

            {/* Contact shortcuts */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">Or contact directly:</p>
              <ContactShortcuts />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PlanRequestModal;
