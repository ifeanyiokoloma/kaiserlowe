import { Box, Button } from "@mui/material";
import React from "react";
import { navItems } from "../../asset/content";
import { useTranslation } from "react-i18next";
import StyledLink from "../../styles/StyledLink";

const NavList = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: { xs: "none", lg: "block" } }}>
      {navItems.map((item) => (
        <Button key={item} sx={{ color: "#000", fontFamily: "poppins" }}>
          <StyledLink to={item === "home" ? "/" : `/${item}`}>
            {t(item)}
          </StyledLink>
        </Button>
      ))}
    </Box>
  );
};

export default NavList;
