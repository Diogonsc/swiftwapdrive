import { Building2, Briefcase, GraduationCap, HeartPulse, Home, UsersRound } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerAnimation";
import { motion } from "framer-motion";

const audiences = [
  {
    icon: Briefcase,
    title: "Profissionais liberais",
    description: "Quem atende clientes e recebe arquivos diariamente.",
  },
  {
    icon: HeartPulse,
    title: "Clínicas e saúde",
    description: "Fluxo intenso de exames, documentos e imagens.",
  },
  {
    icon: Building2,
    title: "Empresas e times",
    description: "Equipes com alto volume de atendimento no WhatsApp.",
  },
  {
    icon: Home,
    title: "Imobiliárias",
    description: "Fotos, contratos e comprovantes em uma rotina contínua.",
  },
  {
    icon: GraduationCap,
    title: "Escolas",
    description: "Documentos e anexos para gestão e comunicação.",
  },
  {
    icon: UsersRound,
    title: "Outros segmentos",
    description: "Qualquer operação que recebe mídia com frequência.",
  },
];

const TargetAudienceSection = () => {
  return (
    <section id="publico" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ideal para quem recebe arquivo todo dia pelo WhatsApp
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              O problema é o mesmo em vários setores: mídia chegando rápido, celular lotando e
              alguém tendo que “arrumar isso depois”. Se isso soa familiar, você está no lugar
              certo.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {audiences.map((audience) => (
            <StaggerItem key={audience.title}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-full flex-col items-center text-center gap-3 rounded-xl border border-border bg-background p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <audience.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{audience.title}</h3>
                <p className="text-xs text-muted-foreground">{audience.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
