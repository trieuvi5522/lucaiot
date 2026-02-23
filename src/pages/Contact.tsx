import { useState } from "react";
import { Mail, MessageCircle, Facebook, Linkedin, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CountryPhoneInput from "@/components/CountryPhoneInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/data/siteConfig";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "VN",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  const contactShortcuts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: siteConfig.whatsappPhone,
      href: `https://wa.me/${siteConfig.whatsappPhone.replace(/[\s+]/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contactEmail,
      href: `mailto:${siteConfig.contactEmail}`,
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Facebook",
      href: siteConfig.facebookUrl,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn",
      href: siteConfig.linkedinUrl,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-accent font-display font-medium text-sm uppercase tracking-wider mb-3">Get In Touch</p>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                Contact
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/70">
                Ready to start your IoT project? Let's talk.
              </p>
            </div>
          </div>
        </section>

        <SectionWrapper>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-card rounded-lg border border-border p-8 text-center shadow-card">
                  <h2 className="text-2xl font-display font-bold text-card-foreground">Thank You!</h2>
                  <p className="mt-3 text-muted-foreground">
                    Your message has been received. I'll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} className="mt-6">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="c-name">Full Name *</Label>
                    <Input
                      id="c-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="c-email">Email *</Label>
                    <Input
                      id="c-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <CountryPhoneInput
                    countryCode={formData.countryCode}
                    phone={formData.phone}
                    onCountryChange={(code) => setFormData({ ...formData, countryCode: code })}
                    onPhoneChange={(phone) => setFormData({ ...formData, phone })}
                    id="c-phone"
                  />
                  <div>
                    <Label htmlFor="c-message">Message *</Label>
                    <Textarea
                      id="c-message"
                      rows={6}
                      required
                      placeholder="Describe your project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact shortcuts */}
              <div className="bg-card rounded-lg border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-card-foreground mb-4">Direct Contact</h3>
                <ul className="space-y-4 text-sm">
                  {contactShortcuts.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target={s.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-card-foreground hover:text-accent transition-colors"
                      >
                        <s.icon size={18} className="text-accent shrink-0" />
                        <div>
                          <span className="block text-xs text-muted-foreground">{s.label}</span>
                          <span>{s.value}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guidance */}
              <div className="bg-card rounded-lg border border-border p-6 shadow-card">
                <div className="flex items-center gap-2 mb-3">
                  <Info size={16} className="text-accent" />
                  <h3 className="font-display font-semibold text-card-foreground">What to Include</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Your project goal or problem to solve</li>
                  <li>• Devices or equipment involved</li>
                  <li>• Dashboard or monitoring needs</li>
                  <li>• Expected timeline</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
