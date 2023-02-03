import styled from "@emotion/styled";

const StyledServices = styled.section`
  display: flex;
  justify-content: flex-end;
  max-inline-size: 100%;

  & > .cards-box {
    display: inherit;
    max-width: 100%;
    min-block-size: calc(100vh - 60px);
    align-items: center;
    // margin-inline: 1rem;
    // z-index: 10;
    overflow-x: auto;
  }

  /* Every item targetted collectly */
  .cards-box > * {
    flex-basis: 30%;
    block-size: 80%;
    flex-grow: 1;
    box-shadow: -20px 0 40px rgba(128, 128, 128, 0.5);
    border-radius: 20px;
  }

  .cards-box > *:not(.bar, .bar2):hover {
    transform: rotateZ(5deg) translateX(-5rem);
    transition: 500ms;
    background: whitesmoke;
  }

  .cards-box > .myCard:nth-child(1) {
    z-index: 1;
    margin-right: -5rem;
  }

  .cards-box > .myCard:nth-child(2) {
    z-index: 2;
    margin-right: -5rem;
  }

  .cards-box > .myCard:nth-child(3) {
    z-index: 3;
    margin-right: -5rem;
  }

  .cards-box > .myCard:nth-child(4) {
    z-index: 4;
    margin-right: -5rem;
  }

  .cards-box > .myCard:nth-child(5) {
    z-index: 5;
    margin-right: -5rem;
  }

  .cards-box > .myCard:nth-child(6) {
    z-index: 6;
  }

  .cards-box > .bar {
    width: 20%;
    height: 90%;
    background: black;
    z-index: 7;
    border-radius: 10px;
  }

  .cards-box > .bar2 {
    border-radius: 10px;
    width: 20%;
    height: 90%;
    background: black;
    z-index: 0;
    margin-right: -3rem;
  }

  .myCard {
    padding-inline: 1rem;
    padding-block: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default StyledServices;
