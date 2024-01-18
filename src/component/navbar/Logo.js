import React from "react";
import { ReactComponent as KaiserloweLogo } from "../../asset/kaiserlowe.svg";
import { Box } from "@mui/material";
import { LinkBtn } from "../../styles/StyledLink";

const Logo = ({ brandName }) => {
  return (
    <LinkBtn title="Come home" to="/">
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <KaiserloweLogo />
        {brandName}
      </Box>
    </LinkBtn>
  );
};

export default Logo;
