import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { WebViewProvider } from "./context/WebViewsContext";
import { theme } from "./theme/theme";
import { Router } from "./router";
import { AuthProvider } from "./context/AuthContext";

export function App() {
  return (
    <HashRouter>
      <AuthProvider>
      <ThemeProvider theme={theme}>
          <WebViewProvider>
            <Router />
          </WebViewProvider>
        </ThemeProvider>
      </AuthProvider>
    </HashRouter>
  );
}
