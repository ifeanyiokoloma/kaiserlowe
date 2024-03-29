import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledTypography = styled(Typography)`
  color: whitesmoke;
  position: relative;

  &:after {
    background: ${({ linecolor }) => (linecolor ? linecolor : "white")} none
      repeat scroll 0 0;
    bottom: -15px;
    content: "";
    height: 2px;
    left: 50%;
    margin-left: -40px;
    position: absolute;
    width: 85px;
  }
`;

const H3 = ({ children, linecolor, color, sx }) => {
  return (
    <StyledTypography
      color={color || "black"}
      fontWeight="600"
      variant="h5"
      component="h3"
      mb={3}
      sx={sx}
      linecolor={linecolor || "var(--primary)"}
    >
      {children}
    </StyledTypography>
  );
};

export default H3;
