import styled from "styled-components";

export const StyledTraining = styled.section`
  .cards {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .img-box {
    height: 200px;
  }

  .card-text {
    height: 50%;

    h3 {
      text-transform: uppercase;
    }
  }

  .card {
    border-width: 0;
  }

  img.sm {
    display: none;
  }

  @media (min-width: 600px) {
    .cards {
      flex-direction: row;
      flex-flow: wrap;
    }

    .card {
      flex-basis: 50%;
      height: 400px;
    }

    .card-text {
      height: 50%;
    }

    .img-box {
      height: 200px;
    }

    img.xs {
      display: none;
    }

    img.sm {
      display: block;
    }
  }

  @media (min-width: 1200px) {
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
