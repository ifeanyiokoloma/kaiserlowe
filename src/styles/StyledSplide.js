import { Container } from "@mui/material";
import { Splide } from "@splidejs/react-splide";
import styled from "styled-components";

const StyledSplide = styled(Splide)`
  && .lead {
    font-size: 0.8rem;
  }

  @media (min-width: 600px) {
    && .lead {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    p {
      padding-inline: 3rem;
    }
  }
`;

export const StyledContainer = styled(Container)`
  display: flex !important;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;

export default StyledSplide;
