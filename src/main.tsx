import React from "react";
import ReactDOM, { hydrateRoot } from "react-dom/client";
import App from "./App";
import { getInitialLocale } from "./content";
import "./styles.css";

const initialLocale = getInitialLocale();
const app = (
  <React.StrictMode>
    <App locale={initialLocale} />
  </React.StrictMode>
);
const root = document.getElementById("root")!;

const prerenderedLocale = root.firstElementChild?.getAttribute("data-locale");

if (root.hasChildNodes() && prerenderedLocale === initialLocale) hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
