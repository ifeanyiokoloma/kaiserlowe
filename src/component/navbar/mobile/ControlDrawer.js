import { Box } from "@mui/material";
import React, { useContext } from "react";
import { NavbarContext } from "../../../context/NavbarContext";
import MobileDrawer from "./MobileDrawer";
import { GlassDrawer } from "../../../styles/StyledNavBar";

const ControlDrawer = () => {
  const { container, mobileOpen, drawerWidth, closeDrawer } =
    useContext(NavbarContext);
  return (
    <Box component="nav">
      <h2 style={{ display: "none" }}>Main Navigation</h2>
      <GlassDrawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={closeDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            top: 60,
          },
          "&[role=presentation]": {
            top: 60,
          },
        }}
      >
        <MobileDrawer />
      </GlassDrawer>
    </Box>
  );
};

export default ControlDrawer;
