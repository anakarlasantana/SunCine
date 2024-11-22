import { projectName } from "../config";
import type { STORED } from "./interfaces";

export function useStorageUserInfo(): STORED {
  const valueKey = `@${projectName}:userInfo`;
  const get = () => {
    const item = localStorage.getItem(valueKey);
    return item ? JSON.parse(item) : null;
  };
  const set = (val) => localStorage.setItem(valueKey, JSON.stringify(val));
  const destroy = () => localStorage.removeItem(valueKey);
  return {
    get,
    set,
    destroy,
  };
}
