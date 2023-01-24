import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SlidingHero from "./component/SlidingHero";
import { ThemeProvider } from "@mui/material";
import Theme from "./styles/theme";
import NavbarProvider from "./context/NavbarContext";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <NavbarProvider>
        <Navbar />
        <SlidingHero />
      </NavbarProvider>
    </ThemeProvider>
  );
}

export default App;
