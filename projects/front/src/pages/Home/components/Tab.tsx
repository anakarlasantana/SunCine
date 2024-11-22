import { Favorite } from "@mui/icons-material";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { theme } from "../../../theme/theme";
import PersonIcon from "@mui/icons-material/Person";
import ticket from "../../../assets/ticket.svg";

interface MenuProps {
  onChange: (value: number) => void;
}

export function Menu({ onChange }: MenuProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        zIndex: 1,
        justifyItems: "center",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          ".MuiTabs-indicator": {
            backgroundColor: theme.palette.custom_colors.medium_orange,
          },
          ".MuiTab-root": {
            color: "white",
            textTransform: "none",
            fontSize: { xs: "14px", sm: "16px", md: "16px" },
            minWidth: { xs: "auto", sm: "120px" },
            "& .MuiSvgIcon-root": {
              color: "white",
              fontSize: { xs: "20px", sm: "24px" },
            },
          },
          ".Mui-selected": {
            fontWeight: "bold",
          },
        }}
      >
        <Tab
          icon={<img src={ticket} width="20px" height="20px" />}
          iconPosition="start"
          label="Filmes em alta"
          value={0}
        />
        <Tab
          icon={<Favorite />}
          iconPosition="start"
          label="Minhas curtidas"
          value={1}
        />
        <Tab
          icon={<PersonIcon />}
          iconPosition="start"
          label="Meu Perfil"
          value={2}
        />
      </Tabs>
    </Box>
  );
}
