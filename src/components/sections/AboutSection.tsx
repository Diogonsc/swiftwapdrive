import { CheckCircle2, FileImage, FileVideo, FileAudio, FileText } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que é o Swiftwapdrive?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Swiftwapdrive é uma plataforma SaaS (Software as a Service) desenvolvida para 
              automatizar o processo de recebimento e armazenamento de arquivos de mídia.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left column - Key points */}
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Plataforma SaaS completa</h3>
                    <p className="mt-1 text-muted-foreground">
                      Sistema profissional com infraestrutura robusta, autenticação de usuários 
                      e dashboard administrativo.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp Business API oficial</h3>
                    <p className="mt-1 text-muted-foreground">
                      Utilizamos exclusivamente a API oficial do WhatsApp Business da Meta, 
                      garantindo conformidade e segurança.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Apenas arquivos de mídia</h3>
                    <p className="mt-1 text-muted-foreground">
                      Processamos somente imagens, vídeos, áudios e documentos. 
                      <strong className="text-foreground"> Não lemos nem processamos mensagens de texto.</strong>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right column - Supported files */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <h3 className="mb-6 text-center font-semibold text-foreground">
                  Tipos de arquivo suportados
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 rounded-lg bg-background p-4 shadow-sm">
                    <FileImage className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Imagens</p>
                      <p className="text-xs text-muted-foreground">JPG, PNG, WEBP</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-background p-4 shadow-sm">
                    <FileVideo className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Vídeos</p>
                      <p className="text-xs text-muted-foreground">MP4, MOV, AVI</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-background p-4 shadow-sm">
                    <FileAudio className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Áudios</p>
                      <p className="text-xs text-muted-foreground">MP3, OGG, WAV</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-background p-4 shadow-sm">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Documentos</p>
                      <p className="text-xs text-muted-foreground">PDF, DOC, XLS</p>
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
