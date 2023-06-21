import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import { NavbarContext } from "../../../context/NavbarContext";
import styled from "styled-components";

const HamburgerIcon = () => {
  const { handleDrawerToggle, mobileOpen } = useContext(NavbarContext);

  const StyledMenuIcon = styled(IconButton)`
    display: flex;
    flex-direction: column;
    gap: 0.2em;

    .bar1,
    .bar2,
    .bar3 {
      width: 25px;
      height: 2px;
      background-color: #333;
      transition: 1s;
    }

    .bar1 {
      transform: ${() => mobileOpen && "translate(0, 7px) rotate(45deg)"};
      background-color: ${() => mobileOpen && "red"};
    }

    .bar2 {
      ${() => mobileOpen && "opacity: 0"};
    }

    .bar3 {
      transform: ${() => mobileOpen && "translate(0, -7px) rotate(-45deg)"};
      background-color: ${() => mobileOpen && "red"};
    }
  `;
  return (
    <StyledMenuIcon
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { lg: "none" }, color: "black" }}
    >
      {/* <MenuIcon /> */}
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </StyledMenuIcon>
  );
};

export default HamburgerIcon;
