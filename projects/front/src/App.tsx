import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { WebViewProvider } from "./context/WebViewsContext";
import { theme } from "./theme/theme";
import { Router } from "./router";

export function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <WebViewProvider>
          <Router />
        </WebViewProvider>
      </ThemeProvider>
    </HashRouter>
  );
}
