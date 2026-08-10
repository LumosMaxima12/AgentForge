import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppProviders } from "./app/providers";
import { router } from "./app/router";
import { I18nProvider } from "./i18n/I18nProvider";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./styles/tokens.css";
import "./styles/themes.css";
import "./styles/globals.css";
import "./styles/visual-polish.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <AppProviders>
          <RouterProvider router={router} />
        </AppProviders>
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
