import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import logo from "../../../assets/logo.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import { theme } from "../../../theme/theme";
import { useNavigate } from "react-router-dom";
import { sitemap } from "../../../router/siteMap";

export function Header() {
  const navigate = useNavigate();

  function Logout() {
    navigate(sitemap.home);
  }

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        position: "relative",
        padding: "18px",
        zIndex: 1,
        objectFit: "cover",
        border: "solid",
        backdropFilter: "blur(4px)",
        background: "linear-gradient(270deg, #212121 -28.45%, #0A1916 100%)",
      }}
    >
      <img src={logo} alt="logo" width={"186px"} height={"49.7px"} />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyItems={"center"}
        spacing={2}
        style={{ border: "solid" }}
      >
        <Avatar />
        <Stack>
          <Typography
            fontSize={"16px"}
            sx={{ mb: -0.5, color: theme.palette.neutral_gray[50] }}
          >
            Olá
          </Typography>
          <Button
            variant="text"
            sx={{
              textTransform: "none",
              textDecoration: "underline",
              color: theme.palette.neutral_gray[500],
            }}
          >
            Ver perfil
          </Button>
        </Stack>
        <IconButton onClick={Logout}>
          <LogoutIcon style={{ color: theme.palette.neutral_gray[50] }} />
        </IconButton>
      </Stack>
    </Stack>
  );
}
