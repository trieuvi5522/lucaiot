import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams } from "react-router-dom";
import { LanguageProvider, isValidLocale } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import UseCases from "./pages/UseCases";
import UseCaseDetail from "./pages/UseCaseDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LocaleRedirect from "./components/LocaleRedirect";

const queryClient = new QueryClient();

/**
 * Validates the :locale param. If invalid, redirects to /en + rest of path.
 * Otherwise wraps children with LanguageProvider.
 */
const LocaleLayout = () => {
  const { locale } = useParams<{ locale: string }>();

  if (!locale || !isValidLocale(locale)) {
    // Not a valid locale — show 404 (catches paths like /random-page)
    return <NotFound />;
  }

  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Root → redirect to stored or default locale */}
          <Route path="/" element={<LocaleRedirect />} />

          {/* Locale-prefixed routes */}
          <Route path="/:locale" element={<LocaleLayout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="use-cases" element={<UseCases />} />
            <Route path="use-cases/:slug" element={<UseCaseDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
