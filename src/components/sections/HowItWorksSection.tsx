import { Cpu, Download, CloudUpload, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const steps = [
  {
    number: "01",
    icon: FaWhatsapp,
    title: "Envio voluntário",
    description:
      "O usuário envia uma mídia voluntariamente ao WhatsApp da sua empresa.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Processamento via API oficial",
    description:
      "A API oficial do WhatsApp Business, integrada via Twilio, processa o evento de recebimento de forma segura.",
  },
  {
    number: "03",
    icon: Download,
    title: "Download seguro",
    description:
      "O arquivo é baixado com segurança através da infraestrutura oficial do WhatsApp, criptografado de ponta a ponta.",
  },
  {
    number: "04",
    icon: CloudUpload,
    title: "Upload para Google Drive",
    description:
      "O conteúdo é salvo automaticamente no Google Drive do usuário, organizado por tipo e data.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Contabilização",
    description:
      "Cada mensagem processada entra no seu painel: você sabe exatamente o que consumiu do pacote mensal e do excedente.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Como funciona
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Um processo simples, automatizado e seguro em 5 etapas
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative flex gap-6"
                  >
                    {/* Step indicator */}
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-background shadow-md">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>

                    {/* Content */}
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
