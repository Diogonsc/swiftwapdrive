import {
  FileDown,
  CloudUpload,
  FolderKanban,
  UserCheck,
  KeyRound,
  Gauge,
  LayoutDashboard,
  Shield,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerAnimation";
import { motion } from "framer-motion";

const features = [
  {
    icon: FileDown,
    title: "Recebimento automático",
    description: "Arquivos enviados ao WhatsApp são recebidos automaticamente pela plataforma.",
  },
  {
    icon: CloudUpload,
    title: "Upload seguro",
    description: "Transferência criptografada para o Google Drive do usuário.",
  },
  {
    icon: FolderKanban,
    title: "Organização automática",
    description: "Arquivos organizados automaticamente por tipo e data de envio.",
  },
  {
    icon: UserCheck,
    title: "Autenticação de usuários",
    description: "Sistema completo de cadastro e login para acesso seguro.",
  },
  {
    icon: KeyRound,
    title: "OAuth com Google Drive",
    description: "Autorização segura via OAuth para acesso ao Drive do usuário.",
  },
  {
    icon: Gauge,
    title: "Controle de planos",
    description: "Gestão de planos e limites mensais de uso por usuário.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard completo",
    description: "Painel administrativo para acompanhar uso e gerenciar arquivos.",
  },
  {
    icon: Shield,
    title: "Conformidade LGPD",
    description: "Plataforma em total conformidade com a legislação brasileira.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Principais funcionalidades
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tudo o que você precisa para automatizar o recebimento e armazenamento de arquivos
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group h-full rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturesSection;
