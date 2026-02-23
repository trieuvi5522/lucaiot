import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Users, AlertTriangle, Settings, Cpu } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import PricingTable from "@/components/PricingTable";
import PlanRequestModal from "@/components/PlanRequestModal";
import CTAButton from "@/components/CTAButton";
import { getServiceBySlug, services } from "@/data/services";
import { useCases } from "@/data/useCases";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold">Service Not Found</h1>
            <Link to="/services" className="text-accent hover:underline mt-4 inline-block">
              ← Back to Services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedServices = services.filter((s) => service.relatedServiceIds.includes(s.id));
  const relatedUseCases = useCases.filter((u) => service.relatedUseCaseIds.includes(u.id));

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-accent mb-6 transition-colors">
              <ArrowLeft size={14} /> All Services
            </Link>
            <div className="max-w-3xl animate-fade-in">
              <span className="inline-block text-accent font-display font-medium text-xs uppercase tracking-wider mb-3">
                {service.group === "hosting" ? "Hosting" : "Service"}
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
                {service.heroText}
              </p>
              <div className="mt-6">
                <CTAButton className="bg-accent text-accent-foreground hover:bg-accent/90" size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Target Users */}
        <SectionWrapper title="Who Is This For?">
          <div className="max-w-3xl mx-auto space-y-3">
            {service.targetUsers.map((user, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border shadow-card">
                <Users size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-card-foreground">{user}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Pain Points */}
        <SectionWrapper title="Problems We Solve" className="bg-muted/50">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.painPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <AlertTriangle size={16} className="text-destructive mt-0.5 shrink-0" />
                <span className="text-sm text-card-foreground">{point}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Included Scope */}
        <SectionWrapper title="What's Included">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.includedScope.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Technical Capabilities */}
        <SectionWrapper title="Technical Capabilities" className="bg-muted/50">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.technicalCapabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground">
                <Cpu size={16} className="text-accent shrink-0" />
                <span className="text-sm">{cap}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Process Steps */}
        <SectionWrapper title="How It Works">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {service.processSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border shadow-card">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-display font-bold text-accent">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-card-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Pricing */}
        {service.pricingType === "public_packages" && service.pricingPlans ? (
          <SectionWrapper title="Pricing Plans" className="bg-muted/50">
            <div className="max-w-4xl mx-auto">
              <PricingTable plans={service.pricingPlans} onSelectPlan={handleSelectPlan} />
            </div>
          </SectionWrapper>
        ) : (
          <SectionWrapper title="Pricing" className="bg-muted/50">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-muted-foreground mb-6">
                Every project is unique. Contact me for a free consultation and custom quote.
              </p>
              <CTAButton size="lg" />
            </div>
          </SectionWrapper>
        )}

        {/* FAQ */}
        {service.faq.length > 0 && (
          <SectionWrapper title="Frequently Asked Questions">
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible>
                {service.faq.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-display">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </SectionWrapper>
        )}

        {/* Related */}
        {(relatedServices.length > 0 || relatedUseCases.length > 0) && (
          <SectionWrapper title="Related" className="bg-muted/50">
            <div className="max-w-3xl mx-auto">
              {relatedServices.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-display font-semibold mb-3 text-foreground">Related Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="px-3 py-1.5 text-sm bg-card border border-border rounded-md hover:border-accent transition-colors text-card-foreground"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {relatedUseCases.length > 0 && (
                <div>
                  <h3 className="font-display font-semibold mb-3 text-foreground">Related Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedUseCases.map((u) => (
                      <Link
                        key={u.id}
                        to={`/use-cases/${u.slug}`}
                        className="px-3 py-1.5 text-sm bg-card border border-border rounded-md hover:border-accent transition-colors text-card-foreground"
                      >
                        {u.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </SectionWrapper>
        )}

        {/* CTA */}
        <SectionWrapper dark className="text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-display font-bold">Ready to Get Started?</h2>
            <p className="mt-4 text-primary-foreground/70">Get a free consultation and let's discuss your project.</p>
            <div className="mt-6">
              <CTAButton className="bg-accent text-accent-foreground hover:bg-accent/90" size="lg" />
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />

      <PlanRequestModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceName={service.title}
        planName={selectedPlan}
      />
    </div>
  );
};

export default ServiceDetail;
