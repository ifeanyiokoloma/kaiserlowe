import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Animation from "./Animation";

const StyledBG = styled(Box)`
  background: black url(${({ imagename }) => imagename}) center/cover no-repeat
    fixed;
`;

const BG = ({ children, display, overlay, imagename, py }) => {
  return (
    <Animation>
      <StyledBG display={display} imagename={imagename}>
        <Box sx={{ background: overlay || "rgba(0, 0, 0, .5)", py: py }}>
          {children}
        </Box>
      </StyledBG>
    </Animation>
  );
};

export default BG;
