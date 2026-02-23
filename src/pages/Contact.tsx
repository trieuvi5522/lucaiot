import { useState } from "react";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ContactLinks from "@/components/ContactLinks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/data/siteConfig";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="c-name">Name *</Label>
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
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="c-company">Company</Label>
                      <Input
                        id="c-company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="c-subject">Subject *</Label>
                      <Input
                        id="c-subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="c-message">Message *</Label>
                    <Textarea
                      id="c-message"
                      rows={5}
                      required
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
              <div className="bg-card rounded-lg border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-card-foreground mb-4">Contact Information</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3 text-card-foreground">
                    <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                    <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-accent transition-colors">
                      {siteConfig.contactEmail}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-card-foreground">
                    <MessageCircle size={18} className="text-accent mt-0.5 shrink-0" />
                    <a
                      href={`https://wa.me/${siteConfig.whatsappPhone.replace(/[\s+]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      WhatsApp: {siteConfig.whatsappPhone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-card-foreground">
                    <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                    <span>Vietnam (Remote worldwide)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-card-foreground mb-4">Follow Me</h3>
                <ContactLinks />
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
