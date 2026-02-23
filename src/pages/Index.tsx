import { Link } from "react-router-dom";
import { ArrowRight, Server, Cpu, Home, Lightbulb, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import UseCaseCard from "@/components/UseCaseCard";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { useCases } from "@/data/useCases";
import heroBg from "@/assets/hero-bg.jpg";

const capabilities = [
  { icon: Server, title: "Industrial Protocols", desc: "RS485, Modbus, OPC UA, BACnet, TCP/IP" },
  { icon: Cpu, title: "Edge Computing", desc: "Node-RED, Raspberry Pi, industrial gateways" },
  { icon: Home, title: "Cloud Integration", desc: "ThingsBoard, MQTT, REST APIs, InfluxDB" },
  { icon: Shield, title: "Security", desc: "SSL/TLS, access control, data encryption" },
  { icon: Zap, title: "Real-Time Monitoring", desc: "Dashboards, alerts, scheduling, data storage" },
  { icon: Lightbulb, title: "Smart Automation", desc: "Custom logic, scene control, energy optimization" },
];

const Index = () => {
  const featuredServices = services.slice(0, 4);
  const featuredUseCases = useCases.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
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
              <p className="text-accent font-display font-medium text-sm uppercase tracking-wider mb-4">
                {siteConfig.role}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
                End-to-End{" "}
                <span className="text-gradient">IoT Solutions</span>{" "}
                You Can Trust
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
                From industrial protocols to cloud dashboards — I design, deploy, and maintain
                IoT systems that give you real-time visibility and control over your operations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-delay">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    {siteConfig.primaryCTA} <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <SectionWrapper
          title="Technical Capabilities"
          subtitle="Deep expertise in industrial communication protocols, cloud platforms, and IoT infrastructure."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border shadow-card">
                <div className="shrink-0 w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                  <cap.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-card-foreground">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Services */}
        <SectionWrapper
          title="Services"
          subtitle="Managed hosting and custom IoT solutions tailored to your needs."
          className="bg-muted/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <CTAButton text="View All Services" to="/services" variant="outline" showArrow />
          </div>
        </SectionWrapper>

        {/* Use Cases */}
        <SectionWrapper
          title="Use Cases"
          subtitle="Real-world IoT implementations delivering measurable results."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredUseCases.map((uc) => (
              <UseCaseCard key={uc.id} useCase={uc} />
            ))}
          </div>
          <div className="text-center mt-8">
            <CTAButton text="View All Use Cases" to="/use-cases" variant="outline" showArrow />
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper dark className="text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Ready to Connect Your World?
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg">
              Let's discuss how IoT can transform your operations. Get a free consultation today.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  {siteConfig.primaryCTA} <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
