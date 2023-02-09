import styled from "styled-components";

export const StyledTraining = styled.section`
  h2 {
    margin-block: 2em;
    font-weight: bold;
  }

  .cards {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .card-text {
    height: 50%;

    h3 {
      font-family: raleway;
      text-transform: uppercase;
    }
  }

  .card {
    border-width: 0;
  }

  @media (min-width: 768px) {
    .cards {
      flex-direction: row;
      flex-flow: wrap;
    }

    .card {
      flex-basis: 50%;
    }

    .img-box {
      height: 50%;
    }
  }

  @media (min-width: 1024px) {
    .cards {
      flex-direction: row;
      flex-flow: nowrap;
    }

    .card {
      flex-basis: 33.3%;
      height: 80vh;
    }
  }
`;
