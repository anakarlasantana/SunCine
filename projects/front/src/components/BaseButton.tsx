import { Button } from "@mui/material";
import { theme } from "../theme/theme";

interface BaseButtonProps {
  title: string;
  onChange: () => void;
}

export function BaseButton({ title, onChange }: BaseButtonProps){
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: theme.palette.green[800],
        borderRadius: "80px",
        textTransform: "none",
      }}
      onClick={onChange}
    >
      {title}
    </Button>
  );
};
