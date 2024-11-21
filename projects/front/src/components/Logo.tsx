import { Stack } from "@mui/material";
import { useWebViewContext } from "../context/WebViewsContext";
import logo from "../assets/logo.svg";

interface LogoProps {
  left: string;
}

export function Logo({left} : LogoProps){
  const { currentBreakPoint } = useWebViewContext();

  const logo_top_size = {
    xs: "80.39px",
    sm: "80.39px",
    md: "80.4px",
  };

  return (
    <Stack
    sx={{
      position: "absolute",
      top: logo_top_size[currentBreakPoint()],
      left: left,
      zIndex: 1,
      objectFit: "cover",
    }}
  >
    <img src={logo} alt="logo" width={"186px"} height={"49.7px"} />
  </Stack>
  );
};

