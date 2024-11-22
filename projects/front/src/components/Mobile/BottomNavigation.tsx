import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { theme } from "../../theme/theme";
import ticket_mobile from "../../assets/ticket_mobile.svg";
import ticket_mobile_white from "../..//assets/ticket_mobile_white.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

interface BottomNavigationProps {
  onChange: (value: number) => void;
}

export function MyBottomNavigation({ onChange }: BottomNavigationProps) {
  const [value, setValue] = useState(0);

  const navItems = [
    {
      label: "Filmes em alta",
      icon:
        value === 0 ? (
          // biome-ignore lint/a11y/useAltText: <explanation>
          <img src={ticket_mobile_white} width="20px" height="20px" />
        ) : (
          // biome-ignore lint/a11y/useAltText: <explanation>
          <img src={ticket_mobile} width="20px" height="20px" />
        ),
    },
    { label: "Minhas curtidas", icon: <FavoriteBorderIcon /> },
    { label: "Meu Perfil", icon: <PersonOutlineOutlinedIcon /> },
  ];

  const getSxForAction = (isSelected: boolean) => ({
    color: isSelected ? "white" : "#41625C",
    "&.Mui-selected": {
      color: "white",
    },
    ".MuiBottomNavigationAction-label": {
      fontSize: "10px",
    },
    ".MuiBottomNavigationAction-icon": {
      height: "20px",
      width: "20px",
    },
    flex: 1,
    minWidth: 50,
    minHeight: 50,
  });

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      sx={{
        width: "100%",
        height: 70,
        position: "fixed",
        bottom: 1,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      {navItems.map((item, index) => (
        <BottomNavigationAction
          key={item.label}
          label={item.label}
          icon={item.icon}
          sx={getSxForAction(value === index)}
          onClick={() => onChange(index)}
        />
      ))}
    </BottomNavigation>
  );
}
