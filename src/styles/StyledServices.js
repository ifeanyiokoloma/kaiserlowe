import styled from "styled-components";

const StyledServices = styled.section`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 60vh;
  padding-block: 1rem;
  padding-left: 0.5rem;
  width: 100%;

  .myCard {
    display: flex;
    flex-direction: column;
    flex-basis: 50vw;
    flex-shrink: 0;
    border-radius: 20px;
    margin-right: -3rem;
    background: white;
    text-align: justify;
    transition: transform 500ms;
    gap: 0.5rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.3) -20px 5px 20px 0;

    & > * {
      height: 50%;
    }

    article {
      padding-inline: 1rem;
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
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

  & > .myCard:first-child:hover ~ .myCard {
    transform: translateX(10px);
  }

  & > .myCard:not(:first-child):hover ~ .myCard {
    transform: translateX(3rem);
  }

  & > .myCard:nth-child(1) {
    z-index: 1;
    margin-right: -0.5rem;
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
    transform: translateX(-3rem);
  }

  & > .bar {
    display: none;
  }

  @media (min-width: 768px) {
    overflow-x: hidden;
    height: 85vh;
    padding: 3rem;
    position: relative;

    & > .myCard:not(:last-child):hover ~ .myCard {
      transform: translateX(9rem);
    }

    & > .myCard:nth-child(1) {
      margin-right: -10rem;
    }

    & > .myCard:nth-child(6):hover {
      transform: translateX(-7rem);
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
      display: block;
    }

    .myCard {
      flex-basis: 20%;
      flex-grow: 1;
      margin-right: -10rem;
      gap: 1rem;
      box-shadow: rgba(0, 0, 0, 0.3) -20px 5px 20px 0;

      article {
        padding-inline: 2rem;
        padding-top: 3rem;
        gap: 1rem;
      }

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
