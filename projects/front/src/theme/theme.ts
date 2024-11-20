import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutralGray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    customColors: {
      black: string;
      brightOrange: string;
      mediumOrange: string;
      lightOrange: string;
      liveYellow: string;
      liveGreen: string;
    };
    bright: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    };
    orangeDark: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    };
    orangeLight: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    };
    yellow: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    };
    green: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    };
  }

  interface PaletteOptions {
    neutralGray?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    customColors?: {
      black: string;
      brightOrange: string;
      mediumOrange: string;
      lightOrange: string;
      liveYellow: string;
      liveGreen: string;
    };
    bright: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    };
    orangeDark: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    };
    orangeLight: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    };
    yellow: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    };
    green: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A1916",
      light: "#DFE5E4",
      dark: "#212121",
      contrastText: "#FCFCFC",
    },
    neutralGray: {
      50: "#F7F7F5",
      100: "#EDEDED",
      200: "#E0E0E0",
      300: "#D3D3D3",
      400: "#BEBEBE",
      500: "#A1A1A1",
      600: "#8D8D8D",
      700: "#707070",
      800: "#595959",
      900: "#424242",
    },
    customColors: {
      black: "#181818",
      brightOrange: "#FF5959",
      mediumOrange: "#FF5F00",
      lightOrange: "#FF8800",
      liveYellow: "#FFB000",
      liveGreen: "#193B34",
    },
    bright: {
      100: "#FEE7E5",
      200: "#FFC8B7",
      300: "#FFA489",
      400: "#FF7E59",
      500: "#FF5E33",
      600: "#FF3A04",
      700: "#FF3200",
      800: "#F12A00",
      900: "#E32000",
      1000: "#CC0000",
    },
    orangeDark: {
      100: "#FCE9E6",
      200: "#FFCDB8",
      300: "#FFAD8B",
      400: "#FF8D5B",
      500: "#FF7434",
      600: "#FF5F00",
      700: "#F45700",
      800: "#E65000",
      900: "#D94900",
      1000: "#C13A00",
    },
    orangeLight: {
      100: "#FFF3E0",
      200: "#FFDFB1",
      300: "#FFCA7F",
      400: "#FFB44C",
      500: "#FFA424",
      600: "#FF9400",
      700: "#FF8800",
      800: "#F97802",
      900: "#F36703",
      1000: "#EA4B04",
    },
    yellow: {
      100: "#FFF7E1",
      200: "#FFEAB2",
      300: "#FFDD81",
      400: "#FFD14D",
      500: "#FFC626",
      600: "#FFBC04",
      700: "#FFB000",
      800: "#FF9B03",
      900: "#FE8A04",
      1000: "#FE6A07",
    },
    green: {
      100: "#E0EFEF",
      200: "#B1D8D5",
      300: "#80BFBA",
      400: "#52A69F",
      500: "#36938C",
      600: "#268178",
      700: "#23756C",
      800: "#20665D",
      900: "#1D564E",
      1000: "#183B34",
    },
  },
});

export default theme;
