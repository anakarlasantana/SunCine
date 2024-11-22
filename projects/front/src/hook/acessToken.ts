import { projectName } from "../config";
import type { STORED } from "./interfaces";

export function useStorageAccessToken(): STORED {
  const valueKey = `@${projectName}:accessToken`;
  const get = () => {
    const item = localStorage.getItem(valueKey);
    return item ? JSON.parse(item) : null;
  };
  const set = (token: string) => {
    const tokenInfo = localStorage.setItem(valueKey, JSON.stringify(token));
    return tokenInfo;
  };

  const destroy = () => localStorage.removeItem(valueKey);
  return {
    get,
    set,
    destroy,
  };
}

export function useAccessType(): STORED {
  const valueKey = `@${projectName}:accessType`;

  const get = () => {
    const value = localStorage.getItem(valueKey);
    return value ? value : "";
  };
  const set = (token: string) => localStorage.setItem(valueKey, token);
  const destroy = () => localStorage.removeItem(valueKey);
  return {
    get,
    set,
    destroy,
  };
}
