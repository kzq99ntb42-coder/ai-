import React from "react";
import ReactDOM, { hydrateRoot } from "react-dom/client";
import App from "./App";
import { getLocale } from "./content";
import "./styles.css";

const app = (
  <React.StrictMode>
    <App locale={getLocale()} />
  </React.StrictMode>
);
const root = document.getElementById("root")!;

const prerenderedLocale = root.firstElementChild?.getAttribute("data-locale");

if (root.hasChildNodes() && prerenderedLocale === getLocale()) hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
