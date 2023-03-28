import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledAbout = styled(Box)`
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .content {
    border-radius: 10px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.2);
    height: 80%;
    justify-content: space-between;
  }

  .articleContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
  }

  article {
    padding-inline: 1rem;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .img-box {
    height: 50vh;
  }

  p {
    overflow: hidden;
    textoverflow: ellipsis;
    text-align: justify;
    text-justify: distribute;
    hyphens: auto;
  }

  li {
    text-align: left;
  }

  @media (min-width: 600px) {
    .content {
      background: rgba(0, 0, 0, 0.2);
      height: 80%;
    }

    article {
      flex-basis: 50%;
      padding-left: 2rem;
      padding-block: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .img-box {
      flex-basis: 50%;
      height: auto;
    }
  }

  @media (min-width: 900px) {
    .content {
      background: rgba(0, 0, 0, 0.2);
      height: 80%;
    }

    article {
      flex-basis: 60%;
      padding-left: 6rem;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }

    .img-box {
      flex-basis: 40%;
      height: auto;
    }
  }
`;
