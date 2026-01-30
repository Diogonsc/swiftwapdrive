import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Entre em contato
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tire suas dúvidas ou solicite uma demonstração da plataforma
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:contato@swiftwapdrive.com"
              className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-background p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="mt-1 text-sm text-muted-foreground">contato@swiftwapdrive.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-background p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <MessageCircle className="h-7 w-7 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">WhatsApp</h3>
                <p className="mt-1 text-sm text-muted-foreground">+55 11 99999-9999</p>
              </div>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground">
              Pronto para automatizar seus arquivos?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Entre em contato para saber mais sobre nossos planos e funcionalidades.
            </p>
            <Button size="lg" className="mt-6 shadow-primary" asChild>
              <a href="mailto:contato@swiftwapdrive.com">Solicitar demonstração</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
