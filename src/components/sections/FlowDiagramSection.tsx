import { ArrowDown, ArrowRight, FolderTree } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import type { IconType } from "react-icons";
import { SiGoogledrive, SiWhatsapp } from "react-icons/si";
import logoSwiftWapDrive from "../../../public/logo.png";

type Step = {
  label: string;
  icon?: LucideIcon | IconType;
  image?: string;
  color?: string;
};

const steps: Step[] = [
  { icon: SiWhatsapp, label: "Arquivo recebido", color: "#25D366" },
  { image: logoSwiftWapDrive, label: "SwiftWapDrive" },
  { icon: FolderTree, label: "Organiza" },
  { icon: SiGoogledrive, label: "Google Drive", color: "#4285F4" },
];

const StepVisual = ({ step, size }: { step: Step; size: "sm" | "md" }) => {
  const iconClass = size === "md" ? "h-7 w-7" : "h-6 w-6";
  const imageClass = size === "md" ? "h-8 w-8" : "h-7 w-7";

  if (step.image) {
    return <img src={step.image} alt="" className={`${imageClass} rounded-md object-contain`} />;
  }

  const Icon = step.icon!;
  return <Icon className={iconClass} style={step.color ? { color: step.color } : undefined} />;
};

const FlowDiagramSection = () => {
  return (
    <section id="fluxo" className="section-alt py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Fluxo automático
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Do WhatsApp ao Drive em segundos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Um fluxo simples que roda sozinho enquanto você trabalha
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-5xl rounded-2xl border border-border bg-background p-8 shadow-card sm:p-10">
            {/* Desktop: horizontal */}
            <div className="hidden items-center justify-center gap-3 md:flex lg:gap-5">
              {steps.map((step, index) => (
                <div key={step.label} className="flex items-center gap-3 lg:gap-5">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-card shadow-card ring-4 ring-background">
                      <StepVisual step={step} size="md" />
                    </div>
                    <p className="max-w-[120px] text-center text-sm font-medium text-foreground">{step.label}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="mb-8 h-5 w-5 shrink-0 text-primary/50" aria-hidden />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: vertical */}
            <div className="flex flex-col items-center md:hidden">
              {steps.map((step, index) => (
                <div key={step.label} className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-card shadow-card ring-4 ring-background">
                    <StepVisual step={step} size="sm" />
                  </div>
                  <p className="mt-3 text-center text-sm font-medium text-foreground">{step.label}</p>
                  {index < steps.length - 1 && (
                    <ArrowDown className="my-3 h-5 w-5 text-primary/40" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FlowDiagramSection;
