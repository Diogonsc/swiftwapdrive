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
    <section className="relative overflow-hidden bg-foreground py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,hsl(174_80%_46%_/_0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_100%,hsl(174_80%_46%_/_0.1),transparent)]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <Badge className="mb-4 border-white/10 bg-white/10 text-white">API Oficial</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                100% integrado à API oficial do WhatsApp
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
                Seu número continua funcionando normalmente, com segurança e estabilidade usando a API
                oficial.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "Fluxo estável, sem gambiarra",
                  "Seus arquivos tratados com cuidado no processo",
                  "Dados alinhados à LGPD",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/90 sm:text-base">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5 backdrop-blur-sm">
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 ring-1 ring-white/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-white sm:text-base">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-lg border border-white/10 bg-primary/15 px-4 py-3">
                <FaWhatsapp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-white/90">Seguro • Oficial • Confiável</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatsAppUsageSection;
