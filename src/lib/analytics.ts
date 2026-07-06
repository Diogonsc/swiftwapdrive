export const GA_MEASUREMENT_ID = "G-6P46479MVT";

export type ButtonAction = "signup" | "whatsapp" | "scroll" | "navigation";

export type ButtonClickParams = {
  button_text: string;
  button_location: string;
  button_action: ButtonAction;
  plan_id?: string;
  nav_section?: string;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function trackButtonClick(params: ButtonClickParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "button_click", params);
}
