import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { movie_service } from "../../../services/movies";
import { useEffect, useState } from "react";
import type { Movie } from "../../../interfaces/movies";
import { LikeButton } from "./LikeButton";
import { theme } from "../../../theme/theme";
import { useWebViewContext } from "../../../context/WebViewsContext";
import { ConfirmDialog } from "./ConfirmDialog";

export function LikedMovies() {
  const [myfavorites, setMyFavorites] = useState<Movie[]>([]);
  const { currentBreakPoint } = useWebViewContext();
  const [openDailog, setOpenDialog] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<{
    img: string;
    title: string;
    id: number;
  } | null>(null);

  const fetchLikedMovies = async () => {
    try {
      const response = await movie_service.list();
      setMyFavorites(response);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const handleLikeToggle = (favorite: Movie) => {
    setOpenDialog(!!favorite);
    setSelectedMovie({
      img: favorite.backdrop_path,
      title: favorite.original_title,
      id: favorite.tmdb_id,
    });
  };

  const onSubmit = async (movieId: number) => {
    try {
      await movie_service.unliked(movieId);
      await fetchLikedMovies();
      setOpenDialog(false);
    } catch (error) {
      console.error(
        "Ocorreu um erro ao tentar remover o like para o filme com ID:",
        movieId,
        error
      );
    }
  };

  useEffect(() => {
    fetchLikedMovies();
  }, []);

  return (
    <Stack
      sx={{
        display: "flex",
        zIndex: 1,
        padding: 2,
        gap: 2,
        maxWidth: currentBreakPoint() === "md" ? "814.01px" : "none",
        margin: "0 auto",
      }}
    >
      {myfavorites.length > 0 ? (
        <>
          <Typography
            fontSize={"24px"}
            color={theme.palette.neutral_gray[50]}
            gutterBottom
          >
            Minhas curtidas
          </Typography>
          <Stack spacing={2}>
            {myfavorites.map((favorite) => (
              <Card
                key={favorite.tmdb_id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(10, 25, 22, 0.7)",
                  backdropFilter: "blur(4px)",
                  flexDirection:
                    currentBreakPoint() === "xs" ? "column" : "row",
                }}
              >
                <CardMedia
                  component="img"
                  image={favorite.backdrop_path}
                  alt={favorite.original_title}
                  sx={{
                    width: currentBreakPoint() === "xs" ? "100%" : "186px",
                    height: currentBreakPoint() === "xs" ? "auto" : "121px",
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    color: "white",
                    textAlign: currentBreakPoint() === "xs" ? "center" : "left",
                  }}
                >
                  <Typography variant="h5" component="div">
                    {favorite.original_title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 2,
                      textOverflow: "ellipsis",
                    }}
                  >
                    {favorite.overview}
                  </Typography>
                  <LikeButton
                    size="40px"
                    id_movie={favorite.tmdb_id}
                    on_like={() => handleLikeToggle(favorite)}
                    initial_like={favorite.likes}
                  />
                </CardContent>
              </Card>
            ))}
          </Stack>
        </>
      ) : (
        <Typography
          fontSize={"18px"}
          color={theme.palette.neutral_gray[50]}
          textAlign="center"
          padding={10}
        >
          Nenhum filme foi favoritado ainda.
        </Typography>
      )}
      <ConfirmDialog
        open={openDailog}
        onClose={() => setOpenDialog(false)}
        onConfirm={() => onSubmit(selectedMovie?.id || 0)}
        img={selectedMovie?.img}
        title={selectedMovie?.title}
      />
    </Stack>
  );
}
