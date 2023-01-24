import React, { useContext } from "react";
import { NavbarContext } from "../../context/NavbarContext";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ReactComponent as KaiserloweLogo } from "../../asset/kaiserlowe.svg";
import { navItems } from "../../asset/data";

const MobileDrawer = () => {
  const { handleDrawerToggle } = useContext(NavbarContext);
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <KaiserloweLogo />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MobileDrawer;
