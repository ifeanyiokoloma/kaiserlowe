import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export let theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

theme = responsiveFontSizes(theme);