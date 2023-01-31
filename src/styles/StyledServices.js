import styled from "@emotion/styled";

const StyledServices = styled.section`
  display: flex;
  justify-content: flex-end;
  max-inline-size: 100%;

  & > .cards-box {
    display: inherit;
    inline-size: 100%;
    min-block-size: calc(100vh - 60px);
    align-items: center;
    // margin-inline: 1rem;
    z-index: 10;
  }

  /* Every item targetted collectly */
  .cards-box > *:not(.bar, .bar2) {
    flex-basis: 40%;
    block-size: 80%;
    flex-grow: 1;
    box-shadow: -20px 0 40px rgba(0, 0, 0, 1);
    border-radius: 20px;
    margin-right: -5rem;
  }

  .cards-box > *:not(.bar, .bar2):hover {
    transform: rotateZ(5deg) translateX(-5rem);
    transition: 500ms;
  }

  .cards-box > .card:nth-child(2) {
    background-color: red;
    z-index: 1;
  }

  .cards-box > .card:nth-child(3) {
    background-color: blue;
    z-index: 2;
  }

  .cards-box > .card:nth-child(4) {
    background-color: green;
    z-index: 3;
  }

  .cards-box > .card:nth-child(5) {
    background-color: yellow;
    z-index: 4;
  }

  .cards-box > .card:nth-child(6) {
    background-color: purple;
    z-index: 5;
  }

  .cards-box > .card:nth-child(7) {
    background-color: pink;
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

  .card {
    padding-inline: 1rem;
    padding-block: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default StyledServices;
