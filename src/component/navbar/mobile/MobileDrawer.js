import React, { useContext } from "react";
import { NavbarContext } from "../../../context/NavbarContext";
import { GlassBox, TopBar } from "../../../styles/StyledNavBar";
import { Close } from "@mui/icons-material";
import NavList from "./NavList";
import Logo from "../Logo";
import { IconButton } from "@mui/material";

const MobileDrawer = () => {
  const { handleDrawerToggle } = useContext(NavbarContext);
  return (
    <GlassBox onClick={handleDrawerToggle}>
      <TopBar>
        <Logo />
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="close"
          color="error"
        >
          <Close />
        </IconButton>
      </TopBar>
      <NavList />
    </GlassBox>
  );
};

export default MobileDrawer;
