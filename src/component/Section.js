import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Image from "./Image";

const StyledSection = styled(Box)`
  & > * {
    flex-basis: 50%;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
`;

const Section = ({ imgSrc, content, header, imgPos }) => {
  return (
    <Box minHeight="50vh" display="flex" flexDirection="column" py="3rem">
      <StyledSection
        component="section"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        height="70%"
        px={{ lg: "3rem" }}
        gap={{ xs: "1rem", lg: "3rem" }}
      >
        <Box order={{ lg: imgPos }}>
          <Image
            imageName={imgSrc}
          />
        </Box>

        <Box
          className="content"
          justifyContent={{ lg: "center" }}
          px={{ xs: "1rem" }}
        >
          <Typography variant="h5" component="h2" mb="1em" color="secondary">
            {header}
          </Typography>
          <Typography variant="body1">{content}</Typography>
        </Box>
      </StyledSection>
    </Box>
  );
};

export default Section;
