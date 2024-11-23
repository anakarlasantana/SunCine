import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { movie_service } from "../../../services/movies";
import type { Movie } from "../../../interfaces/movies";
import { theme } from "../../../theme/theme";
import { LikeButton } from "./LikeButton";

export function ListMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await movie_service.all();
      const likedMovies = JSON.parse(
        localStorage.getItem("likedMovies") || "{}"
      );
      const moviesWithLikes = response.map((movie: Movie) => ({
        ...movie,
        liked: likedMovies[movie.tmdb_id] || false,
      }));
      setMovies(moviesWithLikes);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLikeToggle = async (liked: boolean, id_movie: number) => {
    try {
      if (liked) {
        await movie_service.like(id_movie);
      } else {
        await movie_service.unliked(id_movie);
      }

      const updatedMovies = movies.map((movie) =>
        movie.tmdb_id === id_movie ? { ...movie, liked } : movie
      );
      setMovies(updatedMovies);

      const likedMovies = JSON.parse(
        localStorage.getItem("likedMovies") || "{}"
      );
      likedMovies[id_movie] = liked;
      localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
    } catch (error) {
      console.error("Erro ao atualizar o like:", error);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      {loading ? (
        <CircularProgress
          size={60}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: theme.palette.primary.main,
          }}
        />
      ) : (
        <Grid container padding={2} spacing={2} justifyContent="center">
          {movies.length > 0 && (
            <Grid item xs={12} sm={8} md={8}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={movies[0].backdrop_path}
                    alt={movies[0].original_title}
                    sx={{
                      objectFit: "cover",
                      height: "330px",
                    }}
                  />
                  <LikeButton
                    size="40px"
                    id_movie={movies[0].tmdb_id}
                    on_like={handleLikeToggle}
                    initial_like={movies[0].likes}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 1,
                      left: 0,
                      right: 0,
                      backdropFilter: "blur(4px)",
                      color: "white",
                      padding: "16px",
                    }}
                  >
                    <Typography variant="h5" component="div">
                      {movies[0].original_title}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.neutral_gray[50],
                        fontSize: "14px",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {movies[0].overview}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )}
          {movies.slice(1, 3).map((movie) => (
            <Grid item xs={12} sm={2} md={2} key={movie.id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={movie.backdrop_path}
                    alt={movie.original_title}
                    sx={{
                      objectFit: "cover",
                      height: "330px",
                    }}
                  />
                  <LikeButton
                    id_movie={movie.tmdb_id}
                    size="40px"
                    on_like={handleLikeToggle}
                    initial_like={movie.likes}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 1,
                      left: 0,
                      right: 0,
                      backdropFilter: "blur(4px)",
                      color: "white",
                      padding: "8px",
                    }}
                  >
                    <Typography variant="h6" component="div">
                      {movie.original_title}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.neutral_gray[50],
                        fontSize: "14px",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {movie.overview}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          {movies.slice(4, 10).map((movie) => (
            <Grid item xs={12} sm={2} md={2} key={movie.id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={movie.backdrop_path}
                    alt={movie.original_title}
                    sx={{
                      objectFit: "cover",
                      height: "296px",
                    }}
                  />
                  <LikeButton
                    id_movie={movie.tmdb_id}
                    size="40px"
                    initial_like={movie.likes}
                    on_like={handleLikeToggle}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 1,
                      left: 0,
                      right: 0,
                      backdropFilter: "blur(4px)",
                      color: "white",
                      padding: "8px",
                    }}
                  >
                    <Typography variant="h6" component="div">
                      {movie.original_title}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.neutral_gray[50],
                        fontSize: "14px",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {movie.overview}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
