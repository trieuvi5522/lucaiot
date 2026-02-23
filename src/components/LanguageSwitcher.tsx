import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "vi", label: "VI" },
];

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-muted/50 p-0.5 text-sm",
        className,
      )}
      role="radiogroup"
      aria-label="Language"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          role="radio"
          aria-checked={locale === opt.value}
          onClick={() => setLocale(opt.value)}
          className={cn(
            "px-2.5 py-1 rounded font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            locale === opt.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
