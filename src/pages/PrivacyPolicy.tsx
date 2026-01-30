import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Política de Privacidade
            </h1>
            <p className="mt-4 text-muted-foreground">
              Última atualização: Janeiro de 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Introdução</h2>
                <p className="mt-3 text-muted-foreground">
                  A Swiftwapdrive ("nós", "nosso" ou "Plataforma") está comprometida em proteger 
                  a privacidade dos nossos usuários. Esta Política de Privacidade descreve como 
                  coletamos, usamos, armazenamos e protegemos suas informações pessoais em 
                  conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Dados Coletados</h2>
                <p className="mt-3 text-muted-foreground">
                  Praticamos a coleta mínima de dados, coletando apenas as informações 
                  estritamente necessárias para a prestação do serviço:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Dados de cadastro:</strong> nome, e-mail e telefone para criação da conta</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Dados de autenticação:</strong> credenciais de acesso criptografadas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Arquivos de mídia:</strong> (imagens, vídeos, áudios e documentos) enviados voluntariamente pelo usuário ao número WhatsApp Business da plataforma Swiftwapdrive.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Metadados:</strong> data/hora de envio e tipo de arquivo para organização</span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <p className="text-sm font-medium text-foreground">
                    ⚠️ Importante: Não coletamos, armazenamos ou processamos o conteúdo de mensagens 
                    de texto. Apenas arquivos de mídia são processados pela plataforma.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Uso do WhatsApp Cloud API</h2>
                <p className="mt-3 text-muted-foreground">
                  Utilizamos a API oficial do WhatsApp Business (WhatsApp Cloud API) da Meta para:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Receber arquivos de mídia enviados voluntariamente pelos usuários ao WhatsApp Business da plataforma</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Enviar mensagens transacionais estritamente necessárias ao funcionamento do serviço</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Notificar o status de processamento e armazenamento dos arquivos</span>
                  </li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                A Swiftwapdrive não utiliza o WhatsApp para envio de mensagens promocionais ou marketing, e todas as interações ocorrem com consentimento explícito do usuário, em conformidade com as Políticas do WhatsApp Business.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Armazenamento no Google Drive</h2>
                <p className="mt-3 text-muted-foreground">
                  Os arquivos processados são armazenados diretamente no Google Drive do próprio 
                  usuário, utilizando autorização OAuth 2.0:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>O usuário autoriza explicitamente o acesso ao seu Google Drive</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Os arquivos ficam armazenados na conta Google do próprio usuário</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>A Swiftwapdrive não mantém cópias permanentes dos arquivos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>O usuário pode revogar o acesso a qualquer momento</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Segurança das Informações</h2>
                <p className="mt-3 text-muted-foreground">
                  Implementamos medidas técnicas e organizacionais para proteger seus dados:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Criptografia em trânsito (TLS/SSL) para todas as comunicações</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Autenticação segura com hash de senhas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Acesso restrito aos dados por políticas de controle</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Logs de auditoria para monitoramento de acessos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Infraestrutura em nuvem com certificações de segurança</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Conformidade com a LGPD</h2>
                <p className="mt-3 text-muted-foreground">
                  O tratamento de dados pessoais é realizado com base no consentimento do titular e na execução de contrato, conforme previsto na LGPD.
                </p>
                <p className="mt-3 text-muted-foreground">
                  Em conformidade com a LGPD, garantimos aos usuários os seguintes direitos:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Acesso:</strong> solicitar informações sobre os dados que possuímos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Correção:</strong> corrigir dados incompletos ou incorretos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Exclusão:</strong> solicitar a eliminação dos dados pessoais</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Portabilidade:</strong> receber seus dados em formato estruturado</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Revogação:</strong> retirar o consentimento a qualquer momento</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. Contato</h2>
                <p className="mt-3 text-muted-foreground">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de 
                  Privacidade, entre em contato:
                </p>
                <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-foreground">
                    <strong>Swiftwapdrive</strong><br />
                    E-mail: diogos.nascimento@outlook.com<br />
                    CNPJ: 56.151.919/0001-30<br />
                    Responsável: Diogo Nascimento dos Santos
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. Alterações nesta Política</h2>
                <p className="mt-3 text-muted-foreground">
                  Esta Política de Privacidade pode ser atualizada periodicamente. A versão mais recente estará sempre disponível no site da Swiftwapdrive.
                </p>
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

export default PrivacyPolicy;
