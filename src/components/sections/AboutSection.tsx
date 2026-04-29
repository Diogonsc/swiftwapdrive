import { CheckCircle2, FileAudio, FileImage, FileText, FileVideo } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que você ganha com o Swiftwapdrive
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-10 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-7 shadow-md">
              <ScrollReveal delay={0.1}>
                <ul className="space-y-5">
                  {[
                    "Fim da bagunça no WhatsApp",
                    "Você encontra qualquer arquivo em segundos",
                    "Tudo salvo automaticamente, sem precisar fazer nada",
                    "Mais tempo para atender seus clientes",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-base font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2} direction="right">
              <div className="rounded-xl border border-border bg-background p-7 shadow-md">
                <h3 className="mb-6 text-xl font-semibold text-foreground">Chega de procurar arquivos</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 rounded-lg bg-background p-4 shadow-sm">
                    <FileImage className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Imagens</p>
                      <p className="text-xs text-muted-foreground">Fotos organizadas</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-background p-4 shadow-sm">
                    <FileVideo className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Vídeos</p>
                      <p className="text-xs text-muted-foreground">Tudo no lugar certo</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-background p-4 shadow-sm">
                    <FileAudio className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Áudios</p>
                      <p className="text-xs text-muted-foreground">Sem busca manual</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-background p-4 shadow-sm">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Documentos</p>
                      <p className="text-xs text-muted-foreground">Rápido de localizar</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
