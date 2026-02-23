import { useState } from "react";
import { Info, Loader2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CountryPhoneInput from "@/components/CountryPhoneInput";
import ContactShortcuts from "@/components/ContactShortcuts";
import PageMeta from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/i18n/LanguageContext";
import { submitContactForm } from "@/lib/submitForm";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "VN",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitContactForm(formData);
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageMeta title={t.contactHeroTitle} description={t.contactHeroDesc} />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-accent font-display font-medium text-sm uppercase tracking-wider mb-3">{t.contactHeroLabel}</p>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                {t.contactHeroTitle}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/70">{t.contactHeroDesc}</p>
            </div>
          </div>
        </section>

        <SectionWrapper>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {status === "success" ? (
                <div className="bg-card rounded-lg border border-border p-8 text-center shadow-card">
                  <h2 className="text-2xl font-display font-bold text-card-foreground">{t.contactThankTitle}</h2>
                  <p className="mt-3 text-muted-foreground">{t.contactThankDesc}</p>
                  <Button onClick={() => { setStatus("idle"); setFormData({ name: "", email: "", countryCode: "VN", phone: "", message: "" }); }} className="mt-6">
                    {t.contactSendAnother}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="c-name">{t.formFullName}</Label>
                    <Input id="c-name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} disabled={status === "loading"} />
                  </div>
                  <div>
                    <Label htmlFor="c-email">{t.formEmail}</Label>
                    <Input id="c-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled={status === "loading"} />
                  </div>
                  <CountryPhoneInput
                    countryCode={formData.countryCode}
                    phone={formData.phone}
                    onCountryChange={(code) => setFormData({ ...formData, countryCode: code })}
                    onPhoneChange={(phone) => setFormData({ ...formData, phone })}
                    id="c-phone"
                  />
                  <div>
                    <Label htmlFor="c-message">{t.formMessage}</Label>
                    <Textarea
                      id="c-message"
                      rows={6}
                      required
                      placeholder={t.formMessagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={status === "loading"}
                    />
                  </div>

                  {status === "error" && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <p className="text-sm text-destructive font-medium mb-2">
                        {t.contactFailedPrefix} {errorMsg}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3">{t.contactRetryMsg}</p>
                      <ContactShortcuts />
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />
                        {t.formSending}
                      </>
                    ) : (
                      t.sendMessage
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-lg border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-card-foreground mb-4">{t.contactDirectTitle}</h3>
                <ContactShortcuts />
              </div>

              <div className="bg-card rounded-lg border border-border p-6 shadow-card">
                <div className="flex items-center gap-2 mb-3">
                  <Info size={16} className="text-accent" />
                  <h3 className="font-display font-semibold text-card-foreground">{t.contactGuideTitle}</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t.contactGuide1}</li>
                  <li>• {t.contactGuide2}</li>
                  <li>• {t.contactGuide3}</li>
                  <li>• {t.contactGuide4}</li>
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
