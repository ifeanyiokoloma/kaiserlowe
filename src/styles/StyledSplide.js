import styled from "@emotion/styled";
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

  .content {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;

export default StyledSplide;
