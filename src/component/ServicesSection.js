import { Container, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Image from "./Image";
import H2 from "./H2";

const StyledServicesSection = styled(Box)`
  margin-block: 5rem;

  .columns {
    column-count: 1;
    text-align: justify;

    .paragraph::first-letter {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  @media screen and (min-width: 600px) {
    .columns {
      column-count: 2;
      column-gap: 3rem;
    }
  }
`;

const ServicesSection = ({ imgSrc, content, header, list, title, h1 }) => {
  return (
    <StyledServicesSection>
      <Container>
        <H2 className="header">{header}</H2>
        <Box className="columns">
          <Box sx={{ height: "400px", my: 2 }}>
            <Image imageName={imgSrc} />
          </Box>
          {content && Array.isArray(content) ? (
            <Stack spacing={2}>
              {content.map(paragraph => (
                <Typography className="paragraph" key={paragraph}>
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          ) : (
            <Typography variant="body1">{content}</Typography>
          )}
          {list && (
            <Stack spacing={2} component="section">
              <Typography
                sx={{ fontWeight: "bold", color: "secondary" }}
                component="h3"
                variant="subtitle1"
              >
                {title}
              </Typography>
              <Box component="ul">
                <Stack spacing={2}>
                  {list.map(item => (
                    <Typography key={item} component="li" variant="body1">
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Stack>
          )}
        </Box>
      </Container>
    </StyledServicesSection>
  );
};

export default ServicesSection;
