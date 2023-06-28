import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";

const StyledMobilePortfolio = styled(SplideSlide)`
  .scale .img-box {
    transform: scale(1.2);
  }

  .scale .text {
    opacity: 1;
  }

  .box {
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .img-box {
    position: relative;
    height: 300px;
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
    flex-direction: column;
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

export const StyledSplide = styled(Splide)`
  .splide__arrows {
    button {
      opacity: 1;
      background-color: #fff;
    }

    .splide__arrow:hover:not(:disabled) svg {
      fill: black;
    }

    .splide__arrow--prev {
      left: 0.2em;
    }

    .splide__arrow--next {
      right: 0.2em;
    }

    /* visibility: visible !important; */
    /* button:hover {

    } */
  }
`;

export default StyledMobilePortfolio;
