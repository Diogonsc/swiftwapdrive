import ScrollReveal from "@/components/animations/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Preciso instalar algo no celular?",
    answer: "Não. Tudo funciona automaticamente após a configuração inicial.",
  },
  {
    question: "Funciona com qualquer WhatsApp?",
    answer: "Sim, funciona com o WhatsApp usando integração oficial via API.",
  },
  {
    question: "Onde os arquivos ficam armazenados?",
    answer: "Os arquivos são enviados diretamente para o seu Google Drive. O sistema não armazena seus arquivos.",
  },
  {
    question: "Preciso organizar os arquivos manualmente?",
    answer: "Não. Você define regras e o sistema organiza automaticamente para você.",
  },
  {
    question: "O que acontece quando eu ultrapasso o limite do plano?",
    answer: "Arquivos adicionais são cobrados por uso: R$0,25 por arquivo excedente.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim. Você pode cancelar a qualquer momento.",
  },
  {
    question: "É seguro?",
    answer: "Sim. A integração utiliza a API oficial do WhatsApp e conexão segura com o Google Drive.",
  },
  {
    question: "Funciona para equipes?",
    answer: "Sim. Desde que os arquivos passem pelo fluxo configurado, toda a equipe pode se beneficiar da automação.",
  },
] as const;

const FaqSection = () => {
  return (
    <section id="faq" className="border-t border-border bg-muted/25 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full rounded-xl border border-border bg-background px-4 shadow-sm sm:px-6">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`} className="border-border px-1">
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline sm:py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ainda com dúvidas? Comece a usar e veja na prática.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSection;
