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
    description: "Nada fica perdido no celular: cada envio entra no fluxo sem você intervir.",
  },
  {
    icon: CloudUpload,
    title: "Upload seguro",
    description: "Seus arquivos vão para o Drive com criptografia, do jeito que a Meta e o Google exigem.",
  },
  {
    icon: FolderKanban,
    title: "Organização automática",
    description: "Encontre documentos por conversa, tipo e data — sem criar pasta à mão.",
  },
  {
    icon: UserCheck,
    title: "Autenticação de usuários",
    description: "Sua equipe acessa só o que deve, com login próprio e rastreável.",
  },
  {
    icon: KeyRound,
    title: "OAuth com Google Drive",
    description: "Você autoriza uma vez; depois disso o Drive é seu, não da plataforma.",
  },
  {
    icon: Gauge,
    title: "Uso transparente",
    description: "Veja quantas mensagens foram processadas e planeje custos com clareza.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard completo",
    description: "Visão rápida do que entrou, para onde foi e como está o consumo do mês.",
  },
  {
    icon: Shield,
    title: "Conformidade LGPD",
    description: "Menos risco na rotina: dados tratados com base na lei brasileira.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que muda no seu dia a dia
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Menos retrabalho, mais tempo com cliente — com a mesma stack que você já usa
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
