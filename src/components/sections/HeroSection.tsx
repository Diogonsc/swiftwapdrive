import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { APP_SIGNUP_URL, externalAppLinkProps } from "@/lib/app-links";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden gradient-subtle">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
            >
              Automação WhatsApp → Google Drive
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.2rem]"
            >
              Receba arquivos no WhatsApp e salve tudo{" "}
              <span className="text-primary">automaticamente no seu Google Drive</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Sem baixar, sem organizar manualmente, sem perder tempo.
              <br/> 
              Cada arquivo vai direto para a
              pasta certa — sozinho.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 space-y-2.5"
            >
              {[
                "Recebeu no WhatsApp → salvou no Drive automaticamente",
                "Arquivos organizados por cliente, data e tipo",
                "Pare de perder tempo baixando e renomeando arquivos",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground sm:text-base">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button size="lg" className="gap-2 shadow-primary" asChild>
                <a href={APP_SIGNUP_URL} {...externalAppLinkProps}>
                  Começar a organizar meus arquivos
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("como-funciona")}>
                Ver como funciona
              </Button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.27 }}
              className="mt-3 text-xs text-muted-foreground sm:text-sm"
            >
              Leva menos de 2 minutos para começar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm"
            >
              <span className="flex items-center gap-2">
                <FaCheck className="h-4 w-4 text-primary" />
                Sem instalação
              </span>
              <span className="flex items-center gap-2">
                <FaCheck className="h-4 w-4 text-primary" />
                Configuração em minutos
              </span>
              <span className="flex items-center gap-2">
                <FaCheck className="h-4 w-4 text-primary" />
                API oficial do WhatsApp
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-[102%] max-w-none sm:w-[101%] lg:w-[106%] lg:-ml-2"
          >
            <div className="w-full">
              <img src="/notebook.png" alt="Notebook" className="h-auto w-full scale-100 object-contain" />
            </div>
            <div className="absolute -bottom-6 right-3 z-10 w-[32%] max-w-[180px] sm:-bottom-8 sm:right-4 sm:w-[30%] sm:max-w-[220px]">
              <img src="/phone.png" alt="WhatsApp" className="h-auto w-full object-contain drop-shadow-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
