import { api } from "./api";

export const moviesService = {
  all: () =>
    api.get("/movie/top-10").then((res) => res.data),
}
