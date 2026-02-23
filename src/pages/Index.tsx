import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Building2,
  Wrench,
  Search,
  PenTool,
  Cpu,
  Cable,
  LayoutDashboard,
  Settings,
  Server,
  Home as HomeIcon,
  Lightbulb,
  Shield,
  Zap,
  BarChart3,
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
import { siteConfig } from "@/data/siteConfig";
import { hostingServices, customServices } from "@/data/services";
import { useCases } from "@/data/useCases";
import heroBg from "@/assets/hero-bg.jpg";

const whoIHelp = [
  {
    icon: HomeIcon,
    title: "Individual Clients",
    desc: "Smart home solutions — lighting, climate, security, and energy monitoring tailored to your lifestyle.",
  },
  {
    icon: Building2,
    title: "Business Clients",
    desc: "Industrial monitoring, energy management, machine status tracking, scheduling, data storage, and automated alerts.",
  },
  {
    icon: Wrench,
    title: "Technical Teams",
    desc: "Node-RED & ThingsBoard hosting, infrastructure setup, technical consulting, and managed IoT operations.",
  },
];

const processSteps = [
  { icon: Search, title: "Requirement Discovery", desc: "Understand your operations, goals, and constraints." },
  { icon: PenTool, title: "Solution Design", desc: "Architecture, protocol selection, and data flow planning." },
  { icon: Cpu, title: "Device Selection", desc: "Choose the right sensors, gateways, and controllers." },
  {
    icon: Cable,
    title: "Connectivity & Integration",
    desc: "Connect devices using industrial protocols and cloud APIs.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Automation",
    desc: "Build monitoring dashboards, alerts, and scheduling.",
  },
  { icon: Settings, title: "Operation & Maintenance", desc: "Ongoing support, updates, backups, and optimization." },
];

const expertise = [
  { icon: Server, title: "Industrial Protocols", desc: "RS485, Modbus RTU/TCP, OPC UA, TCP/IP" },
  { icon: Lightbulb, title: "Cloud & Edge Integration", desc: "MQTT, REST APIs, Node-RED, ThingsBoard, InfluxDB" },
  {
    icon: BarChart3,
    title: "Dashboards & Monitoring",
    desc: "Real-time visualization, alerts, scheduling, data storage",
  },
  { icon: Shield, title: "Security & Reliability", desc: "SSL/TLS, access control, automated backups, 99.9% uptime" },
];

const Index = () => {
  const featuredUseCases = useCases.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <PageMeta
        title="Luca IoT — End-to-End IoT Solutions"
        description="IoT consulting, design, deployment, and maintenance by Luca Nguyen. Industrial protocols, cloud dashboards, and smart automation."
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
                Design End-to-End <span className="text-gradient">IoT Solutions</span> for You
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
                From industrial protocols to cloud dashboards — I design, deploy, and maintain IoT systems that give you
                real-time visibility and control over your operations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-delay">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    {siteConfig.primaryCTA} <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do — Hosting */}
        <SectionWrapper
          title="Hosting"
          subtitle="Managed cloud hosting for your IoT platforms. Focus on building, not infrastructure."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hostingServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            All hosting plans include transparent public pricing →{" "}
            <Link to="/services" className="text-accent hover:underline">
              View plans
            </Link>
          </p>
        </SectionWrapper>

        {/* What I Do — Services */}
        <SectionWrapper
          title="IoT Services"
          subtitle="End-to-end IoT design, deployment, and consulting tailored to your requirements."
          className="bg-muted/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Custom IoT projects →{" "}
            <Link to="/contact" className="text-accent hover:underline">
              Contact for a free consultation
            </Link>
          </p>
        </SectionWrapper>

        {/* Who I Help */}
        <SectionWrapper title="Who I Help" subtitle="IoT solutions for individuals, businesses, and technical teams.">
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

        {/* End-to-End Process */}
        <SectionWrapper
          title="End-to-End Process"
          subtitle="From discovery to operation — I handle every stage of your IoT project."
          className="bg-muted/50"
        >
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border shadow-card"
              >
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

        {/* Technical Expertise */}
        <SectionWrapper
          title="Technical Expertise"
          subtitle="Deep knowledge in industrial protocols, cloud platforms, and IoT infrastructure."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {expertise.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-card-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Featured Use Cases */}
        <SectionWrapper
          title="Use Cases"
          subtitle="Real-world IoT implementations delivering measurable results."
          className="bg-muted/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {featuredUseCases.map((uc) => (
              <UseCaseCard key={uc.id} useCase={uc} />
            ))}
          </div>
          <div className="text-center mt-8">
            <CTAButton text="View All Use Cases" to="/use-cases" variant="outline" showArrow />
          </div>
        </SectionWrapper>

        {/* Final CTA */}
        <SectionWrapper dark className="text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Ready to Connect Your World?</h2>
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
