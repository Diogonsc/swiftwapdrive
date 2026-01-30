import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, MessageSquare, Shield } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden gradient-subtle">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="container relative py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground shadow-sm">
            <Shield className="h-4 w-4 text-primary" />
            <span>Plataforma SaaS segura e confiável</span>
          </div>

          {/* Title */}
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Swiftwapdrive
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-delay-1 mt-4 text-xl font-medium text-primary md:text-2xl">
            Automação de arquivos via WhatsApp integrada ao Google Drive
          </p>

          {/* Description */}
          <p className="animate-fade-in-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Swiftwapdrive é um sistema SaaS que processa automaticamente mídias enviadas 
            voluntariamente ao WhatsApp Business da plataforma e as armazena de forma 
            organizada no Google Drive do usuário, sem ações manuais.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection("como-funciona")}
              className="gap-2 shadow-primary"
            >
              Como funciona
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contato")}
            >
              Fale conosco
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="animate-fade-in-delay-3 mt-16 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background/80 p-6 shadow-sm backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">WhatsApp Business API</h3>
              <p className="text-sm text-muted-foreground">
                Integração oficial e segura com a API do WhatsApp
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background/80 p-6 shadow-sm backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Google Drive</h3>
              <p className="text-sm text-muted-foreground">
                Armazenamento seguro na nuvem do usuário
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background/80 p-6 shadow-sm backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Segurança LGPD</h3>
              <p className="text-sm text-muted-foreground">
                Conformidade total com a legislação brasileira
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
