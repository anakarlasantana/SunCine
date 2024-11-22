import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { theme } from "../../../theme/theme";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  img?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function ConfirmDialog({
  open,
  title,
  img,
  onClose,
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          background: "rgba(79, 79, 79, 0.5)",
          backdropFilter: "blur(24px)",
          boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.24)",
          borderRadius: "8px",
          padding: 2,
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>
        <Stack alignItems="center" justifyContent="center" spacing={2}>
          <Stack
            sx={{
              backgroundColor: theme.palette.custom_colors.bright_orange,
              borderRadius: "50%",
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Favorite sx={{ color: "white", fontSize: "32px" }} />
          </Stack>
          <Typography
            fontSize={24}
            fontWeight={500}
            color="white"
            textAlign="center"
          >
            Você realmente quer remover este filme das suas curtidas?
          </Typography>
        </Stack>
      </DialogTitle>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="image-movie"
          />
          <CardContent
            sx={{ backgroundColor: theme.palette.custom_colors.black }}
          >
            <Typography
              align={"center"}
              fontSize={"18px"}
              color={theme.palette.neutral_gray[50]}
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <DialogActions sx={{ justifyContent: "center", gap: 2 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            color: theme.palette.custom_colors.bright_orange,
            borderColor: theme.palette.custom_colors.bright_orange,
            borderRadius: "80px",
            textTransform: "none",
            width: "185px",
            height: "47px",
          }}
        >
          Não quero
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.green[800],
            color: "white",
            width: "185px",
            height: "47px",
            borderRadius: "80px",
            textTransform: "none",
          }}
        >
          Sim, eu quero
        </Button>
      </DialogActions>
    </Dialog>
  );
}
