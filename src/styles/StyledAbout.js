import styled from "@emotion/styled";

export const StyledAbout = styled.div`
  background: var(--primary);

  .content {
    display: flex;
    flex-direction: column;
    height: 70%;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
  }

  .articleContainer {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 60px);
    justify-content: center;
    padding-inline: 1rem;
    text-align: justify;
  }

  article {
    padding: 1rem;
  }

  p {
    font-weight: 300;
    font-size: 0.8rem;
  }

  h2 {
    font-weight: bolder;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 0;
  }

  @media (min-width: 768px) {
    position: relative;

    .content {
      flex-direction: row;
      background: rgba(0, 0, 0, 0.2);
    }

    article {
      flex-basis: 60%;
      padding: 5rem;
      color: white;
    }

    .img-box {
      flex-basis: 40%;
      max-height: 100%;
    }
  }
`;
