import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/raleway";
import "@fontsource/roboto-slab";
import "@fontsource/poppins";
import SlidingHero from "./component/SlidingHero";
import { ThemeProvider } from "@mui/material";
import Theme from "./styles/theme";
import NavbarProvider from "./context/NavbarContext";
import Navbar from "./component/navbar/Navbar";
import { createContext } from "react";

export const LangContext = createContext();

function App() {
  return (
    <LangContext.Provider value={{}}>
      <ThemeProvider theme={Theme}>
        <NavbarProvider>
          <Navbar />
          <SlidingHero />
        </NavbarProvider>
      </ThemeProvider>
    </LangContext.Provider>
  );
}

export default App;
