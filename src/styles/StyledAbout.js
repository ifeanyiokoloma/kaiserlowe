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
    height: 60vh;
  }

  img.sm {
    display: none;
  }

  p {
    overflow: hidden;
    textoverflow: ellipsis;
  }

  @media (min-width: 600px) {
    .img-box {
      height: 35vh;
    }

    img.xs {
      display: none;
    }

    img.sm {
      display: block;
    }
  }

  @media (min-width: 900px) {
    .content {
      background: rgba(0, 0, 0, 0.2);
      height: 100%;
    }

    .img-box {
      height: auto;
    }

    .articleContainer {
      height: calc(100vh - 60px);
    }

    article {
      flex-basis: 60%;
      padding-inline: 3rem;
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
