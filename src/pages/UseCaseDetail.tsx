import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { getUseCaseBySlug } from "@/data/useCases";
import { services } from "@/data/services";

const UseCaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const useCase = getUseCaseBySlug(slug || "");

  if (!useCase) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold">Use Case Not Found</h1>
            <Link to="/use-cases" className="text-accent hover:underline mt-4 inline-block">
              ← Back to Use Cases
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
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Link to="/use-cases" className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-accent mb-6 transition-colors">
              <ArrowLeft size={14} /> All Use Cases
            </Link>
            <div className="max-w-3xl animate-fade-in">
              <span className="inline-block text-accent font-display font-medium text-xs uppercase tracking-wider mb-3">
                {useCase.industry}
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                {useCase.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <SectionWrapper title="The Challenge">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">{useCase.challenge}</p>
          </div>
        </SectionWrapper>

        {/* Solution */}
        <SectionWrapper title="The Solution" className="bg-muted/50">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">{useCase.solution}</p>
          </div>
        </SectionWrapper>

        {/* Results */}
        <SectionWrapper title="Results">
          <div className="max-w-3xl mx-auto space-y-3">
            {useCase.results.map((result, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border shadow-card">
                <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-card-foreground">{result}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Services Used */}
        {relatedServices.length > 0 && (
          <SectionWrapper title="Services Used" className="bg-muted/50">
            <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
              {relatedServices.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="px-4 py-2 text-sm bg-card border border-border rounded-md hover:border-accent transition-colors text-card-foreground"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </SectionWrapper>
        )}

        {/* CTA */}
        <SectionWrapper dark className="text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-display font-bold">Want Similar Results?</h2>
            <p className="mt-4 text-primary-foreground/70">Let's discuss how IoT can transform your operations.</p>
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
