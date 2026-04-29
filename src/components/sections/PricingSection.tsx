import {
  MessageCircle,
  Cloud,
  ShieldCheck,
  Zap,
  Download,
  FolderKanban,
  MessagesSquare,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ScrollReveal from "@/components/animations/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5521973819373";

const PLAN = {
  name: "Plano Essencial",
  price: 97,
  currency: "R$",
  period: "/ mês",
  description:
    "Tudo o que você precisa para arquivos do WhatsApp irem direto ao Google Drive, com teto de gasto previsível.",
  includedMedias: 200,
  extraPerMedia: "0,25",
} as const;

const INCLUDED_FEATURES: { label: string; icon: typeof MessageCircle }[] = [
  { label: "1 número WhatsApp conectado", icon: MessageCircle },
  { label: "1 Google Drive conectado", icon: Cloud },
  { label: "200 mídias/mês inclusas (foto, vídeo, áudio e documento)", icon: MessagesSquare },
  { label: "Organização automática por remetente e data", icon: FolderKanban },
  { label: "Transferência segura das mídias até o Drive", icon: Download },
  { label: "Tratamento alinhado à LGPD", icon: ShieldCheck },
  { label: "Suporte via WhatsApp", icon: Zap },
];

const HIGHLIGHT_ICONS = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Cloud, label: "Drive" },
  { icon: ShieldCheck, label: "Segurança" },
  { icon: Zap, label: "Automação" },
] as const;

const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const costPerIncludedMedia = (PLAN.price / PLAN.includedMedias).toFixed(2).replace(".", ",");

  return (
    <section id="planos" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Menos que uma hora do seu trabalho. Bem menos que perder arquivo.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Plano único com preço claro e previsível.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mx-auto mt-14">
          <div className="relative rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/5 to-background p-8 shadow-lg shadow-primary/10 md:p-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="px-3 py-1 text-xs font-semibold shadow-sm">Mais vendido</Badge>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-4">
              {HIGHLIGHT_ICONS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{PLAN.name}</h3>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-background/60 px-6 py-8 text-center">
              <p className="text-sm font-medium text-muted-foreground">Mensalidade fixa</p>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-lg font-semibold text-muted-foreground">{PLAN.currency}</span>
                <span className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                  {PLAN.price}
                </span>
                <span className="text-lg font-medium text-muted-foreground">{PLAN.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Inclui até {PLAN.includedMedias} mídias no mês (foto, vídeo, áudio ou documento)
              </p>
              <p className="mt-2 text-sm font-medium text-primary">
                Na faixa inclusa: menos de R$ 0,50 por mídia — em média R$ {costPerIncludedMedia}{" "}
                nas {PLAN.includedMedias} primeiras do mês.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Para comparar: costuma ser menos do que <strong className="text-foreground">uma hora</strong> de um
                profissional ou assistente organizando na mão — só que vale o mês inteiro.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-primary/15 bg-primary/5 px-5 py-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Timer className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Tempo virando dinheiro</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Quem recebe umas duzentas mídias por mês costuma gastar várias horas só baixando e
                arrumando pasta. Aqui isso some do seu fluxo: o valor do plano troca retrabalho por
                automação.
              </p>
            </div>

            <p className="mt-8 text-center text-base leading-relaxed text-muted-foreground">
              {PLAN.description}
            </p>

            <Separator className="my-8" />

            <p className="mb-4 text-sm font-semibold text-foreground">Inclui</p>
            <ul className="space-y-3.5">
              {INCLUDED_FEATURES.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" aria-hidden />
                  </span>
                  <span className="pt-1.5 text-sm leading-snug text-muted-foreground">{label}</span>
                </li>
              ))}
            </ul>

            <Separator className="my-8" />

            <div className="rounded-xl border-2 border-primary/30 bg-muted/40 p-6 md:p-7">
              <div className="flex items-start gap-3">
                <span className="text-2xl leading-none" aria-hidden>
                  💡
                </span>
                <div>
                  <h4 className="text-base font-semibold text-foreground">Após 200 mídias no mês</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Você paga somente <strong>R$ {PLAN.extraPerMedia}</strong> por mídia adicional
                    (foto, vídeo, áudio ou documento). O painel mostra o consumo em tempo real.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground">
              Volume variou? Você paga a mais só no que excedeu — útil para quem tem pico em certas
              semanas e mês tranquilo em outras.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" className="w-full shadow-primary sm:w-auto sm:min-w-[200px]" onClick={scrollToContact}>
                Começar agora
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto sm:min-w-[200px]" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Tirar dúvida no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="mt-10 text-center text-sm text-muted-foreground">Sem fidelidade • Sem cartão</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
