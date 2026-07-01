import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { FaWhatsapp } from "react-icons/fa6";
import { APP_SIGNUP_URL, externalAppLinkProps } from "@/lib/app-links";

const WHATSAPP_URL = "https://wa.me/5521973819373";

const trustSignals = ["Sem instalação", "Configuração em minutos", "Sem fidelidade • Sem cartão"];

const FinalCtaSection = () => {
  return (
    <section id="cta-final" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-primary/20 gradient-brand px-6 py-12 shadow-primary sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-foreground/10" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-primary-foreground/5" />

            <div className="relative text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Organize seus arquivos do WhatsApp hoje
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white">
                Pare de perder tempo com trabalho manual e deixe tudo automático.
              </p>

              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 border-0 bg-white text-foreground shadow-lg hover:bg-white/95 sm:min-w-[220px]"
                  asChild
                >
                  <a href={APP_SIGNUP_URL} {...externalAppLinkProps}>
                    Começar agora
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/80 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:min-w-[220px]"
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="h-4 w-4" aria-hidden />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {trustSignals.map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm font-medium text-white">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCtaSection;
