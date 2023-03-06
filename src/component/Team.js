import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Team = () => {
  return (
    <Box bgcolor="primary.main" p={5}>
      <Container>
        <Typography
          variant="h4"
          color="white"
          component="h2"
          mb={5}
          textAlign="center"
        >
          Team
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column" }}
          spacing={3}
        >
          <Box
            width={300}
            borderRadius="50%"
            overflow="hidden"
            className="img-box"
          >
            <img
              src={`/images/team/ceo.jpg?nf_resize=smartcrop&w=300&h=300`}
              alt="ceo"
            />
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
                  variant="body1"
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
