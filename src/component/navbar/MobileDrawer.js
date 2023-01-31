import React, { useContext } from "react";
import { NavbarContext } from "../../context/NavbarContext";
import {
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
// import { ReactComponent as KaiserloweLogo } from "../../asset/kaiserlowe.svg";
import { navItems } from "../../asset/data";
import { GlassBox, GlassList } from "../../styles/GlassDrawer";

const MobileDrawer = () => {
  const { handleDrawerToggle } = useContext(NavbarContext);
  return (
    <GlassBox onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <GlassList>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={<span style={{fontFamily: "poppins", textTransform: "uppercase"}}>{item}</span>} />
            </ListItemButton>
          </ListItem>
        ))}
      </GlassList>
    </GlassBox>
  );
};

export default MobileDrawer;
