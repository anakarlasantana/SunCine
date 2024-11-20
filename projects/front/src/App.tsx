import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import { WebViewProvider } from "./context/WebViewsContext";
import { Login } from "./pages/Login/index";

export function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <WebViewProvider>
          <Login />
        </WebViewProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

