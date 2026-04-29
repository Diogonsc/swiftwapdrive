import { Star } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Adriana S.",
    role: "Atendimento",
    quote: "Nunca mais perdi arquivos de clientes no meio do WhatsApp.",
  },
  {
    name: "Rafael T.",
    role: "Comercial",
    quote: "Acabou a hora de ficar baixando foto e PDF no celular.",
  },
  {
    name: "Camila P.",
    role: "Coord. de Operações",
    quote: "Histórico no Drive ficou claro para todo mundo. Muito mais rápido.",
  },
];

const SocialProofSection = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Profissionais e equipes que recebem muito arquivo pelo WhatsApp
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-full flex-col rounded-xl border border-border bg-background p-6 shadow-sm"
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            "+500 usuários",
            "+50 mil arquivos organizados",
            "98% satisfação",
            "Suporte humano",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm font-semibold text-foreground">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
