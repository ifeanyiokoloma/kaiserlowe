import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Team = () => {
  return (
    <Box p={5}>
      <Container>
        <Stack justifyContent="center" alignItems="center" direction={{ xs: "column", sm: "row" }} spacing={3}>
          <Box
            width={200}
            borderRadius="50%"
            overflow="hidden"
            className="img-box"
          >
            <img src="/images/team/ceo.jpg" alt="ceo" />
          </Box>
          <Stack
            className="rounded py-3 shadow"
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Container>
              <Typography fontWeight="bold" variant="h6">
                Christopher Okonkwo{" "}
              </Typography>
              <Typography variant="subtitle1">MD/CEO</Typography>
            </Container>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Team;
