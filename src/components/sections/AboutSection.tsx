import {
  Bot,
  Clock3,
  FolderTree,
  HardDriveDownload,
  Search,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerAnimation";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: FolderTree,
    title: "Organização automática",
    description: "Arquivos no lugar certo, sem trabalho manual.",
  },
  {
    icon: Clock3,
    title: "Economia de tempo",
    description: "Pare de baixar e renomear arquivos todos os dias.",
  },
  {
    icon: HardDriveDownload,
    title: "Backup inteligente",
    description: "Cópia automática no Google Drive a cada envio.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "API oficial do WhatsApp e dados alinhados à LGPD.",
  },
  {
    icon: Zap,
    title: "API Oficial",
    description: "Integração estável, sem gambiarra.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Cresce com o volume da sua operação.",
  },
  {
    icon: Search,
    title: "Busca rápida",
    description: "Encontre tudo organizado por cliente, data e tipo.",
  },
  {
    icon: Bot,
    title: "Automação",
    description: "Do WhatsApp ao Drive em segundos, sem intervenção.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-alt py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que você ganha com o SwiftWapDrive
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Automação completa para quem recebe arquivos pelo WhatsApp todos os dias
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-full flex-col rounded-xl border border-border bg-background p-5 shadow-card transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AboutSection;
