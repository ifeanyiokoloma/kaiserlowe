import { Box, Button } from "@mui/material";
import React from "react";
import { navItems } from "../../asset/data";
import { useTranslation } from "react-i18next";

const NavList = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: { xs: "none", lg: "block" } }}>
      {navItems.map((item) => (
        <Button key={item} sx={{ color: "#000", fontFamily: "poppins" }}>
          {t(item)}
        </Button>
      ))}
    </Box>
  );
};

export default NavList;
