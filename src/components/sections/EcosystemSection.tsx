import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerAnimation";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { SiDropbox, SiGoogledrive, SiWhatsapp } from "react-icons/si";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import logoSwiftWapDrive from "../../../public/logo.png";

type Integration = {
  icon: LucideIcon | IconType;
  name: string;
  description: string;
  color: string;
  status: "active" | "soon";
};

const integrations: Integration[] = [
  {
    icon: SiWhatsapp,
    name: "WhatsApp Business",
    description: "Receba arquivos via API oficial, com estabilidade e segurança.",
    color: "#25D366",
    status: "active",
  },
  {
    icon: SiGoogledrive,
    name: "Google Drive",
    description: "Arquivos salvos automaticamente na pasta que você definir.",
    color: "#4285F4",
    status: "active",
  },
  {
    icon: SiDropbox,
    name: "Dropbox",
    description: "Integração com armazenamento em nuvem para ampliar seu fluxo.",
    color: "#0061FF",
    status: "soon",
  },
  {
    icon: Cloud,
    name: "OneDrive",
    description: "Conecte seu ecossistema Microsoft ao fluxo de automação.",
    color: "#0078D4",
    status: "soon",
  },
];

const flowSteps = [
  { icon: SiWhatsapp, label: "WhatsApp", color: "#25D366" },
  { image: logoSwiftWapDrive, label: "SwiftWapDrive" },
  { icon: SiGoogledrive, label: "Google Drive", color: "#4285F4" },
] as const;

const EcosystemSection = () => {
  return (
    <section id="ecossistema" className="section-alt py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Integrações
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Conectado ao seu <span className="text-gradient">ecossistema</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Integrações com as ferramentas que você já usa no dia a dia
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-3 sm:gap-5">
            {flowSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-3 sm:gap-5">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background shadow-card sm:h-14 sm:w-14">
                    {"image" in step ? (
                      <img src={step.image} alt="" className="h-7 w-7 rounded-md object-contain sm:h-8 sm:w-8" />
                    ) : (
                      <step.icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: step.color }} />
                    )}
                  </div>
                  <span className="text-xs font-medium text-muted-foreground sm:text-sm">{step.label}</span>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="mb-5 h-4 w-4 shrink-0 text-primary/50 sm:h-5 sm:w-5" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <StaggerContainer className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
          {integrations.map((item) => (
            <StaggerItem key={item.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-xl border bg-background p-5 shadow-card transition-shadow hover:shadow-lg",
                  item.status === "active" ? "border-border" : "border-dashed border-border/80 opacity-80",
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                    style={{ color: item.color }}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-foreground">{item.name}</p>
                      {item.status === "soon" && (
                        <Badge variant="outline" className="text-xs text-muted-foreground">
                          Em breve
                        </Badge>
                      )}
                      {item.status === "active" && (
                        <Badge variant="secondary" className="border-primary/20 bg-primary/10 text-xs text-primary">
                          Ativo
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/5" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default EcosystemSection;
