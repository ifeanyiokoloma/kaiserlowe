import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Img from "react-cool-img";

const Hero = ({ imgSrc, h1, lead }) => {
  return (
    <Box height="100vh" position="relative">
      <Img
        style={{ position: "relative" }}
        src={`${imgSrc}?nf_resize=fit&w=${window.outerWidth}&h=${window.outerHeight}`}
        alt="background"
      />
      <Box
        component="header"
        position="absolute"
        top={0}
        left={0}
        height="100%"
        width="100%"
        bgcolor="rgba(0,0,0,.9)"
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="md"
        >
          <Typography textAlign="center" variant="h2" component="h1">
            {h1}
          </Typography>
          <Typography
            fontWeight="100"
            textAlign="center"
            variant="subtitle1"
            component="p"
          >
            {lead}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
