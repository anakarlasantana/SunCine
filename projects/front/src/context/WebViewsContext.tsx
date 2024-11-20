import useMediaQuery from "@mui/material/useMediaQuery";
import React, { type PropsWithChildren } from "react";

type ContextProps = {
  currentBreakPoint(): "xs" | "sm" | "md";
};

const Context = React.createContext({} as ContextProps);

export const WebViewProvider = ({ children }: PropsWithChildren) => {
  const is_phone = useMediaQuery("(min-width: 320px) and (max-width: 425px)");
  const is_tablet = useMediaQuery("(min-width: 744px) and (max-width: 1133px)");
  const is_desktop = useMediaQuery("(min-width: 1200px)");

  function currentBreakPoint() {
    if (is_desktop) return "md";
    if (is_tablet) return "sm";
    if (is_phone) return "xs";
    return "md";
  }

  const contextValue = {
    currentBreakPoint,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export function useWebViewContext(): ContextProps {
  return React.useContext(Context);
}
