import { createContext, useMemo, useState } from "react";
import React from "react";
import type { AUTH } from "../../interfaces/auth";

interface IContext {
  states: {
    userInfo: AUTH | null;
  };
  actions: {
    setUserInfo: React.Dispatch<React.SetStateAction<AUTH | null>>;
  };
}

const Context = createContext({} as IContext);

export function LoginProvider({ children }: React.PropsWithChildren) {
  const [userInfo, setUserInfo] = useState<AUTH | null>(null);

  return (
    <Context.Provider
      value={useMemo(
        () => ({
          states: {
            userInfo,
          },
          actions: {
            setUserInfo,
          },
        }),
        [userInfo]
      )}
    >
      {children}
    </Context.Provider>
  );
}

export function useLoginContext() {
  return React.useContext(Context);
}
