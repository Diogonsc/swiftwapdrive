import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Swiftwapdrive</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Automação inteligente de arquivos via WhatsApp integrada ao Google Drive. 
              Simplifique sua rotina com tecnologia segura e confiável.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:diogos.nascimento@outlook.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  diogos.nascimento@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5521973819373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
            <p className="text-sm font-medium text-foreground">Swiftwapdrive</p>
            <p className="text-sm text-muted-foreground">
              CNPJ: 56.151.919/0001-30
            </p>
            <p className="text-sm text-muted-foreground">
              Responsável: Diogo Nascimento dos Santos
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Swiftwapdrive. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
