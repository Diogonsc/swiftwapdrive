import { FileCheck, Headphones, Quote, Star, Users } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Adriana S.",
    role: "Atendimento",
    quote: "Parei de perder tempo baixando coisa no celular — tudo vai direto pro Drive.",
    initials: "AS",
  },
  {
    name: "Rafael T.",
    role: "Comercial",
    quote: "A automação virou rotina: recebi no WhatsApp, já está organizado na pasta.",
    initials: "RT",
    featured: true,
  },
  {
    name: "Camila P.",
    role: "Coord. de Operações",
    quote: "Menos retrabalho e menos pedido de arquivo de novo para o cliente.",
    initials: "CP",
  },
] as const;

const stats = [
  { icon: Users, value: "+500", label: "usuários ativos" },
  { icon: FileCheck, value: "+50 mil", label: "arquivos organizados" },
  { icon: Star, value: "98%", label: "satisfação" },
  { icon: Headphones, value: "100%", label: "suporte humano" },
] as const;

const SocialProofSection = () => {
  return (
    <section id="depoimentos" className="section-alt relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,hsl(174_80%_46%_/_0.06),transparent)]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Depoimentos reais
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Quem automatizou a rotina{" "}
              <span className="text-gradient">ganhou tempo de volta</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Profissionais que recebem arquivos pelo WhatsApp todos os dias
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-xl border p-6 shadow-card transition-shadow hover:shadow-lg",
                  "featured" in t && t.featured
                    ? "border-primary/30 bg-primary/5 md:-translate-y-2"
                    : "border-border bg-background",
                )}
              >
                <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" aria-hidden />

                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="relative z-10 mt-4 flex-1 text-base leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="relative z-10 mt-6 flex items-center gap-3 border-t border-border/80 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gradient-brand text-xs font-bold text-primary-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>

                <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-primary/5" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-xl border border-border bg-background shadow-card">
            <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-2 px-5 py-6 text-center sm:py-7"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold tracking-tight text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SocialProofSection;
