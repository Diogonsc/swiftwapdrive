import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/animations/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaWhatsapp } from "react-icons/fa6";
import { APP_SIGNUP_URL, externalAppLinkProps } from "@/lib/app-links";

const WHATSAPP_URL = "https://wa.me/5521973819373";

const FAQ_ITEMS = [
  {
    question: "Preciso instalar algo no celular?",
    answer: "Não. Tudo funciona automaticamente após a configuração inicial.",
  },
  {
    question: "Funciona com qualquer WhatsApp?",
    answer:
      "Não. A integração funciona apenas com o WhatsApp Business, via API oficial. Se você usa o WhatsApp comum, baixe o app WhatsApp Business, migre sua conta e, em seguida, faça a configuração na plataforma SwiftAppDrive.",
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
    answer:
      "Ainda não. No momento, a automação é individual, mas estamos trabalhando para disponibilizar o suporte a equipes em breve.",
  },
] as const;

const FaqSection = () => {
  return (
    <section id="faq" className="border-t border-border section-alt py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 border-primary/20 bg-primary/10 text-primary">
              Dúvidas frequentes
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Perguntas frequentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tudo o que você precisa saber antes de começar
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full rounded-xl border border-border bg-background px-4 shadow-card sm:px-6">
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
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ainda com dúvidas? Fale com a gente ou comece agora e veja na prática.
            </p>
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="gap-2 shadow-primary sm:min-w-[200px]" asChild>
                <a href={APP_SIGNUP_URL} {...externalAppLinkProps}>
                  Começar agora
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="sm:min-w-[200px]" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="h-4 w-4" aria-hidden />
                  Tirar dúvida no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSection;
