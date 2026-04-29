import { AlertTriangle, Clock3, FolderSearch, RefreshCcw, TrendingDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { FaComputer, FaWhatsapp } from "react-icons/fa6";

const features = [
  {
    icon: RefreshCcw,
    title: "Você pede o mesmo arquivo mais de uma vez",
  },
  {
    icon: FolderSearch,
    title: "Fica procurando conversa antiga pra achar documento",
  },
  {
    icon: Clock3,
    title: "Perde tempo salvando arquivos manualmente",
  },
  {
    icon: AlertTriangle,
    title: "Já perdeu um arquivo importante de cliente",
  },
  {
    icon: FaWhatsapp,
    title: "Seu WhatsApp virou uma bagunça",
  },
  {
    icon: TrendingDown,
    title: "No fim do dia, sobra retrabalho e cliente esperando",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Isso acontece com você no dia a dia?
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Se você usa WhatsApp para trabalho, provavelmente já passou por isso:
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-10 max-w-6xl">
          <ScrollReveal delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="relative overflow-hidden rounded-xl border border-border bg-background p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="relative z-10 text-sm font-medium leading-relaxed text-foreground sm:text-base">
                    {feature.title}
                  </p>
                  <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/5" />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.19}>
            <p className="mt-5 rounded-lg border border-border bg-muted/40 p-4 text-center text-sm font-medium text-foreground">
              Se você se identificou com 2 ou mais situações acima, isso já está custando tempo,
              dinheiro e profissionalismo.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.22}>
            <div className="mt-6 rounded-xl border border-border bg-muted/40 p-6 shadow-sm md:p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-destructive/10">
                <FaComputer className="h-5 w-5 text-destructive" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Agora imagine isso acontecendo todos os dias…</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {[
                  "Interrupções constantes no seu trabalho",
                  "Retrabalho desnecessário",
                  "Clientes esperando você encontrar arquivos",
                  "Tempo perdido acumulando sem você perceber",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-lg border border-primary/20 bg-background p-4 text-sm font-semibold text-foreground">
                Isso não é só bagunça — é dinheiro e credibilidade sendo perdidos.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
