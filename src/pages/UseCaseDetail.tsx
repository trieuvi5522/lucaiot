import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Target, Lightbulb, Layers, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import PageMeta from "@/components/PageMeta";
import { useLanguage } from "@/i18n/LanguageContext";
import { getUseCaseBySlug } from "@/data/useCases";
import { services } from "@/data/services";

const UseCaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const useCase = getUseCaseBySlug(slug || "");
  const { t, loc } = useLanguage();

  if (!useCase) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold">{t.udNotFound}</h1>
            <Link to="/use-cases" className="text-accent hover:underline mt-4 inline-block">
              ← {t.backToUseCases}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedServices = services.filter((s) => useCase.servicesUsed.includes(s.id));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageMeta title={loc(useCase.title)} description={loc(useCase.shortDescription)} />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Link to="/use-cases" className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-accent mb-6 transition-colors">
              <ArrowLeft size={14} /> {t.backToUseCases}
            </Link>
            <div className="max-w-3xl animate-fade-in">
              <span className="inline-block text-accent font-display font-medium text-xs uppercase tracking-wider mb-3">
                {loc(useCase.industry)}
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                {loc(useCase.title)}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
                {loc(useCase.shortDescription)}
              </p>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Target size={20} className="text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">{t.udChallenge}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{loc(useCase.challenge)}</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Solution */}
        <SectionWrapper className="bg-muted/50">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Lightbulb size={20} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">{t.udSolution}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{loc(useCase.solution)}</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Results */}
        <SectionWrapper title={t.udOutcomes}>
          <div className="max-w-3xl mx-auto space-y-3">
            {useCase.results.map((result, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border shadow-card">
                <TrendingUp size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-card-foreground">{loc(result)}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Services Used */}
        {relatedServices.length > 0 && (
          <SectionWrapper className="bg-muted/50">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Layers size={20} className="text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">{t.udServicesUsed}</h2>
                  <div className="flex flex-wrap gap-2">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="px-4 py-2 text-sm bg-card border border-border rounded-md hover:border-accent transition-colors text-card-foreground"
                      >
                        {loc(s.title)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        )}

        {/* CTA */}
        <SectionWrapper dark className="text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-display font-bold">{t.udCtaTitle}</h2>
            <p className="mt-4 text-primary-foreground/70">{t.udCtaDesc}</p>
            <div className="mt-6">
              <CTAButton className="bg-accent text-accent-foreground hover:bg-accent/90" size="lg" />
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default UseCaseDetail;
