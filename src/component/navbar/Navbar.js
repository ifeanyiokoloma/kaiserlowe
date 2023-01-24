import { useContext } from "react";
import { ReactComponent as KaiserloweLogo } from "../../asset/kaiserlowe.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { NavbarContext } from "../../context/NavbarContext";
import { navItems } from "../../asset/data";
import ControlDrawer from "./ControlDrawer";

function Navbar() {
  const { handleDrawerToggle } = useContext(NavbarContext);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar color="secondary" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <KaiserloweLogo />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <ControlDrawer />
    </Box>
  );
}

export default Navbar;
