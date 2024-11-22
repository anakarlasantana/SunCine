import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import logo from "../../../assets/logo.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import { theme } from "../../../theme/theme";
import { useNavigate } from "react-router-dom";
import { sitemap } from "../../../router/siteMap";
import { useWebViewContext } from "../../../context/WebViewsContext";

export function Header() {
  const navigate = useNavigate();
  const { currentBreakPoint } = useWebViewContext();

  function Logout() {
    navigate(sitemap.auth.login);
  }

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        position: "relative",
        padding: { xs: "12px", sm: "18px" },
        zIndex: 1,
        objectFit: "cover",
        backdropFilter: "blur(4px)",
        background: "linear-gradient(270deg, #212121 -28.45%, #0A1916 100%)",
      }}
    >
      <img
        src={logo}
        alt="logo"
        width="100%"
        style={{ maxWidth: "186px", height: "auto" }}
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        spacing={2}
      >
        <Avatar sx={{ width: 40, height: 40 }} />
        {currentBreakPoint() === "md" && (
          <>
            <Stack alignItems="center">
              <Typography
                fontSize="16px"
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
          </>
        )}
      </Stack>
    </Stack>
  );
}
