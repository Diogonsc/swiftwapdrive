import { BadgeCheck, CheckCircle2, Lock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import ScrollReveal from "@/components/animations/ScrollReveal";

const WhatsAppUsageSection = () => {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl bg-primary p-2">
          <ScrollReveal>
            <div className="grid items-center gap-6 rounded-xl bg-primary px-6 py-8 md:grid-cols-[1.3fr_0.7fr] md:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  100% integrado à API oficial do WhatsApp via Twilio
                </h2>
                <p className="mt-3 text-base text-primary-foreground/90 sm:text-lg">
                  Integração oficial via Twilio, parceiro certificado Meta. Criptografia ponta
                  a ponta e dados protegidos para sua operação funcionar com segurança todos os dias.
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    "Sem risco de bloqueio por métodos não oficiais",
                    "Criptografia no processamento das mídias",
                    "Dados seguros e alinhados à LGPD",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground p-5 text-foreground shadow-md">
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-2 font-semibold">
                    <FaWhatsapp className="h-4 w-4 text-primary" />
                    WhatsApp Business API
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    Twilio — Parceiro Meta
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5 text-primary" />
                    Seguro • Oficial • Criptografado
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppUsageSection;
