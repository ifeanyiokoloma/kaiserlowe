import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Splide } from "@splidejs/react-splide";

const StyledSplide = styled(Splide)`
  color: lightgray;

  h1 {
    font-family: roboto-slab;
    font-weight: bold;
  }

  p {
    font-size: 0.8rem;
    color: d3d3d3;
    padding-inline: 3rem;
  }
`;

export const Overlay = styled(Container)`
  display: flex;
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export default StyledSplide