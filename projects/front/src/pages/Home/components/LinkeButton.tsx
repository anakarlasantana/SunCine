import { Button } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { theme } from "../../../theme/theme";

interface LikeButtonProps {
  on_like?: (liked: boolean, id_movie: number) => void;
  id_movie: number;
  size?: string;
  initial_like?: number;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  on_like,
  id_movie,
  size,
  initial_like = 0,
}) => {
  const [liked, setLiked] = useState<boolean>(!!initial_like);

  const handleLikeToggle = () => {
    const new_like = !liked;
    setLiked(new_like);
    if (on_like) {
      on_like(new_like, id_movie);
    }
  };

  useEffect(() => {
    const storedLike = localStorage.getItem(`liked_movie_${id_movie}`);
    if (storedLike !== null) {
      setLiked(JSON.parse(storedLike));
    }
  }, [id_movie]);

  return (
    <Button
      sx={{
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: liked ? theme.palette.custom_colors.bright_orange : "rgba(10, 25, 22, 0.7)",
        borderRadius: "100%",
        padding: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s, color 0.3s",
        zIndex: 10,
      }}
      onClick={handleLikeToggle}
    >
      <Favorite
        sx={{
          color: "white",
          fontSize: size,
        }}
      />
    </Button>
  );
};

