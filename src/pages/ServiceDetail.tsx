import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Users, AlertTriangle, Cpu } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import PricingTable from "@/components/PricingTable";
import PlanRequestModal from "@/components/PlanRequestModal";
import CTAButton from "@/components/CTAButton";
import PageMeta from "@/components/PageMeta";
import { useLanguage } from "@/i18n/LanguageContext";
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
  const { t, loc, localePath } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold">{t.sdNotFound}</h1>
            <Link to={localePath("/services")} className="text-accent hover:underline mt-4 inline-block">
              ← {t.backToServices}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedServices = services.filter((s) => service.relatedServiceIds.includes(s.id));
  const relatedUseCases = useCases.filter((u) => service.relatedUseCaseIds.includes(u.id));
  const isHosting = service.group === "hosting";

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  const selectedPlanData = service.pricingPlans?.find((p) => p.name === selectedPlan);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageMeta title={loc(service.title)} description={loc(service.shortDescription)} />
      <main className="flex-1">
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Link to={localePath("/services")} className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-accent mb-6 transition-colors">
              <ArrowLeft size={14} /> {t.backToServices}
            </Link>
            <div className="max-w-3xl animate-fade-in">
              <span className="inline-block text-accent font-display font-medium text-xs uppercase tracking-wider mb-3">
                {isHosting ? t.sdHosting : t.sdService}
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                {loc(service.title)}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
                {loc(service.heroText)}
              </p>
              <div className="mt-6">
                {isHosting ? (
                  <CTAButton text={t.startNow} className="bg-accent text-accent-foreground hover:bg-accent/90" size="lg" to="#pricing" />
                ) : (
                  <CTAButton className="bg-accent text-accent-foreground hover:bg-accent/90" size="lg" />
                )}
              </div>
            </div>
          </div>
        </section>

        <SectionWrapper title={t.sdWhoFor}>
          <div className="max-w-3xl mx-auto space-y-3">
            {service.targetUsers.map((user, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border shadow-card">
                <Users size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-card-foreground">{loc(user)}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title={t.sdProblems} className="bg-muted/50">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.painPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <AlertTriangle size={16} className="text-destructive mt-0.5 shrink-0" />
                <span className="text-sm text-card-foreground">{loc(point)}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title={t.sdIncluded}>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.includedScope.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span className="text-sm">{loc(item)}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title={t.sdCapabilities} className="bg-muted/50">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.technicalCapabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground">
                <Cpu size={16} className="text-accent shrink-0" />
                <span className="text-sm">{cap}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title={t.sdProcess}>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {service.processSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border shadow-card">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-display font-bold text-accent">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-card-foreground">{loc(step.title)}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{loc(step.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {service.pricingType === "public_packages" && service.pricingPlans ? (
          <SectionWrapper title={t.sdPricingPlans} className="bg-muted/50" id="pricing">
            <div className="max-w-4xl mx-auto">
              <PricingTable plans={service.pricingPlans} onSelectPlan={handleSelectPlan} />
            </div>
          </SectionWrapper>
        ) : (
          <SectionWrapper title={t.sdPricing} className="bg-muted/50">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-muted-foreground mb-2">{t.sdPricingCustom}</p>
              <p className="text-sm text-muted-foreground/70 mb-6">{t.sdPricingCustomDesc}</p>
              <CTAButton size="lg" />
            </div>
          </SectionWrapper>
        )}

        {service.faq.length > 0 && (
          <SectionWrapper title={t.sdFaq}>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible>
                {service.faq.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-display">{loc(item.question)}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{loc(item.answer)}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </SectionWrapper>
        )}

        {(relatedServices.length > 0 || relatedUseCases.length > 0) && (
          <SectionWrapper title={t.sdRelated} className="bg-muted/50">
            <div className="max-w-3xl mx-auto">
              {relatedServices.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-display font-semibold mb-3 text-foreground">{t.sdRelatedServices}</h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedServices.map((s) => (
                      <Link key={s.id} to={localePath(`/services/${s.slug}`)} className="px-3 py-1.5 text-sm bg-card border border-border rounded-md hover:border-accent transition-colors text-card-foreground">
                        {loc(s.title)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {relatedUseCases.length > 0 && (
                <div>
                  <h3 className="font-display font-semibold mb-3 text-foreground">{t.sdRelatedUseCases}</h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedUseCases.map((u) => (
                      <Link key={u.id} to={localePath(`/use-cases/${u.slug}`)} className="px-3 py-1.5 text-sm bg-card border border-border rounded-md hover:border-accent transition-colors text-card-foreground">
                        {loc(u.title)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </SectionWrapper>
        )}

        <SectionWrapper dark className="text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-display font-bold">{t.sdCtaTitle}</h2>
            <p className="mt-4 text-primary-foreground/70">{t.sdCtaDesc}</p>
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
        serviceName={loc(service.title)}
        planName={selectedPlan}
        planPrice={selectedPlanData?.price}
        planPeriod={selectedPlanData?.period}
        planFeatures={selectedPlanData?.features}
      />
    </div>
  );
};

export default ServiceDetail;
