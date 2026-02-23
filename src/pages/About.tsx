import { CheckCircle2, Award, BookOpen, Wrench } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/data/siteConfig";

const skills = [
  "RS485 / Modbus RTU & TCP",
  "OPC UA / BACnet",
  "MQTT / HTTP / WebSocket",
  "Node-RED Development",
  "ThingsBoard (PE & CE)",
  "InfluxDB / TimescaleDB",
  "Grafana / Custom Dashboards",
  "Raspberry Pi / Edge Gateways",
  "Home Assistant / Tuya",
  "Docker / Linux Server Admin",
  "Python / JavaScript / TypeScript",
  "AWS IoT / Azure IoT Hub",
];

const highlights = [
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
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
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

        {/* Bio */}
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
              communication protocols, cloud IoT platforms (Node-RED, ThingsBoard), and creating
              end-to-end solutions that are practical, maintainable, and scalable.
            </p>
          </div>
        </SectionWrapper>

        {/* Highlights */}
        <SectionWrapper className="bg-muted/50" title="Why Work With Me">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-card rounded-lg border border-border p-6 shadow-card">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <h.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-card-foreground mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Skills */}
        <SectionWrapper title="Technical Skills">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>{skill}</span>
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

export default About;
