import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { orange, blue } from "@mui/material/colors";

export let Theme = createTheme({
  palette: {
    primary: {
      dark: orange[700],
      main: orange[500],
    },

    secondary: {
      light: blue[300],
      main: blue[700],
    },
    neutral: {
      light: "white",
      dark: "black",
    },
  },

  typography: {
    h2: {
      fontFamily: "roboto-slab",
    },
    body2: {
      fontWeight: 200,
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          /* From https://css.glass */
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: "Poppins",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: "Poppins",
        },
      },
    },
  },
});

Theme = responsiveFontSizes(Theme);

export default Theme;
