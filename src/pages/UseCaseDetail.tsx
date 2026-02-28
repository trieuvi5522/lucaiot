import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Target, Lightbulb, Layers, TrendingUp, Zap, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import PageMeta from "@/components/PageMeta";
import { useLanguage } from "@/i18n/LanguageContext";
import { getUseCaseBySlug } from "@/data/useCases";
import { services } from "@/data/services";

/** Render body text: lines starting with •/-/* become list items, numbered lines as-is, rest as <p> */
const RenderBody = ({ text }: { text: string }) => {
  const lines = text.split("\n").filter(Boolean);
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="space-y-1.5 ml-1">
          {currentList.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
              <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (/^[•\-\*]\s/.test(trimmed)) {
      currentList.push(trimmed.replace(/^[•\-\*]\s*/, ""));
    } else {
      flushList();
      elements.push(
        <p key={`p-${i}`} className="text-muted-foreground leading-relaxed">{trimmed}</p>
      );
    }
  });
  flushList();

  return <div className="space-y-3">{elements}</div>;
};

/** Simple lightbox for section images */
const ImageLightbox = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
    <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white" aria-label="Close">
      <X size={28} />
    </button>
    <img src={src} alt={alt} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain" />
  </div>
);

const UseCaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const useCase = getUseCaseBySlug(slug || "");
  const { t, loc, localePath } = useLanguage();
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  if (!useCase) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold">{t.udNotFound}</h1>
            <Link to={localePath("/use-cases")} className="text-accent hover:underline mt-4 inline-block">
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
      {lightboxImg && <ImageLightbox src={lightboxImg.src} alt={lightboxImg.alt} onClose={() => setLightboxImg(null)} />}
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Link to={localePath("/use-cases")} className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-accent mb-6 transition-colors">
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

        {/* Hero Image */}
        {useCase.heroImage && (
          <SectionWrapper>
            <div className="max-w-4xl mx-auto">
              <img
                src={useCase.heroImage}
                alt={loc(useCase.title)}
                className="w-full rounded-lg border border-border shadow-card cursor-pointer hover:shadow-card-hover transition-shadow"
                loading="lazy"
                onClick={() => setLightboxImg({ src: useCase.heroImage!, alt: loc(useCase.title) })}
              />
            </div>
          </SectionWrapper>
        )}

        {/* Challenge */}
        <SectionWrapper className={useCase.heroImage ? "" : ""}>
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

        {/* Sections (if any) */}
        {useCase.sections?.map((section, idx) => (
          <SectionWrapper key={section.id} className={idx % 2 === 0 ? "" : "bg-muted/50"}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                {loc(section.title)}
              </h3>
              <RenderBody text={loc(section.body)} />
              {section.image && (
                <div className="mt-6">
                  <img
                    src={section.image}
                    alt={section.imageAlt ? loc(section.imageAlt) : loc(section.title)}
                    className="w-full rounded-lg border border-border shadow-card cursor-pointer hover:shadow-card-hover transition-shadow"
                    loading="lazy"
                    onClick={() => setLightboxImg({
                      src: section.image!,
                      alt: section.imageAlt ? loc(section.imageAlt) : loc(section.title),
                    })}
                  />
                  {section.imageCaption && (
                    <p className="mt-2 text-xs text-muted-foreground text-center italic">{loc(section.imageCaption)}</p>
                  )}
                  {!section.imageCaption && section.imageAlt && (
                    <p className="mt-2 text-xs text-muted-foreground text-center italic">{loc(section.imageAlt)}</p>
                  )}
                </div>
              )}
            </div>
          </SectionWrapper>
        ))}

        {/* Tech Highlights */}
        {useCase.techHighlights && useCase.techHighlights.length > 0 && (
          <SectionWrapper title={t.udTechHighlights} className="bg-muted/50">
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {useCase.techHighlights.map((th, i) => (
                <div key={i} className="bg-card rounded-lg border border-border p-5 shadow-card">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={16} className="text-accent shrink-0" />
                    <h4 className="font-display font-semibold text-card-foreground text-sm">{loc(th.feature)}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    <span className="font-medium text-foreground/80">{t.udApproach}:</span> {loc(th.technical)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground/80">{t.udBenefit}:</span> {loc(th.benefit)}
                  </p>
                </div>
              ))}
            </div>
          </SectionWrapper>
        )}

        {/* Outcomes */}
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
                      <Link key={s.id} to={localePath(`/services/${s.slug}`)} className="px-4 py-2 text-sm bg-card border border-border rounded-md hover:border-accent transition-colors text-card-foreground">
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
