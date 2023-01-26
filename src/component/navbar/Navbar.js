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
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LangBtn from "../LangBtn";

function Navbar() {
  const { t } = useTranslation("translation");
  const { handleDrawerToggle } = useContext(NavbarContext);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar color="secondary" component="nav">
        <Container maxWidth="xl">
          <Toolbar className="d-flex justify-content-between">
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <KaiserloweLogo />
              <Box
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  display: {
                    xs: "none",
                    sm: "flex"
                  }
                }}
              >
                <Typography
                  color="secondary"
                  sx={{
                    fontFamily: "roboto-slab",
                    fontWeight: "bold",
                    fontSize: ".9rem",
                  }}
                >
                  Kaiser Lowe
                  <br />
                  <span
                    style={{ fontFamily: "roboto-slab", fontSize: ".65rem", color: "var(--primary)" }}
                  >
                    {t("Construction")}
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#000" }}>
                  {t(item)}
                </Button>
              ))}
            </Box>
            <LangBtn />
          </Toolbar>
        </Container>
      </AppBar>
      <ControlDrawer />
    </Box>
  );
}

export default Navbar;
