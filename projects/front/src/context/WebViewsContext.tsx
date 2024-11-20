import useMediaQuery from "@mui/material/useMediaQuery";
import React, { PropsWithChildren, useMemo } from "react";

type ContextProps = {
  currentBreakPoint(): "xs" | "sm" | "md";
};

const Context = React.createContext({} as ContextProps);

export const WebViewProvider = ({ children }: PropsWithChildren) => {
  const isPhone = useMediaQuery("(min-width: 390px) and (max-width: 844px)");
  const isTablet = useMediaQuery("(min-width: 744px) and (max-width: 1133px)");
  const isDesktop = useMediaQuery("(min-width: 1512px)");

  function currentBreakPoint() {
    if (isDesktop) return "md";
    if (isTablet) return "sm";
    if (isPhone) return "xs";
    return "md";
  }

  const contextValue = useMemo(
    () => ({
      currentBreakPoint,
    }),
    [isDesktop, isTablet, isPhone]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export function useWebViewContext(): ContextProps {
  return React.useContext(Context);
}
