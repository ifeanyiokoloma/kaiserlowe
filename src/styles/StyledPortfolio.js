import styled from "styled-components";

const StyledPortfolio = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(100% - 2rem));
  grid-auto-rows: 50vh;
  width: 100%;
  overflow-x: auto;
  gap: 1rem;
  padding-block: 3rem;

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
    align-items: center;
    opacity: 0;
    transition: opacity 500ms;
    padding-inline: 1rem;

    h3 {
      text-transform: uppercase;
      text-align: center;
      font-family: poppins;
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, calc(50% - 2rem));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default StyledPortfolio;
