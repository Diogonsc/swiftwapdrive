import ScrollReveal from "@/components/animations/ScrollReveal";

const usageScenarios = [
  {
    title: "Uso leve",
    description: "Se você recebe até 3 arquivos por dia\n(~80 arquivos por mês)",
    recommendation: "Starter",
  },
  {
    title: "Uso moderado",
    description: "Se você recebe cerca de 6 a 7 arquivos por dia\n(~200 arquivos por mês)",
    recommendation: "Profissional",
  },
  {
    title: "Uso intenso",
    description: "Se você recebe mais de 15 arquivos por dia\n(~600 arquivos por mês)",
    recommendation: "Scale",
  },
] as const;

const PlanGuidanceSection = () => {
  return (
    <section id="guia-de-planos" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Qual plano é ideal para você?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Escolher o plano certo depende da quantidade de arquivos que você recebe no WhatsApp
              todos os dias.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
          {usageScenarios.map((scenario, index) => (
            <ScrollReveal key={scenario.title} delay={index * 0.08}>
              <article className="relative h-full overflow-hidden rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="inline-flex h-2.5 w-2.5 rounded-full bg-primary/70" aria-hidden />
                <h3 className="mt-3 text-xl font-semibold text-foreground">{scenario.title}</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {scenario.description}
                </p>
                <p className="mt-5 text-sm font-semibold text-foreground sm:text-base">
                  Plano recomendado: <span className="text-primary">{scenario.recommendation}</span>
                </p>
                <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/5" />
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto mt-10 max-w-3xl space-y-3 text-center">
            <p className="text-sm leading-relaxed text-foreground sm:text-base">
              Se você ultrapassar o limite do plano, pode continuar usando normalmente e pagar apenas
              pelos arquivos adicionais.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Sem fidelidade. Você pode mudar de plano a qualquer momento.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlanGuidanceSection;
