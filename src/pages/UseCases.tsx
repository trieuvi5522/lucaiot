import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import UseCaseCard from "@/components/UseCaseCard";
import PageMeta from "@/components/PageMeta";
import { useCases } from "@/data/useCases";

const UseCases = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageMeta
        title="Use Cases"
        description="Real-world IoT applications and solution patterns by Luca IoT."
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-accent font-display font-medium text-sm uppercase tracking-wider mb-3">Real Results</p>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                Use Cases
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/70">
                Real-world IoT applications and solution patterns.
              </p>
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
              <p className="text-muted-foreground">Use cases coming soon.</p>
            </div>
          )}
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
