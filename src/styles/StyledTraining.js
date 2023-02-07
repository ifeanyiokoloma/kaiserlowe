import styled from "@emotion/styled";

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
  }

  .card {
    border-width: 0;
  }

  .card h3 {
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
      height: 70vh;
    }

    .img-box {
      height: 60%;
    }
  }
`;
