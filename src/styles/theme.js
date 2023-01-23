import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { orange, blue } from "@mui/material/colors";

export let theme = createTheme({
  palette: {
    primary: {
      main: orange,
    },
    secondary: {
      main: blue,
    },
  },
});

theme = responsiveFontSizes(theme);
