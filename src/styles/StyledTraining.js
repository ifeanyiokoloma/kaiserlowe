import styled from "styled-components";

export const StyledTraining = styled.section`
  h2 {
    margin-block: 1em;
  }

  .cards {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .card-text {
    background: var(--primary);
    height: 40%;

    h3 {
      // font-family: poppins;
      // font-size: 1.5rem;
      // font-weight: 700;
      text-transform: uppercase;
      font-weight: bolder;
      font-family: poppins;
      font-size: 0.8rem;
    }
  }

  .card {
    border-width: 0;
  }

  li {
    // font-size: 0.75rem;
    // font-family: poppins;
    // font-weight: 400;
    font-weight: 300;
    font-size: 0.5rem;
    font-family: poppins;
  }

  @media (min-width: 768px) {
    .cards {
      flex-direction: row;
    }

    .card {
      flex-basis: 33.3%;
      height: 70vh;

      h3 {
        font-size: 1rem;
      }

      li {
        font-size: 0.7rem;
      }
    }

    .img-box {
      height: 60%;
    }
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;
