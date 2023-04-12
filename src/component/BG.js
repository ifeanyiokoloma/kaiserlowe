import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledBG = styled(Box)`
  background: black url(${({ imagename }) => imagename}) center/cover no-repeat
    fixed;
`;

const BG = ({ children, display, overlay, imagename, py }) => {
  return (
    <StyledBG display={display} imagename={imagename}>
      <Box sx={{ background: overlay || "rgba(0, 0, 0, .5)", py: py }}>
        {children}
      </Box>
    </StyledBG>
  );
};

export default BG;
