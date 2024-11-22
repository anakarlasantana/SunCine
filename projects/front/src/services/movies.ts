import { api } from "./api";

export const movie_service = {
  all: () => api.get("/movie/top-10").then((res) => res.data),
  like: (id: number) => api.put(`/movie/like/${id}`).then((res) => res.data),
  unliked: (id: number) => api.put(`/movie/like/${id}`).then((res) => res.data),
  list: () => api.get("/movie/likes").then((res) => res.data),
};
