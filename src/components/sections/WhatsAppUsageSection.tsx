import { Shield, CheckCircle2, MessageSquare, FileCheck } from "lucide-react";

const WhatsAppUsageSection = () => {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
              <MessageSquare className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Uso do WhatsApp
            </h2>
            <p className="mt-2 text-lg text-primary-foreground/80">
              Conformidade com as Políticas do WhatsApp Business
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-8 backdrop-blur md:p-10">
            <p className="text-center text-lg leading-relaxed text-primary-foreground">
              O Swiftwapdrive utiliza o WhatsApp <strong>exclusivamente</strong> para comunicação 
              transacional e processamento de arquivos enviados <strong>voluntariamente</strong> pelos 
              usuários. Todas as interações ocorrem com <strong>consentimento explícito</strong> do 
              usuário, em conformidade com as <strong>Políticas do WhatsApp Business</strong> e a <strong>LGPD</strong>.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-sm font-medium text-primary-foreground">API oficial da Meta</p>
            </div>

            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-sm font-medium text-primary-foreground">Consentimento explícito</p>
            </div>

            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                <FileCheck className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-sm font-medium text-primary-foreground">Apenas arquivos de mídia</p>
            </div>

            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-sm font-medium text-primary-foreground">Conformidade LGPD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppUsageSection;
