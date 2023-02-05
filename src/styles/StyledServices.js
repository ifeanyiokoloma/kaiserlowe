import styled from "@emotion/styled";

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
    // background: #5a5a5a;
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

    h2 {
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

  & > .myCard:not(first-type-of):hover {
    transform: translateX(-85px) rotateZ(5deg);
  }

  & > .myCard:first-type-of:hover {
    transform: rotateZ(5deg);
  }

  // & > .myCard:last-type-of:hover {
  //   transform: translateX(-200px) rotateZ(10deg);
  // }

  & > .myCard:first-type-of:hover ~ .myCard {
    transform: translateX(150px);
  }

  & > .myCard:not(first-type-of):hover ~ .myCard {
    transform: translateX(70px);
  }

  & > .myCard:nth-type-of(1) {
    box-shadow: rgba(0, 0, 0, 0.2) -20px 0 5px 2px;
    z-index: 1;
  }
  & > .myCard:nth-type-of(2) {
    z-index: 2;
  }
  & > .myCard:nth-type-of(3) {
    z-index: 3;
  }
  & > .myCard:nth-type-of(4) {
    z-index: 4;
  }
  & > .myCard:nth-type-of(5) {
    z-index: 5;
  }
  & > .myCard:nth-type-of(6) {
    z-index: 6;
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
    box-shadow: rgba(0, 0, 0, 0.8) -10px 0 5px 2px;
    margin: 1rem 0;
  }

  & > .myCard:not(:first-of-type) {
    box-shadow: rgba(0, 0, 0, 0.7) -20px 0 5px 2px;
  }

  @media (min-width: 768px) {
    .myCard {
      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.7rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .myCard {
      h2 {
        font-size: 1.3rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export default StyledServices;
