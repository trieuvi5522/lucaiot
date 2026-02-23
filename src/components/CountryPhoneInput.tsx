import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { countries, Country } from "@/data/countries";

interface CountryPhoneInputProps {
  countryCode: string;
  phone: string;
  onCountryChange: (code: string) => void;
  onPhoneChange: (phone: string) => void;
  id?: string;
  required?: boolean;
}

const CountryPhoneInput = ({
  countryCode,
  phone,
  onCountryChange,
  onPhoneChange,
  id = "phone",
  required = false,
}: CountryPhoneInputProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selectedCountry = countries.find((c) => c.code === countryCode);
  const filtered = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && searchRef.current) {
      searchRef.current.focus();
    }
  }, [open]);

  const selectCountry = (country: Country) => {
    onCountryChange(country.code);
    setOpen(false);
    setSearch("");
  };

  return (
    <div>
      <Label htmlFor={id}>WhatsApp / Phone</Label>
      <div className="flex gap-2 mt-1">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 h-10 px-3 rounded-md border border-input bg-background text-sm hover:bg-muted/50 transition-colors min-w-[100px]"
          >
            <span className="font-mono text-xs">{selectedCountry?.dial || "+84"}</span>
            <span className="text-muted-foreground text-xs">{selectedCountry?.code || "VN"}</span>
            <ChevronDown size={14} className="text-muted-foreground ml-auto" />
          </button>

          {open && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-popover border border-border rounded-md shadow-lg z-50 max-h-60 overflow-hidden">
              <div className="p-2 border-b border-border">
                <div className="relative">
                  <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search country..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full h-8 pl-8 pr-3 rounded-sm border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>
              <div className="overflow-y-auto max-h-48">
                {filtered.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => selectCountry(country)}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-muted/50 transition-colors flex items-center justify-between ${
                      country.code === countryCode ? "bg-accent/10 text-accent" : "text-popover-foreground"
                    }`}
                  >
                    <span>{country.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{country.dial}</span>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="px-3 py-4 text-sm text-muted-foreground text-center">No country found</p>
                )}
              </div>
            </div>
          )}
        </div>

        <Input
          id={id}
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          required={required}
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default CountryPhoneInput;
