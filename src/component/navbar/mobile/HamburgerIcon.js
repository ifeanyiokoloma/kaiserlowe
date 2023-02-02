import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarContext } from "../../../context/NavbarContext";

const HamburgerIcon = () => {
  const { handleDrawerToggle } = useContext(NavbarContext);
  return (
    <IconButton
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { lg: "none" }, color: "black" }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default HamburgerIcon;
