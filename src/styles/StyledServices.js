// import styled from "@emotion/styled";
import styled from "styled-components";

const StyledServices = styled.section`
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 85vh;
  padding: 3rem;
  position: relative;

  .myCard {
    flex-basis: 20%;
    flex-grow: 1;
    flex-shrink: 0;
    border-radius: 20px;
    margin-right: -10rem;
    background: white;
    color: ;
    text-align: justify;
    transition: transform 500ms;
    gap: 1rem;
    overflow: hidden;

    & > * {
      height: 50%;
    }

    article {
      padding-inline: 2rem;
      padding-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    h3 {
      text-align: center;
      text-transform: uppercase;
      font-weight: bolder;
      font-family: poppins;
      font-size: 0.8rem;
    }

    p {
      font-weight: 300;
      font-size: 0.5rem;
      font-family: poppins;
    }
  }

  & > .myCard {
    box-shadow: rgba(0, 0, 0, 0.3) -20px 5px 20px 0;
  }

  & > .myCard:not(:first-child):hover {
    transform: translateX(-90px) rotateZ(5deg);
  }

  & > .myCard:first-child:hover {
    transform: rotateZ(5deg);
  }

  & > .myCard:first-child:hover ~ .myCard {
    transform: translateX(160px);
  }

  & > .myCard:not(:first-child):hover ~ .myCard {
    transform: translateX(70px);
  }

  & > .myCard:nth-child(1) {
    // box-shadow: rgba(0, 0, 0, 0.3) -20px 5px 20px 0;
    z-index: 1;
  }

  & > .myCard:nth-child(2) {
    z-index: 2;
  }
  & > .myCard:nth-child(3) {
    z-index: 3;
  }
  & > .myCard:nth-child(4) {
    z-index: 4;
  }
  & > .myCard:nth-child(5) {
    z-index: 5;
  }
  & > .myCard:nth-child(6) {
    z-index: 6;
  }

  & > .myCard:nth-child(6):hover {
    transform: rotateZ(5deg) translateX(-130px);
  }

  & > .bar {
    border-radius: 5px;
    width: 10px;
    height: 100vh;
    background: var(--primary);
    z-index: 10;
    right: 0;
    top: 0;
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.2) -7px 0 20px 2px;
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    .myCard {
      h3 {
        font-size: 1rem;
      }

      p {
        font-size: 0.7rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .myCard {
      h3 {
        font-size: 1.3rem;
      }

      p {
        font-size: 0.7rem;
      }
    }
  }
`;

export default StyledServices;
