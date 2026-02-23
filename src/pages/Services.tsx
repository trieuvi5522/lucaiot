import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import { hostingServices, customServices } from "@/data/services";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-accent font-display font-medium text-sm uppercase tracking-wider mb-3">What I Offer</p>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                Services
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/70">
                From managed hosting to full IoT deployments — solutions for every stage of your IoT journey.
              </p>
            </div>
          </div>
        </section>

        {/* Hosting */}
        <SectionWrapper
          title="Hosting"
          subtitle="Managed cloud hosting for your IoT platforms. Focus on building, not infrastructure."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hostingServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </SectionWrapper>

        {/* Custom Services */}
        <SectionWrapper
          title="IoT Services"
          subtitle="End-to-end IoT design, deployment, and consulting tailored to your requirements."
          className="bg-muted/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
