import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A1916",
      light: "#DFE5E4",
      dark: "#181818",
      contrastText: "#FCFCFC",
    },
    secondary: {
      main: "#212121",
      dark: "#3B3B3B",
      contrastText: "#545454",
    },
  },
});

export default theme;
