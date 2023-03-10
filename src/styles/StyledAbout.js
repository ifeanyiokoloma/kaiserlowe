import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledAbout = styled(Box)`
  position: relative;

  .content {
    border-radius: 10px;
    overflow: hidden;
  }

  .articleContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // padding-inline: 1rem;
    text-align: justify;
  }

  .img-box {
    max-height: 60vh;
  }

  img {
    height: 100%;
    width: 100%;
  }

  p {
    overflow: hidden;
    textoverflow: ellipsis;
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
