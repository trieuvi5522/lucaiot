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
import { useLanguage } from "@/i18n/LanguageContext";

const processIcons = [Search, PenTool, Cpu, Cable, LayoutDashboard, Settings];
const whyIcons = [Wrench, BookOpen, Award, Target, Handshake, Clock];

const About = () => {
  const { t, loc } = useLanguage();

  const focusAreas = [t.aboutFocus1, t.aboutFocus2, t.aboutFocus3, t.aboutFocus4, t.aboutFocus5, t.aboutFocus6];

  const processSteps = [
    { icon: processIcons[0], title: t.aboutStep1Title, desc: t.aboutStep1Desc },
    { icon: processIcons[1], title: t.aboutStep2Title, desc: t.aboutStep2Desc },
    { icon: processIcons[2], title: t.aboutStep3Title, desc: t.aboutStep3Desc },
    { icon: processIcons[3], title: t.aboutStep4Title, desc: t.aboutStep4Desc },
    { icon: processIcons[4], title: t.aboutStep5Title, desc: t.aboutStep5Desc },
    { icon: processIcons[5], title: t.aboutStep6Title, desc: t.aboutStep6Desc },
  ];

  const whyWorkWithMe = [
    { icon: whyIcons[0], title: t.aboutWhy1Title, desc: t.aboutWhy1Desc },
    { icon: whyIcons[1], title: t.aboutWhy2Title, desc: t.aboutWhy2Desc },
    { icon: whyIcons[2], title: t.aboutWhy3Title, desc: t.aboutWhy3Desc },
    { icon: whyIcons[3], title: t.aboutWhy4Title, desc: t.aboutWhy4Desc },
    { icon: whyIcons[4], title: t.aboutWhy5Title, desc: t.aboutWhy5Desc },
    { icon: whyIcons[5], title: t.aboutWhy6Title, desc: t.aboutWhy6Desc },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageMeta
        title={t.navAbout}
        description="Luca Nguyen — IoT Specialist & Automation Engineer."
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-accent font-display font-medium text-sm uppercase tracking-wider mb-3">{t.aboutHeroLabel}</p>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                {siteConfig.ownerName}
              </h1>
              <p className="mt-2 text-lg text-primary-foreground/70">{loc(siteConfig.role)}</p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">{t.aboutIntro1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">{t.aboutIntro2}</p>
          </div>
        </SectionWrapper>

        {/* What I Focus On */}
        <SectionWrapper title={t.aboutFocusTitle} className="bg-muted/50">
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
        <SectionWrapper title={t.aboutExpertiseTitle}>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.aboutSkills.map((skill, i) => {
              const colonIdx = skill.indexOf(":");
              const label = colonIdx > -1 ? skill.slice(0, colonIdx) : skill;
              const desc = colonIdx > -1 ? skill.slice(colonIdx + 1).trim() : "";
              return (
                <div
                  key={i}
                  className="bg-card rounded-lg border border-border p-5 shadow-card flex items-start gap-4"
                >
                  <div className="shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <CheckCircle2 size={16} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-card-foreground text-sm leading-snug">
                      {label}
                    </h3>
                    {desc && (
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                        {desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* How I Work */}
        <SectionWrapper title={t.aboutProcessTitle} subtitle={t.aboutProcessSubtitle} className="bg-muted/50">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border shadow-card">
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
        <SectionWrapper title={t.aboutWhyTitle}>
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
            <h2 className="text-3xl font-display font-bold">{t.aboutCtaTitle}</h2>
            <p className="mt-4 text-primary-foreground/70">{t.aboutCtaDesc}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton className="bg-accent text-accent-foreground hover:bg-accent/90" size="lg" />
              <CTAButton text={t.viewServices} to="/services" variant="secondary" size="lg" />
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default About;
