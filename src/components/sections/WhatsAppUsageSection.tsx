import { BadgeCheck, CheckCircle2, Lock, Shield } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const trustItems = [
  { icon: BadgeCheck, label: "WhatsApp Business API" },
  { icon: Shield, label: "Dados alinhados à LGPD" },
  { icon: Lock, label: "Conexão segura e oficial" },
];

const WhatsAppUsageSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 gradient-brand" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,hsl(0_0%_100%_/_0.08),transparent)]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <Badge className="mb-4 border-primary-foreground/20 bg-primary-foreground/15 text-primary-foreground">
                API Oficial
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                100% integrado à API oficial do WhatsApp
              </h2>
              <p className="mt-3 text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
                Seu número continua funcionando normalmente, com segurança e estabilidade usando a API
                oficial.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "Fluxo estável, sem gambiarra",
                  "Seus arquivos tratados com cuidado no processo",
                  "Dados alinhados à LGPD",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground sm:text-base">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-primary-foreground/20 bg-background p-6 shadow-xl">
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground sm:text-base">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3">
                <FaWhatsapp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Seguro • Oficial • Confiável</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatsAppUsageSection;
