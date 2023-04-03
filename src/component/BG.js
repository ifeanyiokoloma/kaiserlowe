import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledBG = styled(Box)`
  background: black
    url(https://res.cloudinary.com/kaiserlowe/image/upload/w_600,c_fill/v1679359338/kaiserlowe/portfolio/bg_qhx21i.webp)
    center/cover no-repeat fixed;

  @media (min-width: 600px) {
    background: black
      url(https://res.cloudinary.com/kaiserlowe/image/upload/w_900,c_fill/v1679359338/kaiserlowe/portfolio/bg_qhx21i.webp)
      center/cover no-repeat fixed;
  }

  @media (min-width: 900px) {
    background: black
      url(https://res.cloudinary.com/kaiserlowe/image/upload/w_1200,c_fill/v1679359338/kaiserlowe/portfolio/bg_qhx21i.webp)
      center/cover no-repeat fixed;
  }

  @media (min-width: 1200px) {
    background: black
      url(https://res.cloudinary.com/kaiserlowe/image/upload/w_1536,c_fill/v1679359338/kaiserlowe/portfolio/bg_qhx21i.webp)
      center/cover no-repeat fixed;
  }

  @media (min-width: 1536px) {
    background: black
      url(https://res.cloudinary.com/kaiserlowe/image/upload/w_auto,c_fill/v1679359338/kaiserlowe/portfolio/bg_qhx21i.webp)
      center/cover no-repeat fixed;
  }
`;

const BG = ({ children, display, overlay }) => {
  return (
    <StyledBG display={display}>
      <Box sx={{ background: overlay || "rgba(0, 0, 0, .5)" }}>{children}</Box>
    </StyledBG>
  );
};

export default BG;
