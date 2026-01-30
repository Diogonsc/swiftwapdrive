import { Check, Zap, Rocket, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerAnimation";

const plans = [
  {
    name: "Starter",
    description: "Ideal para profissionais autônomos",
    price: "49",
    icon: Zap,
    popular: false,
    features: [
      "100 arquivos por mês",
      "1 número WhatsApp",
      "1 conta Google Drive",
      "Organização automática",
      "Suporte por email",
    ],
  },
  {
    name: "Professional",
    description: "Para pequenas e médias empresas",
    price: "129",
    icon: Rocket,
    popular: true,
    features: [
      "500 arquivos por mês",
      "3 números WhatsApp",
      "3 contas Google Drive",
      "Organização automática",
      "Dashboard completo",
      "Suporte prioritário",
      "Relatórios mensais",
    ],
  },
  {
    name: "Enterprise",
    description: "Solução completa para grandes operações",
    price: "299",
    icon: Crown,
    popular: false,
    features: [
      "Arquivos ilimitados",
      "Números ilimitados",
      "Contas ilimitadas",
      "Organização personalizada",
      "Dashboard avançado",
      "Suporte 24/7",
      "API dedicada",
      "Gerente de conta",
    ],
  },
];

const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="planos" className="py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Planos e preços
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Escolha o plano ideal para suas necessidades de automação
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border ${
                  plan.popular
                    ? "border-primary bg-gradient-to-b from-primary/5 to-transparent shadow-lg shadow-primary/10"
                    : "border-border bg-background"
                } p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                      Mais popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="ml-1 text-muted-foreground">/mês</span>
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full ${plan.popular ? "shadow-primary" : ""}`}
                >
                  Começar agora
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Todos os planos incluem 7 dias de teste gratuito. Cancele a qualquer momento.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
