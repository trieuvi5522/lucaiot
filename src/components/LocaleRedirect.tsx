import { Navigate, useLocation } from "react-router-dom";
import { isValidLocale } from "@/i18n/LanguageContext";

/**
 * Redirects bare "/" to the stored locale or default "en".
 * Also catches invalid locale prefixes and redirects to /en/...
 */
const LocaleRedirect = () => {
  const location = useLocation();

  // Check localStorage for preferred locale
  let preferred = "en";
  try {
    const stored = localStorage.getItem("luca-iot-lang");
    if (stored && isValidLocale(stored)) preferred = stored;
  } catch {
    // ignore
  }

  return <Navigate to={`/${preferred}${location.search}${location.hash}`} replace />;
};

export default LocaleRedirect;
