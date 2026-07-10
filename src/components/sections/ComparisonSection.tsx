import { Check, X } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const rows = [
  { label: "Tempo", without: "Horas baixando e organizando manualmente", with: "Automático em segundos" },
  { label: "Organização", without: "Pastas bagunçadas e arquivos perdidos", with: "Regras inteligentes por cliente, data e tipo" },
  {
    label: "Classificação",
    without: "Você teria que ler e organizar cada documento manualmente",
    with: "Classificação automática por IA (RG, comprovante, contrato e mais)",
  },
  { label: "Backup", without: "Depende de lembrar de salvar", with: "Cópia automática no Google Drive" },
  { label: "Busca", without: "Procurar no chat ou pedir de novo", with: "Encontre tudo na pasta certa" },
  { label: "Segurança", without: "Arquivos expostos no celular", with: "API oficial + LGPD" },
  { label: "Escalabilidade", without: "Travado com volume alto", with: "Cresce com sua operação" },
];

const ComparisonSection = () => {
  return (
    <section id="comparativo" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Comparativo
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Com vs Sem SwiftWapDrive
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Veja a diferença que a automação faz no seu dia a dia
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-border shadow-card">
            <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-sm font-semibold">
              <div className="flex items-center justify-center px-4 py-4 text-center text-muted-foreground sm:px-6">
                Sem SwiftWapDrive
              </div>
              <div className="flex flex-col items-center justify-center gap-2 border-l border-primary/30 bg-primary/10 px-4 py-4 text-center text-primary sm:px-6">
                <Badge className="hidden px-3 py-1 text-xs sm:inline-flex">Recomendado</Badge>
                Com SwiftWapDrive
              </div>
            </div>

            {rows.map((row, index) => (
              <div
                key={row.label}
                className={cn(
                  "grid grid-cols-2 border-b border-border last:border-b-0",
                  index % 2 === 0 ? "bg-muted/20" : "bg-background",
                )}
              >
                <div className="flex items-start gap-2 px-4 py-4 sm:gap-3 sm:px-6 sm:py-5">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/80" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:hidden">
                      {row.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{row.without}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 border-l border-primary/25 bg-primary/10 px-4 py-4 sm:gap-3 sm:px-6 sm:py-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 sm:hidden">
                      {row.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">{row.with}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ComparisonSection;
