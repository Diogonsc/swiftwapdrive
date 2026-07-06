import { Link } from "react-router-dom";
import { ArrowRight, Mail, Shield } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { APP_SIGNUP_URL, externalAppLinkProps } from "@/lib/app-links";
import { trackButtonClick } from "@/lib/analytics";

const WHATSAPP_URL = "https://wa.me/5521973819373";

const productLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#sobre" },
  { label: "Para quem é", href: "#publico" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "/privacy", internal: true },
  { label: "Termos de Uso", href: "/terms", internal: true },
  { label: "Exclusão de Dados", href: "/data-deletion.html", internal: false },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-foreground text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,hsl(174_80%_46%_/_0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_100%,hsl(174_80%_46%_/_0.1),transparent)]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                <img src="/logo.png" alt="SwiftWapDrive" className="h-6 w-6 rounded-md" />
              </div>
              <span className="text-xl font-semibold text-white">SwiftWapDrive</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              Arquivos que chegam no WhatsApp vão sozinhos para o seu Google Drive — organizados, sem
              trabalho manual.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                <FaWhatsapp className="h-3.5 w-3.5 text-primary" />
                API oficial
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                <Shield className="h-3.5 w-3.5 text-primary" />
                LGPD
              </span>
            </div>

            <Button size="lg" className="mt-6 gap-2 shadow-primary" asChild>
              <a
                href={APP_SIGNUP_URL}
                {...externalAppLinkProps}
                onClick={() =>
                  trackButtonClick({
                    button_text: "Começar agora",
                    button_location: "footer",
                    button_action: "signup",
                  })
                }
              >
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Product */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Produto</h4>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contato</h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="mailto:diogos.nascimento@outlook.com"
                  className="group flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-primary/20">
                    <Mail className="h-4 w-4 text-primary" />
                  </span>
                  <span className="pt-1.5 leading-snug">diogos.nascimento@outlook.com</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackButtonClick({
                      button_text: "WhatsApp Business",
                      button_location: "footer",
                      button_action: "whatsapp",
                    })
                  }
                  className="group flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-primary/20">
                    <FaWhatsapp className="h-4 w-4 text-primary" />
                  </span>
                  <span className="pt-1.5 leading-snug">WhatsApp Business</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} SwiftWapDrive. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/50">
              Automação WhatsApp → Google Drive
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
