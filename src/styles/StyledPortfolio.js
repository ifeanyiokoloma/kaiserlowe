import styled from "styled-components";

const StyledPortfolio = styled.div`
  display: grid;
  grid-auto-rows: 40vh;
  width: 100%;
  overflow-x: auto;
  gap: 1rem;
  padding-block: 3rem;

  h2 {
    position: relative;
  }

  h2:after {
    background: white none repeat scroll 0 0;
    bottom: -20px;
    content: "";
    height: 4px;
    left: 50%;
    margin-left: -40px;
    position: absolute;
    width: 70px;
  }

  .box {
    position: relative;
    overflow: hidden;

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
    flex-direction: column;
    align-items: center;
    opacity: 0;
    text-align: center;
    transition: opacity 500ms;
    padding-inline: 1rem;

    figcaption {
      text-transform: uppercase;
      text-align: center;
      font-family: poppins;
    }
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default StyledPortfolio;
