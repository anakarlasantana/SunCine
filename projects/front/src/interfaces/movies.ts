export interface Movie {
  tmdb_id: number;
  id: string;
  likes: number;
  user_liked: boolean;
  backdrop_path: string;
  title: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}
