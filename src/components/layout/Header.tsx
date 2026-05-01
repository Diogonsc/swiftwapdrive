import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-lg">
            <img
              src="/logo.png"
              alt="SwiftWapDrive"
              className="h-10 w-10 rounded-lg text-primary-foreground"
            />
          </div>
          <span className="text-xl font-semibold text-foreground">
            SwiftWapDrive
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("como-funciona")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Como funciona
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection("publico")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Para quem é
          </button>
          <button
            onClick={() => scrollToSection("planos")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Preço
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </button>
        </nav>

        <div className="hidden md:flex">
          <Button onClick={() => scrollToSection("planos")}>
            Começar agora
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("publico")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Para quem é
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Preço
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("planos")}
              className="w-full"
            >
              Começar agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
