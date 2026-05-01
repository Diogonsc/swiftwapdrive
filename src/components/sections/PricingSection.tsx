import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { FaWhatsapp } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/5521973819373";

const PLANS = [
  {
    id: "starter",
    name: "Plano Starter",
    price: 49,
    fileLimit: 80,
    popular: false,
    features: [
      "Até 80 arquivos automatizados por mês",
      "Integração com Google Drive",
      "Organização automática",
    ],
  },
  {
    id: "profissional",
    name: "Plano Profissional",
    price: 97,
    fileLimit: 200,
    popular: true,
    features: [
      "Até 200 arquivos automatizados por mês",
      "Integração com Google Drive",
      "Organização automática",
      "Suporte",
    ],
  },
  {
    id: "scale",
    name: "Plano Scale",
    price: 197,
    fileLimit: 600,
    popular: false,
    features: [
      "Até 600 arquivos automatizados por mês",
      "Integração com Google Drive",
      "Organização automática",
      "Prioridade no suporte",
    ],
  },
] as const;

const PricingSection = () => {
  const scrollToFinalCta = () => {
    const element = document.getElementById("cta-final");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="planos" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Planos por volume de automação
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Você paga pelo que usa em arquivos enviados automaticamente para o Drive — previsível e
              sem surpresa.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mx-auto mt-12 max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-background p-6 shadow-sm transition-shadow md:p-8",
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10 ring-2 ring-primary/20 lg:scale-[1.02] lg:py-9"
                    : "border-border hover:shadow-md",
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-1 text-xs font-semibold shadow-sm">Mais popular</Badge>
                  </div>
                )}

                <div className={cn("text-center", plan.popular && "mt-2")}>
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <div className="mt-5 flex items-baseline justify-center gap-1">
                    <span className="text-lg font-semibold text-muted-foreground">R$</span>
                    <span className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                      {plan.price}
                    </span>
                    <span className="text-base font-medium text-muted-foreground">/mês</span>
                  </div>
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((label) => (
                    <li key={label} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" aria-hidden />
                      </span>
                      <span className="leading-snug">{label}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="mt-8 w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={scrollToFinalCta}
                >
                  Começar agora
                </Button>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mx-auto mt-10 max-w-2xl space-y-4 text-center">
          <p className="text-base font-medium text-foreground">
            Arquivos adicionais: R$0,25 por arquivo excedente
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            200 arquivos por mês equivale a cerca de 6–7 arquivos por dia — suficiente para a maioria dos
            profissionais.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.22} className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="w-full shadow-primary sm:w-auto sm:min-w-[200px]" onClick={scrollToFinalCta}>
            Falar com a equipe
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto sm:min-w-[200px]" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-4 w-4" aria-hidden />
              Tirar dúvida no WhatsApp
            </a>
          </Button>
        </ScrollReveal>

        <ScrollReveal delay={0.26}>
          <p className="mt-8 text-center text-sm text-muted-foreground">Sem fidelidade • Sem cartão</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
