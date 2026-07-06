import ReactGA from "react-ga4";

export const GA_MEASUREMENT_ID = "G-6P46479MVT";

export type ButtonAction = "signup" | "whatsapp" | "scroll" | "navigation";

export type ButtonClickParams = {
  button_text: string;
  button_location: string;
  button_action: ButtonAction;
  plan_id?: string;
  nav_section?: string;
};

export function trackButtonClick(params: ButtonClickParams) {
  ReactGA.event("button_click", params);
}
