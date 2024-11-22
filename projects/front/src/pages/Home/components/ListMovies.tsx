import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { moviesService } from "../../../services/movies";
import type { Movie } from "../../../interfaces/movies";
import { theme } from "../../../theme/theme";

export function ListMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await moviesService.all();
      setMovies(response);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

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
                  <Typography variant="body2">{movies[0].overview}</Typography>
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
    </Box>
  );
}
