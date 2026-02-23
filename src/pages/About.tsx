import {
  CheckCircle2,
  Award,
  BookOpen,
  Wrench,
  Target,
  Handshake,
  Clock,
  Search,
  PenTool,
  Cpu,
  Cable,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import PageMeta from "@/components/PageMeta";
import { siteConfig } from "@/data/siteConfig";

const focusAreas = [
  "Industrial IoT system design and deployment",
  "Communication protocol integration (RS485, Modbus, OPC UA, MQTT)",
  "Cloud IoT platforms (Node-RED, ThingsBoard PE/CE)",
  "Real-time dashboards, monitoring, and alert systems",
  "Smart home design and integration",
  "End-to-end project delivery from concept to maintenance",
];

const skills = [
  "RS485 / Modbus RTU & TCP",
  "OPC UA / BACnet",
  "MQTT / HTTP / WebSocket / CoAP",
  "Node-RED Development & Hosting",
  "ThingsBoard (PE & CE)",
  "InfluxDB / TimescaleDB",
  "Grafana / Custom Dashboards",
  "Raspberry Pi / Edge Gateways",
  "Home Assistant / Tuya / Zigbee",
  "Docker / Linux Server Admin",
  "Python / JavaScript / TypeScript",
  "AWS IoT / Azure IoT Hub",
];

const processSteps = [
  { icon: Search, title: "Requirement Discovery", desc: "Understand your operations, goals, and constraints." },
  { icon: PenTool, title: "Solution Design", desc: "Architecture, protocol selection, and data flow planning." },
  { icon: Cpu, title: "Device Selection", desc: "Choose the right sensors, gateways, and controllers." },
  { icon: Cable, title: "Connectivity & Integration", desc: "Connect devices using industrial protocols and cloud APIs." },
  { icon: LayoutDashboard, title: "Dashboard & Automation", desc: "Build monitoring dashboards, alerts, and scheduling." },
  { icon: Settings, title: "Operation & Maintenance", desc: "Ongoing support, updates, backups, and optimization." },
];

const whyWorkWithMe = [
  {
    icon: Wrench,
    title: "Hands-On Engineering",
    desc: "From wiring RS485 on the factory floor to deploying cloud dashboards — I handle every layer of the IoT stack.",
  },
  {
    icon: BookOpen,
    title: "Deep Protocol Knowledge",
    desc: "Extensive experience with industrial communication protocols and their real-world quirks and limitations.",
  },
  {
    icon: Award,
    title: "End-to-End Delivery",
    desc: "I don't just design — I deploy, commission, document, and maintain. Full lifecycle responsibility.",
  },
  {
    icon: Target,
    title: "Practical Solutions",
    desc: "I focus on what works in production, not theoretical architectures. Every solution is built for real-world reliability.",
  },
  {
    icon: Handshake,
    title: "Direct Communication",
    desc: "You work directly with me — no account managers, no layers. Clear, fast, and transparent collaboration.",
  },
  {
    icon: Clock,
    title: "Long-Term Support",
    desc: "I provide ongoing maintenance, monitoring, and optimization after deployment. Your system evolves with your needs.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageMeta
        title="About"
        description="Luca Nguyen — IoT Specialist & Automation Engineer. End-to-end IoT consulting, deployment, and maintenance."
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-accent font-display font-medium text-sm uppercase tracking-wider mb-3">About Me</p>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                {siteConfig.ownerName}
              </h1>
              <p className="mt-2 text-lg text-primary-foreground/70">{siteConfig.role}</p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">
              I'm an IoT specialist and automation engineer based in Vietnam with a passion for
              bridging the gap between industrial equipment and the digital world. I help businesses
              and individuals gain real-time visibility into their operations through reliable,
              well-engineered IoT systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              My work spans from wiring RS485 sensors on factory floors to building cloud-based
              dashboards that monitor thousands of data points. I specialize in industrial
              communication protocols, cloud IoT platforms, and creating end-to-end solutions
              that are practical, maintainable, and scalable.
            </p>
          </div>
        </SectionWrapper>

        {/* What I Focus On */}
        <SectionWrapper title="What I Focus On" className="bg-muted/50">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {focusAreas.map((area) => (
              <div key={area} className="flex items-start gap-2 text-foreground">
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{area}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Technical Expertise */}
        <SectionWrapper title="Technical Expertise">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* How I Work */}
        <SectionWrapper title="How I Work" subtitle="End-to-end process from discovery to operation." className="bg-muted/50">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border shadow-card">
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

        {/* Why Clients Work With Me */}
        <SectionWrapper title="Why Clients Work With Me">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWorkWithMe.map((item) => (
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

        {/* CTA */}
        <SectionWrapper dark className="text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-display font-bold">Let's Build Something Together</h2>
            <p className="mt-4 text-primary-foreground/70">
              Whether you need consulting, hosting, or a full IoT deployment — I'm here to help.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton className="bg-accent text-accent-foreground hover:bg-accent/90" size="lg" />
              <CTAButton text="View Services" to="/services" variant="secondary" size="lg" />
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default About;
