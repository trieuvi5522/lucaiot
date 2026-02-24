import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  dark?: boolean;
}

const SectionWrapper = ({ children, title, subtitle, className = "", id, dark }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? "bg-primary text-primary-foreground" : ""} ${className}`}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="max-w-3xl mx-auto text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-4 text-lg ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`} style={{ textWrap: 'balance' } as React.CSSProperties}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
