import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import PageMeta from "@/components/PageMeta";
import { useLanguage } from "@/i18n/LanguageContext";
import { hostingServices, customServices } from "@/data/services";

const Services = () => {
  const { t, localePath } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <PageMeta title={t.servicesHeroTitle} description={t.servicesHeroDesc} />
      <Header />
      <main className="flex-1">
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-accent font-display font-medium text-sm uppercase tracking-wider mb-3">{t.servicesHeroLabel}</p>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                {t.servicesHeroTitle}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/70">{t.servicesHeroDesc}</p>
            </div>
          </div>
        </section>

        <SectionWrapper title={t.homeHostingTitle}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hostingServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">{t.servicesHostingNote}</p>
        </SectionWrapper>

        <SectionWrapper title={t.homeServicesTitle} className="bg-muted/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              {t.servicesIotNote}{" "}
              <Link to={localePath("/contact")} className="text-accent hover:underline font-medium">
                {t.contactForConsultation}
              </Link>.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
