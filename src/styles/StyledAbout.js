import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledAbout = styled(Box)`
  position: relative;
  padding-block: 3rem;

  .content {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
  }

  .articleContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 1rem;
    text-align: justify;
  }

  article {
    padding: 1rem;
    color: white !important;
  }

  h2 {
    color: whitesmoke;
  }

  h3 {
    font-weight: 100 !important;
  }

  .img-box {
    max-height: 60vh;
  }

  img {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .content {
      flex-direction: row;
      background: rgba(0, 0, 0, 0.2);
      height: 60%;
    }

    .articleContainer {
      height: calc(100vh - 60px);
    }

    article {
      flex-basis: 60%;
      padding-inline: 5rem;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }

    .img-box {
      flex-basis: 40%;
      max-height: 100%;
    }
  }
`;
