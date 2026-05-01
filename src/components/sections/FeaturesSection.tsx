import { AlertTriangle, Clock3, FolderSearch, RefreshCcw } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const pains = [
  {
    icon: AlertTriangle,
    title: "Você perde arquivos importantes no WhatsApp",
  },
  {
    icon: RefreshCcw,
    title: "Precisa baixar tudo manualmente",
  },
  {
    icon: Clock3,
    title: "Gasta tempo organizando documentos",
  },
  {
    icon: FolderSearch,
    title: "Já teve que pedir arquivo de novo para o cliente",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Isso acontece com você no dia a dia?
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-10 max-w-4xl">
          <ScrollReveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {pains.map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-xl border border-border bg-background p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="relative z-10 text-sm font-medium leading-relaxed text-foreground sm:text-base">
                    {item.title}
                  </p>
                  <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/5" />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <p className="mt-10 text-center text-base font-medium leading-relaxed text-foreground sm:text-lg">
              Isso não é falta de organização — é falta de automação.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
