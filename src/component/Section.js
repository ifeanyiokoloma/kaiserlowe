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

const Section = ({ imgSrc, content, header, imgPos, list, title }) => {
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
        <Box height="500px" order={{ lg: imgPos }}>
          <Image imageName={imgSrc} />
        </Box>

        <Box
          className="content"
          justifyContent={{ lg: "center" }}
          px={{ xs: "1rem" }}
          component="article"
        >
          <Typography variant="h5" component="h2" mb="1em" color="secondary">
            {header}
          </Typography>
          {content && <Typography variant="body1">{content}</Typography>}{" "}
          {list && (
            <>
              <Typography component="h3" variant="subtitle2">
                {title}
              </Typography>
              <Box component="ul">{list}</Box>
            </>
          )}
        </Box>
      </StyledSection>
    </Box>
  );
};

export default Section;
