import styled from "styled-components";

export const StyledTraining = styled.section`
  h2 {
    position: relative;
  }

  h2:after {
    background: var(--secondary) none repeat scroll 0 0;
    bottom: -20px;
    content: "";
    height: 4px;
    left: 50%;
    margin-left: -40px;
    position: absolute;
    width: 70px;
  }

  .cards {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
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
