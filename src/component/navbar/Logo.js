import React from "react";
import { ReactComponent as KaiserloweLogo } from "../../asset/kaiserlowe.svg";
import { Box } from "@mui/material";

const Logo = ({ brandName }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <KaiserloweLogo />
      {brandName}
    </Box>
  );
};

export default Logo;
