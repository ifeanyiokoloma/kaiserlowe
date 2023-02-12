import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/raleway";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
import "@fontsource/roboto-slab";
import "@fontsource/roboto-slab/100.css";
import "@fontsource/roboto-slab/200.css";
import "@fontsource/roboto-slab/300.css";
import "@fontsource/roboto-slab/400.css";
import "@fontsource/roboto-slab/500.css";
import "@fontsource/roboto-slab/600.css";
import "@fontsource/roboto-slab/700.css";
import "@fontsource/roboto-slab/800.css";
import "@fontsource/roboto-slab/900.css";
import "@fontsource/poppins";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "./styles/index.css";
import SlidingHero from "./component/SlidingHero";
import { ThemeProvider } from "@mui/material";
import Theme from "./styles/theme";
import NavbarProvider from "./context/NavbarContext";
import Navbar from "./component/navbar/Navbar";
import { createContext } from "react";
import About from "./component/About";
import Training from "./component/Training";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Team from "./component/Team";
import MobilePortfolio from "./component/MobilePortfolio";

export const LangContext = createContext();

function App() {
  return (
    <LangContext.Provider value={{}}>
      <ThemeProvider theme={Theme}>
        <NavbarProvider>
          <Navbar />
          <SlidingHero />
          <About />
          <Training />
          <Services />
          <Portfolio />
          <MobilePortfolio />
          <Team />
        </NavbarProvider>
      </ThemeProvider>
    </LangContext.Provider>
  );
}

export default App;
