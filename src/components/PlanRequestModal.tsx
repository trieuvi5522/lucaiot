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
import { siteConfig } from "@/data/siteConfig";

interface PlanRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: string;
  planName: string;
}

export interface PlanRequestData {
  name: string;
  email: string;
  company: string;
  message: string;
  service: string;
  plan: string;
}

const PlanRequestModal = ({ open, onOpenChange, serviceName, planName }: PlanRequestModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submission handler interface — implement actual email/API in Phase 3
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
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display">
            {submitted ? "Request Sent!" : `Request: ${planName}`}
          </DialogTitle>
          <DialogDescription>
            {submitted
              ? "We'll get back to you within 24 hours."
              : `Fill in your details to get started with the ${planName} plan for ${serviceName}.`}
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PlanRequestModal;
