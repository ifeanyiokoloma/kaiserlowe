import { Box, Drawer } from "@mui/material";
import React, { useContext } from "react";
import { NavbarContext } from "../../context/NavbarContext";
import MobileDrawer from "./MobileDrawer";

const ControlDrawer = () => {
  const { handleDrawerToggle, container, mobileOpen, drawerWidth } =
    useContext(NavbarContext);
  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <MobileDrawer />
      </Drawer>
    </Box>
  );
};

export default ControlDrawer;
