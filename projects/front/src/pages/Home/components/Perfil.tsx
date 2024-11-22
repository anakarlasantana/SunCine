import { Avatar, Button, Stack, Typography } from "@mui/material";

interface PerfilProps {
  name: string | undefined;
  email: string | undefined;
  onLogout: () => void;
}

export function Perfil({name, email, onLogout} : PerfilProps) {

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "50vh",
        padding: 2,
        gap: 2,
        zIndex: 1,
      }}
    >
      <Avatar alt={"dev"} sx={{ width: "180px", height: "180px" }} />
      <Typography variant="h5" textAlign="center">
        {name}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary">
        {email}
      </Typography>
      <Button
        variant="text"
        sx={{
          textDecoration: "underline",
          color: "primary.main",
          fontWeight: "bold",
          textTransform: "none"
        }}
        onClick={onLogout}
      >
        Sair
      </Button>
    </Stack>
  );
}
