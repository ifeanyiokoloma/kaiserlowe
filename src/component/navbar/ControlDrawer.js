import { Box } from "@mui/material";
import React, { useContext } from "react";
import { NavbarContext } from "../../context/NavbarContext";
import MobileDrawer from "./MobileDrawer";
import { GlassDrawer } from "../../styles/GlassDrawer";

const ControlDrawer = () => {
  const { handleDrawerToggle, container, mobileOpen, drawerWidth } =
    useContext(NavbarContext);
  return (
    <Box component="nav">
      <GlassDrawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <MobileDrawer />
      </GlassDrawer>
    </Box>
  );
};

export default ControlDrawer;
