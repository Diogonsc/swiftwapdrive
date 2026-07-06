import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";
import App from "./App.tsx";
import { GA_MEASUREMENT_ID } from "./lib/analytics";
import "./index.css";

ReactGA.initialize(GA_MEASUREMENT_ID);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
