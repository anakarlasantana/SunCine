import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth";
import type { ME } from "../interfaces/me";
import { useStorageUserInfo } from "../hook/userInfo";
import { useAccessType, useStorageAccessToken } from "../hook/acessToken";
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface IContext {
  login: (payload) => Promise<ME>;
  logout: () => void;
  userInfo: ME | null;
}
const Context = createContext({} as IContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const storageAccessToken = useStorageAccessToken();
  const storageUserInfo = useStorageUserInfo();
  const storageAccessType = useAccessType();
  const [userInfo, setUserInfo] = useState<ME | null>(null);
  const navigate = useNavigate();

  const login = async (payload) => {
    await authService.login(payload).then((res) => {
      storageAccessToken.set(res.payload.token);
    });
    return me();
  };

  const me = async () => {
    const userInfo = await authService.me();
    storageUserInfo.set(JSON.stringify(userInfo));
    setUserInfo(userInfo);
    return userInfo;
  };

  const logout = () => {
    storageAccessToken.destroy();
    storageUserInfo.destroy();
    storageAccessType.destroy();
    setUserInfo(null);
    navigate("/");
  };

  useEffect(() => {
    const token = storageAccessToken.get();
    const storedUserInfo = storageUserInfo.get();

    if (token) {
      if (storedUserInfo) {
        setUserInfo(storedUserInfo as ME);
      } else {
        me().catch(() => logout());
      }
    }
  }, []);

  return (
    <Context.Provider value={{ login, logout, userInfo }}>
      {children}
    </Context.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
  return useContext(Context);
}
