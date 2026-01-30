import { User, Building2, Stethoscope, Scale, Dumbbell, Church, Store } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Profissionais autônomos",
    description: "Fotógrafos, designers, advogados e consultores que recebem arquivos de clientes.",
  },
  {
    icon: Building2,
    title: "Pequenas e médias empresas",
    description: "Negócios que precisam organizar documentos e mídias recebidas via WhatsApp.",
  },
  {
    icon: Stethoscope,
    title: "Clínicas e consultórios",
    description: "Profissionais de saúde que recebem exames, fotos e documentos de pacientes.",
  },
  {
    icon: Scale,
    title: "Escritórios e advocacias",
    description: "Recebimento organizado de documentos, procurações e contratos.",
  },
  {
    icon: Dumbbell,
    title: "Academias e personal trainers",
    description: "Fotos de evolução, fichas de treino e documentos de alunos.",
  },
  {
    icon: Church,
    title: "Igrejas e associações",
    description: "Organização de fotos de eventos, documentos administrativos e comunicados.",
  },
  {
    icon: Store,
    title: "Comércios e lojas",
    description: "Catálogos, fotos de produtos, notas fiscais e comprovantes.",
  },
];

const TargetAudienceSection = () => {
  return (
    <section id="publico" className="bg-muted/30 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Para quem é o Swiftwapdrive?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ideal para profissionais e empresas que recebem muitos arquivos via WhatsApp
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="flex gap-4 rounded-xl border border-border bg-background p-6 shadow-sm"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <audience.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{audience.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
