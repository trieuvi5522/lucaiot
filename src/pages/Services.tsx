import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import PageMeta from "@/components/PageMeta";
import { hostingServices, customServices } from "@/data/services";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageMeta
        title="Services Offer"
        description="IoT hosting, consulting, and deployment services. Node-RED, ThingsBoard, industrial IoT, and smart home solutions."
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-accent font-display font-medium text-sm uppercase tracking-wider mb-3">What I Offer</p>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                Services Offer
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/70">
                From hosting to end-to-end IoT design and implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Hosting */}
        <SectionWrapper title="Hosting">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hostingServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            All hosting services include{" "}
            <span className="text-foreground font-medium">transparent public pricing</span>{" "}
            — view each service page for detailed plans and comparison.
          </p>
        </SectionWrapper>

        {/* Custom Services */}
        <SectionWrapper title="IoT Services" className="bg-muted/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Every IoT project is unique —{" "}
              <Link to="/contact" className="text-accent hover:underline font-medium">
                contact me for a free consultation and custom quote
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
