import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth";
import type { ME } from "../interfaces/me";
import { useAccessType, useStorageAccessToken } from "../hook/acessToken";
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useStorageUserInfo } from "../hook/userInfo";

interface LoginPayload {
  email: string;
  password: string;
}

interface IContext {
  login: (payload: LoginPayload) => Promise<ME>;
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

  const login = async (payload: LoginPayload) => {
    try {
      const res = await authService.login(payload);
      storageAccessToken.set(res.payload.token);
      return me();
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw new Error("Falha ao fazer login");
    }
  };

  const me = async () => {
    try {
      const userInfo = await authService.me();
      storageUserInfo.set(userInfo);
      setUserInfo(userInfo);
      return userInfo;
    } catch (error) {
      console.error("Erro ao obter informações do usuário:", error);
      alert("Sessão expirada. Por favor, faça login novamente.");
      logout();
    }
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

export function useAuthContext() {
  return useContext(Context);
}
