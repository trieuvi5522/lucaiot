import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import UseCaseCard from "@/components/UseCaseCard";
import PageMeta from "@/components/PageMeta";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCases } from "@/data/useCases";

const UseCases = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <PageMeta title={t.useCasesHeroTitle} description={t.useCasesHeroDesc} />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-accent font-display font-medium text-sm uppercase tracking-wider mb-3">{t.useCasesHeroLabel}</p>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                {t.useCasesHeroTitle}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/70">{t.useCasesHeroDesc}</p>
            </div>
          </div>
        </section>

        <SectionWrapper>
          {useCases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((uc) => (
                <UseCaseCard key={uc.id} useCase={uc} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t.useCasesEmpty}</p>
            </div>
          )}
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
