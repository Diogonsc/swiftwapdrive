import { FolderTree, MessageCircle, CloudUpload } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const steps = [
  {
    number: "01",
    icon: FaWhatsapp,
    title: "Conecte seu WhatsApp",
    description: "Associe o número da sua operação em poucos minutos, com o fluxo guiado.",
  },
  {
    number: "02",
    icon: FolderTree,
    title: "Escolha como organizar seus arquivos (pastas e regras)",
    description: "Por cliente, data ou tipo — o sistema aplica sozinho.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Continue usando normalmente",
    description: "Clientes e equipe enviam arquivos como sempre. Você não muda o hábito de ninguém.",
  },
  {
    number: "04",
    icon: CloudUpload,
    title: "Seus arquivos são enviados automaticamente para o Google Drive",
    description: "Cada envio vira arquivo no Drive, já no lugar certo. Zero trabalho manual na rotina.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Como funciona</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Quatro passos simples — o resto é automação no seu dia a dia
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative flex gap-6"
                  >
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-background shadow-md">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>

                    <div className="flex-1 rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-primary">{step.number}</span>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
