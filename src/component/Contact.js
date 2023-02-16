import React from "react";
import { contact } from "../asset/content";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import StyledContact from "../styles/StyledContact";

const Contact = () => {
  return (
    <Box
      sx={{
        background:
          "url(/images/portfolio/bg.jpg) center/cover no-repeat fixed",
      }}
    >
      <Box sx={{ background: "rgba(255, 152, 0, .8)" }}>
        <Container className="py-5">
          <Typography variant="h4" component="h2">Contact</Typography>
          <StyledContact display="flex" flexDirection={{xs: "column", sm: "row"}} paddingY="3rem">
            {contact.map((item) => (
              <Box
                key={item.h3}
                className="item"
                flexBasis="33.3%"
                paddingX="3rem"
                display="inherit"
                flexDirection="column"
                gap="1rem"
                alignItems="center"
              >
                {item.icon}
                <Typography variant="h4" component="h3">{item.h3}</Typography>
                <Typography variant="body1" component="p">{item.content}</Typography>
              </Box>
            ))}
          </StyledContact>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
