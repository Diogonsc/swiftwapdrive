import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

interface ResendEmail {
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  html: string;
}

async function sendEmail(email: ResendEmail) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(email),
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send email: ${error}`);
  }
  
  return response.json();
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();
    console.log("Contact form submission from:", email);

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields");
      throw new Error("Nome, email e mensagem são obrigatórios");
    }

    // Send email notification to admin
    const emailResponse = await sendEmail({
      from: "Swiftwapdrive <onboarding@resend.dev>",
      to: ["contato@swiftwapdrive.com"],
      replyTo: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #14B8A5 0%, #0D9488 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; }
            .value { margin-top: 5px; padding: 12px; background: white; border-radius: 8px; border: 1px solid #e5e7eb; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #14B8A5; }
            .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">Nova Mensagem de Contato</h1>
              <p style="margin: 10px 0 0; opacity: 0.9;">Recebida através do site Swiftwapdrive</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nome</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #14B8A5;">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Telefone</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Mensagem</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Este email foi enviado automaticamente pelo formulário de contato do site.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to user
    await sendEmail({
      from: "Swiftwapdrive <onboarding@resend.dev>",
      to: [email],
      subject: "Recebemos sua mensagem - Swiftwapdrive",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #14B8A5 0%, #0D9488 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
            .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">Swiftwapdrive</h1>
              <p style="margin: 10px 0 0; opacity: 0.9;">Automação de arquivos via WhatsApp</p>
            </div>
            <div class="content">
              <h2 style="color: #14B8A5; margin-top: 0;">Olá, ${name}!</h2>
              <p>Recebemos sua mensagem e agradecemos o seu interesse no Swiftwapdrive.</p>
              <p>Nossa equipe irá analisar sua solicitação e entraremos em contato em breve, normalmente em até 24 horas úteis.</p>
              <p>Enquanto isso, fique à vontade para conhecer mais sobre nossa plataforma de automação de arquivos via WhatsApp.</p>
              <p style="margin-top: 30px;">Atenciosamente,<br><strong>Equipe Swiftwapdrive</strong></p>
            </div>
            <div class="footer">
              <p>Swiftwapdrive - Automação inteligente de arquivos</p>
              <p>CNPJ: 56.151.919/0001-30</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Confirmation email sent to user");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
