import {
  Briefcase,
  Calculator,
  GraduationCap,
  Home,
  Landmark,
  Palette,
  Scale,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerAnimation";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const audiences = [
  {
    icon: Scale,
    title: "Advogados",
    description: "Contratos e peças chegando o tempo todo — sem perder no chat.",
  },
  {
    icon: Calculator,
    title: "Contadores",
    description: "Documentos e comprovantes no fluxo, organizados no Drive.",
  },
  {
    icon: Home,
    title: "Corretores",
    description: "Arquivos de imóveis e clientes, cada um na pasta certa.",
  },
  {
    icon: Briefcase,
    title: "Administrativo",
    description: "Menos trabalho manual e mais previsibilidade no arquivo.",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description: "Materiais, trabalhos e documentos de alunos organizados automaticamente.",
  },
  {
    icon: Palette,
    title: "Artistas / Criadores",
    description: "Arquivos de clientes e projetos salvos sem perder no chat.",
  },
  {
    icon: Users,
    title: "RH",
    description: "Currículos, contratos e documentos de colaboradores no lugar certo.",
  },
  {
    icon: Landmark,
    title: "Financeiro",
    description: "Comprovantes e notas fiscais organizados sem retrabalho.",
  },
];

const TargetAudienceSection = () => {
  return (
    <section id="publico" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Para quem é
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ideal para quem recebe arquivos todos os dias pelo WhatsApp
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Se a sua rotina depende de arquivo no WhatsApp, automação devolve tempo e reduz erro.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <StaggerItem key={audience.title}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-xl border border-border bg-background p-5 text-center shadow-card transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                  <audience.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{audience.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{audience.description}</p>
                <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/5" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
