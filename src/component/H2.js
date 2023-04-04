import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledTypography = styled(Typography)`
  color: whitesmoke;
  position: relative;

  &:after {
    background: ${({ linecolor }) => (linecolor ? linecolor : "white")} none
      repeat scroll 0 0;
    bottom: -20px;
    content: "";
    height: 4px;
    left: 50%;
    margin-left: -40px;
    position: absolute;
    width: 85px;
  }
`;

const H2 = ({ children, linecolor, color }) => {
  return (
    <StyledTypography
      color={color}
      fontWeight="900"
      variant="h4"
      component="h2"
      mb={5}
      linecolor={linecolor}
    >
      {children}
    </StyledTypography>
  );
};

export default H2;
