import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Image from "./Image";
import H1 from "./H1";
import Lead from "./Lead";
import Animation from "./Animation";

const Hero = ({ imgSrc, h1, lead }) => {
  return (
    <Animation>
      <Box component="section" sx={{ height: "100vh", position: "relative" }}>
        <Image
          style={{ position: "relative" }}
          imageName={imgSrc}
          alt="background"
        />
        <Box
          component="header"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            bgcolor: "rgba(0,0,0,.9)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            maxWidth="md"
            component="header"
          >
            <H1>{h1}</H1>
            <Lead>{lead}</Lead>
          </Container>
        </Box>
      </Box>
    </Animation>
  );
};

export default Hero;
