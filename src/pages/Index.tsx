import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Wrench,
  Search,
  PenTool,
  Cpu,
  Cable,
  LayoutDashboard,
  Settings,
  Home as HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import UseCaseCard from "@/components/UseCaseCard";
import CTAButton from "@/components/CTAButton";
import ContactShortcuts from "@/components/ContactShortcuts";
import PageMeta from "@/components/PageMeta";
import { useLanguage } from "@/i18n/LanguageContext";
import { hostingServices, customServices } from "@/data/services";
import { useCases } from "@/data/useCases";
import heroBg from "@/assets/hero-bg.jpg";

const processIcons = [Search, PenTool, Cpu, Cable, LayoutDashboard, Settings];
const whoIcons = [HomeIcon, Building2, Wrench];

const Index = () => {
  const { t, localePath } = useLanguage();
  const featuredUseCases = useCases.slice(0, 2);

  const whoIHelp = [
    { icon: whoIcons[0], title: t.whoIndividualTitle, desc: t.whoIndividualDesc },
    { icon: whoIcons[1], title: t.whoBusinessTitle, desc: t.whoBusinessDesc },
    { icon: whoIcons[2], title: t.whoTechnicalTitle, desc: t.whoTechnicalDesc },
  ];

  const processSteps = [
    { icon: processIcons[0], title: t.processStep1Title, desc: t.processStep1Desc },
    { icon: processIcons[1], title: t.processStep2Title, desc: t.processStep2Desc },
    { icon: processIcons[2], title: t.processStep3Title, desc: t.processStep3Desc },
    { icon: processIcons[3], title: t.processStep4Title, desc: t.processStep4Desc },
    { icon: processIcons[4], title: t.processStep5Title, desc: t.processStep5Desc },
    { icon: processIcons[5], title: t.processStep6Title, desc: t.processStep6Desc },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageMeta
        title="Luca IoT — End-to-End IoT Solutions"
        description="IoT consulting, design, deployment, and maintenance by Luca Nguyen."
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-hero" style={{ mixBlendMode: "multiply" }} />
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-36">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
                {t.homeHeroTitle}
                <br className="hidden md:block" />
                <span className="text-gradient">{t.homeHeroHighlight}</span>
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
                {t.homeHeroDesc}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-delay">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to={localePath("/contact")}>
                    {t.primaryCTA} <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to={localePath("/services")}>{t.viewServices}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Hosting */}
        <SectionWrapper title={t.homeHostingTitle} subtitle={t.homeHostingSubtitle}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hostingServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            {t.homeHostingNote}{" "}
            <Link to={localePath("/services")} className="text-accent hover:underline">
              {t.viewPlans}
            </Link>
          </p>
        </SectionWrapper>

        {/* Services */}
        <SectionWrapper title={t.homeServicesTitle} subtitle={t.homeServicesSubtitle} className="bg-muted/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            {t.homeServicesNote}{" "}
            <Link to={localePath("/contact")} className="text-accent hover:underline">
              {t.bookFreeConsultation}
            </Link>
          </p>
        </SectionWrapper>

        {/* Who I Help */}
        <SectionWrapper title={t.homeWhoTitle} subtitle={t.homeWhoSubtitle}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoIHelp.map((item) => (
              <div key={item.title} className="bg-card rounded-lg border border-border p-6 shadow-card">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Process */}
        <SectionWrapper title={t.homeProcessTitle} subtitle={t.homeProcessSubtitle} className="bg-muted/50">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border shadow-card">
                <div className="shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-xs font-display font-bold text-accent">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-card-foreground text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Use Cases */}
        <SectionWrapper title={t.homeUseCasesTitle} subtitle={t.homeUseCasesSubtitle} className="bg-muted/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {featuredUseCases.map((uc) => (
              <UseCaseCard key={uc.id} useCase={uc} />
            ))}
          </div>
          <div className="text-center mt-8">
            <CTAButton text={t.viewAllUseCases} to="/use-cases" variant="outline" showArrow />
          </div>
        </SectionWrapper>

        {/* Final CTA */}
        <SectionWrapper dark className="text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold">{t.homeCtaTitle}</h2>
            <p className="mt-4 text-primary-foreground/70 text-lg">{t.homeCtaDesc}</p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to={localePath("/contact")}>
                  {t.bookConsultation} <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="mt-6">
              <ContactShortcuts className="flex flex-wrap justify-center gap-4 text-primary-foreground/50 [&_a]:text-primary-foreground/50 [&_a:hover]:text-accent" />
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
