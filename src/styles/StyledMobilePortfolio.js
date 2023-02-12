import { SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";

const StyledMobilePortfolio = styled(SplideSlide)`
  padding-block: 1rem;

  .box {
    position: relative;
    overflow: hidden;
    height: 100%;

    &:hover > .text {
      opacity: 1;
    }

    &:hover > .img-box {
      transform: scale(1.2);
    }
  }

  .img-box {
    position: relative;
    height: 100%;
    transition: transform 500ms;
  }

  .text {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 500ms;
    padding-inline: 1rem;

    h3 {
      text-transform: uppercase;
      text-align: center;
      font-family: poppins;
    }
  }
`;

export default StyledMobilePortfolio;
