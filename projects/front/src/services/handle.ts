// biome-ignore lint/style/useImportType: <explanation>
import { InternalAxiosRequestConfig } from "axios";
import { useAccessType, useStorageAccessToken } from "../hook/acessToken";

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const { get: getAccessToken } = useStorageAccessToken();
  const { get: getAccessType } = useAccessType();

  const token = getAccessToken();
  const accessType = getAccessType();

  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
    if (typeof accessType === "string") {
      config.headers.set("X-Access-Type", accessType);
    }
  }


  return config;
};
