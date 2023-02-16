import React from "react";
import { contact } from "../asset/content";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
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
        <Container>
          <StyledContact display="flex" paddingY="3rem">
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
                <h3>{item.h3}</h3>
                <p>{item.content}</p>
              </Box>
            ))}
          </StyledContact>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
