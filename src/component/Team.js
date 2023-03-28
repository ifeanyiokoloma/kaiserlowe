import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import H2 from "./H2";
import Image from "./Image";

const Team = () => {
  return (
    <Box bgcolor="primary.main" py={5}>
      <Container>
        <H2>Team</H2>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
        >
          <Box
            width={300}
            borderRadius="50%"
            overflow="hidden"
            className="img-box"
          >
            <Image imageName="team/ceo_vs6qkt.jpg" alt="ceo" />
          </Box>
          <Stack
            color="white"
            className="rounded py-3 shadow"
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Container>
              <Typography
                component="p"
                fontWeight="400"
                variant="h6"
                textAlign="center"
              >
                Christopher Okonkwo
              </Typography>
              <Typography
                fontWeight="200"
                component="p"
                variant="subtitle2"
                textAlign="center"
              >
                MD/CEO
              </Typography>
              <Container maxWidth="xs" sx={{ mt: 2 }}>
                <Typography
                  fontWeight="lighter"
                  component="p"
                  variant="body2"
                  textAlign="center"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque cum adipisci nihil optio possimus saepe numquam iure
                  dolorum beatae fugit.
                </Typography>
              </Container>
            </Container>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Team;
