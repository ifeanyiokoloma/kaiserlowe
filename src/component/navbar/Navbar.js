import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import ControlDrawer from "./mobile/ControlDrawer";
import { Container } from "@mui/material";
import LangBtn from "./LangBtn";
import StyledNavBar from "../../styles/StyledNavBar";
import Logo from "./Logo";
import MobileNav from "./NavList";
import HamburgerIcon from "./mobile/HamburgerIcon";
import BrandName from "../BrandName";

function Navbar() {
  return (
    <StyledNavBar
      sx={{
        height: "60px",
        boxShadow: "unset",
      }}
    >
      <CssBaseline />
      <AppBar color="secondary" component="nav" sx={{ boxShadow: "unset" }}>
        <h2 style={{ display: "none" }}>Main Navigation</h2>
        <Container maxWidth="xl">
          <Toolbar className="d-flex justify-content-between">
            <HamburgerIcon />
            <Logo brandName={<BrandName />} />
            <MobileNav />
            <LangBtn />
          </Toolbar>
        </Container>
      </AppBar>
      <ControlDrawer />
    </StyledNavBar>
  );
}

export default Navbar;
