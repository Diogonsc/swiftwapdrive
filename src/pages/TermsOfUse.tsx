import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Swiftwapdrive</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link to="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
        </div>
      </header>

      <main className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Termos de Uso
            </h1>
            <p className="mt-4 text-muted-foreground">
              Última atualização: Janeiro de 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
                <p className="mt-3 text-muted-foreground">
                  Ao acessar ou utilizar os serviços da Swiftwapdrive ("Plataforma"), você 
                  concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não 
                  concordar com qualquer parte destes termos, não poderá utilizar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Descrição do Serviço</h2>
                <p className="mt-3 text-muted-foreground">
                  A Swiftwapdrive é uma plataforma SaaS (Software as a Service) que oferece:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Recebimento automatizado de arquivos de mídia via WhatsApp Business</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Armazenamento organizado dos arquivos no Google Drive do usuário</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Dashboard para gerenciamento e acompanhamento de uso</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Controle de planos e limites de processamento</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Responsabilidades do Usuário</h2>
                <p className="mt-3 text-muted-foreground">
                  Ao utilizar a Plataforma, o usuário se compromete a:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Fornecer informações verdadeiras e atualizadas no cadastro</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Manter a confidencialidade de suas credenciais de acesso</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Não utilizar o serviço para fins ilegais ou não autorizados</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Não enviar conteúdo ilegal, ofensivo ou que viole direitos de terceiros</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Respeitar os limites do plano contratado</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Obter consentimento de terceiros antes de enviar arquivos que os envolvam</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Limites do Serviço</h2>
                <p className="mt-3 text-muted-foreground">
                  A Swiftwapdrive se reserva o direito de:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Limitar o volume de arquivos processados conforme o plano contratado</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Suspender ou encerrar contas que violem estes termos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Modificar ou descontinuar funcionalidades com aviso prévio</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Recusar o processamento de arquivos que violem políticas de uso</span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <p className="text-sm font-medium text-foreground">
                    A Plataforma processa apenas arquivos de mídia (imagens, vídeos, áudios e 
                    documentos). Mensagens de texto não são lidas, armazenadas ou processadas.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Uso de APIs Oficiais</h2>
                <p className="mt-3 text-muted-foreground">
                  A Swiftwapdrive utiliza exclusivamente APIs oficiais de terceiros:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Meta (WhatsApp Business API):</strong> Para recebimento de arquivos e comunicações transacionais, em conformidade com as Políticas do WhatsApp Business</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Google (Drive API):</strong> Para armazenamento de arquivos no Google Drive do usuário, mediante autorização OAuth 2.0</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Stripe:</strong> Para processamento seguro de pagamentos, em conformidade com PCI-DSS</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Consentimento para Processamento</h2>
                <p className="mt-3 text-muted-foreground">
                  Ao utilizar a Plataforma, o usuário consente expressamente:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>O recebimento e processamento de arquivos de mídia enviados via WhatsApp</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>O armazenamento dos arquivos em seu Google Drive pessoal/empresarial</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>O envio de notificações transacionais sobre o status dos arquivos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>A coleta de dados necessários para a prestação do serviço</span>
                  </li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  O consentimento pode ser revogado a qualquer momento através do encerramento 
                  da conta ou desconexão das integrações.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. Planos e Pagamentos</h2>
                <p className="mt-3 text-muted-foreground">
                  Os planos de serviço são oferecidos em modalidade de assinatura, com:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Cobrança recorrente mensal ou anual, conforme o plano escolhido</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Limites de uso claramente especificados em cada plano</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Possibilidade de upgrade ou downgrade a qualquer momento</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Cancelamento sem multa, respeitando o período contratado</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. Propriedade Intelectual</h2>
                <p className="mt-3 text-muted-foreground">
                  A Swiftwapdrive e seus componentes são protegidos por direitos autorais. 
                  O usuário mantém todos os direitos sobre os arquivos enviados através da 
                  plataforma. A Swiftwapdrive não reivindica propriedade sobre o conteúdo 
                  do usuário.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">9. Limitação de Responsabilidade</h2>
                <p className="mt-3 text-muted-foreground">
                  A Swiftwapdrive não se responsabiliza por:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Interrupções de serviço causadas por terceiros (Meta, Google, provedores)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Perda de dados por falha na conta Google Drive do usuário</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Uso indevido das credenciais de acesso pelo usuário</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Conteúdo enviado por terceiros através do WhatsApp do usuário</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">10. Alterações nos Termos</h2>
                <p className="mt-3 text-muted-foreground">
                  A Swiftwapdrive pode modificar estes Termos de Uso a qualquer momento. 
                  Alterações significativas serão comunicadas por e-mail ou através da 
                  Plataforma. O uso continuado após as alterações constitui aceitação 
                  dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">11. Foro e Legislação Aplicável</h2>
                <p className="mt-3 text-muted-foreground">
                  Estes Termos de Uso são regidos pelas leis brasileiras. Fica eleito o foro 
                  da comarca do domicílio do usuário para dirimir quaisquer controvérsias.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">12. Contato</h2>
                <p className="mt-3 text-muted-foreground">
                  Para dúvidas sobre estes Termos de Uso, entre em contato:
                </p>
                <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-foreground">
                    <strong>Swiftwapdrive</strong><br />
                    E-mail: contato@swiftwapdrive.com<br />
                    CNPJ: 56.151.919/0001-30<br />
                    Responsável: Diogo Nascimento dos Santos
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Swiftwapdrive. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfUse;
