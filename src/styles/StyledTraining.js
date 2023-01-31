import styled from "@emotion/styled";

export const StyledTraining = styled.section`
  h1 {
    font-family: raleway;
    padding-block: 1.5em;
    font-weight: bold;
  }

  .cards {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .card {
    border-radius: 10px;
  }

  .card-text {
    background: var(--primary);
    height: 35%;
  }

  .card h2 {
    font-family: poppins;
    font-size: 1.5rem;
    font-weight: 700;
  }

  li {
    font-size: 0.75rem;
    font-family: poppins;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    .cards {
      flex-direction: row;
    }

    .card {
      flex-basis: 33.3%;
      height: 80vh;
    }

    .img-box {
      height: 60%;
    }
  }
`;
