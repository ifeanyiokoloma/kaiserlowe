import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Image from "./Image";

const StyledArticle = styled(Box)`
  & > * {
    flex-basis: 50%;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
`;

const Section = ({ imgSrc, content, header, imgPos, list, title, h1 }) => {
  return (
    <Box minHeight="50vh" display="flex" flexDirection="column" py="3rem">
      {h1 && (
        <Typography my={3} color="secondary" component="h1" variant="h2">
          {h1}
        </Typography>
      )}
      <StyledArticle
        component="article"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ sm: "center" }}
        height="70%"
        px={{ sm: "1rem", lg: "3rem" }}
        gap={{ xs: "1rem", lg: "3rem" }}
      >
        {header && (
          <Typography
            display={{ xs: "block", sm: "none" }}
            variant="h5"
            component="h2"
            mb="1em"
            color="secondary"
          >
            {header}
          </Typography>
        )}
        <Box height="400px" order={{ lg: imgPos }}>
          <Image imageName={imgSrc} />
        </Box>

        <Box
          className="content"
          justifyContent={{ sm: "center" }}
          px={{ xs: "1rem" }}
          component="article"
        >
          {header && (
            <Typography
              display={{ xs: "none", sm: "block" }}
              variant="h5"
              component="h2"
              mb="1em"
              color="secondary"
            >
              {header}
            </Typography>
          )}
          {content && Array.isArray(content) ? (
            <Stack spacing={2}>
              {content.map((paragraph) => (
                <Typography>{paragraph}</Typography>
              ))}
            </Stack>
          ) : (
            <Typography variant="body1">{content}</Typography>
          )}
          {list && (
            <Stack spacing={1} component="section">
              <Typography component="h3" variant="subtitle2">
                {title}
              </Typography>
              <Box component="ul">
                <Stack spacing={2}>
                  {list.map((item) => (
                    <li>{item}</li>
                  ))}
                </Stack>
              </Box>
            </Stack>
          )}
        </Box>
      </StyledArticle>
    </Box>
  );
};

export default Section;
