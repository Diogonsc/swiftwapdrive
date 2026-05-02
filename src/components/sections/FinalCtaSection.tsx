import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { FaWhatsapp } from "react-icons/fa6";
import { APP_SIGNUP_URL, externalAppLinkProps } from "@/lib/app-links";

const WHATSAPP_URL = "https://wa.me/5521973819373";

const FinalCtaSection = () => {
  return (
    <section
      id="cta-final"
      className="border-t border-border bg-gradient-to-b from-background to-muted/30 py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Organize seus arquivos do WhatsApp hoje
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pare de perder tempo com trabalho manual e deixe tudo automático.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="gap-2 shadow-primary sm:min-w-[200px]" asChild>
                <a href={APP_SIGNUP_URL} {...externalAppLinkProps}>
                  Ver planos
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="sm:min-w-[200px]" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="h-4 w-4" aria-hidden />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCtaSection;
