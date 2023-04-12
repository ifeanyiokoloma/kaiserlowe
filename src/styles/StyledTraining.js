import styled from "styled-components";

export const StyledTraining = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  figure {
    margin: 0;
    padding: 0;
  }

  a {
    transition: 500ms;
  }

  a:hover,
  a:active {
    filter: saturate(300%);
  }

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
    padding-bottom: 1rem;

    h3 {
      text-transform: uppercase;
    }
  }

  img.sm {
    display: none;
  }

  @media (min-width: 600px) {
    .cards {
      flex-direction: row;
      flex-flow: wrap;
    }

    .myCard {
      flex-basis: 50%;
      height: 400px;
    }

    .card-text {
      height: 40%;
    }

    .img-box {
      height: 250px;
    }
  }

  @media (min-width: 1200px) {
    .cards {
      flex-direction: row;
      flex-flow: nowrap;
    }

    .myCard {
      flex-basis: 33.3%;
      height: 70vh;
    }
  }
`;
