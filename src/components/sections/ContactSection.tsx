import { useState } from "react";
import { Mail, MessageCircle, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(8, "WhatsApp é obrigatório").max(20, "WhatsApp muito longo"),
  segment: z.string().trim().min(2, "Segmento é obrigatório").max(80, "Segmento muito longo"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    segment: "",
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Erro de validação",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          message: `Segmento: ${result.data.segment}. Quero organizar meus arquivos no Swiftwapdrive.`,
        },
      });

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({ name: "", email: "", phone: "", segment: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato diretamente pelo email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Organize seu WhatsApp hoje — e pare de torcer para arquivo não sumir
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sem complicação: fale com a gente, veja se encaixa na sua rotina e comece com teste
              grátis. Sem pegadinha, sem instalação estranha.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact Info */}
            <ScrollReveal delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                <a
                  href="mailto:diogos.nascimento@outlook.com"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">diogos.nascimento@outlook.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/5521973819373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">+55 21 97381-9373</p>
                  </div>
                </a>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                  <h3 className="font-semibold text-foreground">Comece agora sem complicação</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Preencha em menos de 1 minuto. Nossa equipe te ajuda a configurar sem risco e
                    sem dor de cabeça.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={0.2} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-background p-8 shadow-sm"
              >
                <div className="grid gap-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">WhatsApp *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(xx) xxxxx-xxxx"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="segment">Segmento *</Label>
                      <Input
                        id="segment"
                        name="segment"
                        placeholder="Ex.: escritório, clínica, empresa"
                        value={formData.segment}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
                    Ao enviar, você concorda em receber contato para ativação do teste grátis.
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Quero organizar meus arquivos agora
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
