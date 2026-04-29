import { Clock3, FolderSearch, RefreshCcw, TrendingDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { FaBuilding, FaComputer } from "react-icons/fa6";

const features = [
  {
    icon: RefreshCcw,
    title: "Menos retrabalho",
    description: "Pare de baixar e organizar tudo na mão.",
  },
  {
    icon: Clock3,
    title: "Mais produtividade",
    description: "Sua equipe foca no atendimento, não em pasta.",
  },
  {
    icon: TrendingDown,
    title: "Menos erros e perdas",
    description: "Arquivos com histórico e rastreio no Drive.",
  },
  {
    icon: FaComputer,
    title: "Acesso de qualquer lugar",
    description: "Seus arquivos disponíveis de onde você estiver.",
  },
  {
    icon: FolderSearch,
    title: "Histórico completo",
    description: "Tudo encontrado rápido quando você precisa.",
  },
  {
    icon: FaBuilding,
    title: "Escalável para seu negócio.",
    description: "Funciona pra você hoje e pra sua empresa amanhã.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Quanto você perde hoje sem automação?
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_1fr]">
          <ScrollReveal delay={0.12}>
            <div className="rounded-xl border border-border bg-background p-7 shadow-md">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-destructive/10">
                <TrendingDown
                  className="h-5 w-5 text-destructive"
                  aria-hidden
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                3 horas por mês organizando arquivo na mão
              </h3>
              <h3 className="text-xl font-semibold text-foreground">
                {" "}
                = tempo perdido e dinheiro jogado fora.
              </h3>
              <p className="mt-3 text-muted-foreground">
                Se sua hora de trabalho custa{" "}
                <strong className="text-foreground">R$100 </strong>{" "}
                significa:
              </p>
              <hr className="my-4" />
              <h3 className="text-xl font-semibold text-muted-foreground">
                <strong className="text-primary">R$ 300+ </strong>por mês em
                tempo perdido e{" "}
                <strong className="">dinheiro jogado fora.</strong>
              </h3>
              <p>R$3.600 por ano que poderia ser usado para outras coisas.</p>
              <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
                O Swiftwapdrive elimina essa rotina manual e devolve esse tempo
                para atendimento e venda.
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border bg-background p-5 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
