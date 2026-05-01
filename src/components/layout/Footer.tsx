import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-lg bg-white p-2">
                <img
                  src="/logo.png"
                  alt="SwiftWapDrive"
                  className="h-10 w-10 rounded-lg text-primary-foreground"
                />
              </div>
              <span className="text-xl font-semibold text-primary-foreground">SwiftWapDrive</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-primary-foreground">
              Arquivos que chegam no WhatsApp vão sozinhos para o seu Google Drive — organizados, sem
              trabalho manual.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground transition-colors hover:text-primary-foreground"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="/terms.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground transition-colors hover:text-primary-foreground"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="/data-deletion.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground transition-colors hover:text-primary-foreground"
                >
                  Exclusão de Dados
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:diogos.nascimento@outlook.com"
                  className="text-sm text-primary-foreground transition-colors hover:text-primary-foreground"
                >
                  diogos.nascimento@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5521973819373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground transition-colors hover:text-primary-foreground"
                >
                  WhatsApp Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar - Required info */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-medium text-primary-foreground">SwiftWapDrive</p>
            <p className="mt-4 text-xs text-primary-foreground">
              © {new Date().getFullYear()} SwiftWapDrive. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
