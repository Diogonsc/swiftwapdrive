import { Building2 } from "lucide-react";

const clients = [
  "Escritório Silva & Associados",
  "Contábil Prime",
  "Imobiliária Horizonte",
  "Clínica Vida Plena",
  "Studio Criativo",
  "RH Solutions",
];

const SocialProofBarSection = () => {
  const items = [...clients, ...clients];

  return (
    <section className="border-y border-border bg-muted/30 py-8">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Organizações que automatizam com o SwiftWapDrive
        </p>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-muted/30 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-muted/30 to-transparent sm:w-24" />

          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {items.map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-background px-4 py-2 shadow-sm"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="whitespace-nowrap text-sm font-medium text-foreground/70">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBarSection;
