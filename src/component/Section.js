import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Image from "./Image";
import H2 from "./H2";

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
        <Typography my={3} color="black" component="h1" variant="h3">
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
          <H2 sx={{ display: { xs: "block", sm: "none" }, mb: 7 }}>{header}</H2>
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
            <H2 sx={{ display: { xs: "none", sm: "block" }, mb: 7 }}>
              {header}
            </H2>
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
            <Stack spacing={2} component="section">
              <Typography
                sx={{ fontWeight: "bold" }}
                color="secondary"
                component="h3"
                variant="subtitle1"
              >
                {title}
              </Typography>
              <Box component="ul">
                <Stack spacing={2}>
                  {list.map((item) => (
                    <Typography component="li" variant="body1">
                      {item}
                    </Typography>
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
