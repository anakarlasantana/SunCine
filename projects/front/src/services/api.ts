// biome-ignore lint/style/useImportType: <explanation>
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { API_URL } from "../config";
import qs from 'qs'
import { requestInterceptor } from "./handle";

const createApiInstance = (version: number | null): AxiosInstance => {
  const versionPath = version ? `v${version}/` : "";


  return axios.create({
    baseURL: `${API_URL}${versionPath}`,
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: 'repeat' })
  });
};

const api = createApiInstance(null);

api.interceptors.request.use((config: InternalAxiosRequestConfig) =>
  requestInterceptor(config)
);

export { api };
