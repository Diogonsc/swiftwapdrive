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
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Swiftwapdrive</span>
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
            onClick={() => scrollToSection("funcionalidades")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Funcionalidades
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contato
          </button>
        </nav>

        <div className="hidden md:flex">
          <Button onClick={() => scrollToSection("contato")}>
            Fale conosco
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
              onClick={() => scrollToSection("funcionalidades")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contato
            </button>
            <Button onClick={() => scrollToSection("contato")} className="w-full">
              Fale conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
