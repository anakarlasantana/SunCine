import type { AUTH } from "../interfaces/auth";
import type { ME } from "../interfaces/me";
import { api } from "./api";

export const authService = {
  login: (payload: any) =>
    api.post<AUTH>("/login", payload).then((res) => res.data),
  me: () => api.get<ME>("/user/me").then((res) => res.data),
};
