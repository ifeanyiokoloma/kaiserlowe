import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/raleway";
import "@fontsource/roboto-slab";
import "@fontsource/poppins";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import SlidingHero from "./component/SlidingHero";
import { ThemeProvider } from "@mui/material";
import Theme from "./styles/theme";
import NavbarProvider from "./context/NavbarContext";
import Navbar from "./component/navbar/Navbar";
import { createContext } from "react";
import About from "./component/About";
// import Services from "./component/Services";

export const LangContext = createContext();

function App() {
  return (
    <LangContext.Provider value={{}}>
      <ThemeProvider theme={Theme}>
        <NavbarProvider>
          <Navbar />
          <SlidingHero />
          <About />
          {/* <Services /> */}
        </NavbarProvider>
      </ThemeProvider>
    </LangContext.Provider>
  );
}

export default App;
