/** Cadastro na aplicação SaaS (sem plano pré-selecionado). */
export const APP_SIGNUP_URL = "https://www.swiftwapdrive.com/signup";

/** IDs dos cards em `PricingSection` → slugs do query param `plan` no /signup. */
const PLAN_SLUG_BY_PRICING_PLAN_ID: Record<string, string> = {
  starter: "starter",
  profissional: "professional",
  scale: "scale",
};

export function appSignupUrlForPricingPlanId(pricingPlanId: string): string {
  const slug = PLAN_SLUG_BY_PRICING_PLAN_ID[pricingPlanId];
  if (!slug) {
    return APP_SIGNUP_URL;
  }
  return `${APP_SIGNUP_URL}?plan=${slug}`;
}

/** Links externos para a app não devem substituir a landing na mesma aba. */
export const externalAppLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};
