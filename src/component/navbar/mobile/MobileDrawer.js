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
    <GlassBox>
      <TopBar className="pt-3">
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="close"
          color="black"
          size="large"
        >
          <Close style={{fontSize: "1.5rem"}} />
        </IconButton>
        <Logo />
        <span style={{ width: "4rem" }}></span>
      </TopBar>
      <NavList />
    </GlassBox>
  );
};

export default MobileDrawer;
