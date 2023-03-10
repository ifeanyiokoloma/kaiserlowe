import React from "react";
import { contact } from "../asset/content";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        background: `url(/images/portfolio/bg.jpg?nf_resize=fit&w=${window.outerWidth}&h=${window.outerHeight}) center/cover no-repeat fixed`,
      }}
    >
      <Box sx={{ background: "rgba(255, 152, 0, .8)" }}>
        <Container component="section" className="py-5">
          <Typography color="white" variant="h4" component="h2">
            Contact
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            paddingY="3rem"
            rowGap="3rem"
          >
            {contact.map((item, index, items) => (
              <Box
                key={item.h3}
                className="item"
                flexBasis="33.3%"
                paddingX="3rem"
                paddingBottom={{xs: "1rem", sm: null}}
                display="inherit"
                flexDirection="column"
                gap="1rem"
                alignItems="center"
                borderRight={{
                  xs: "none",
                  sm: index === items.length - 1 ? null : "1px dashed white",
                }}
                borderBottom={{
                  xs: index === items.length - 1 ? null : "1px dashed white",
                  sm: "none"
                }}
              >
                {item.icon}
                <Typography variant="h4" component="h3">
                  {item.h3}
                </Typography>
                {item.content.map((one) => (
                  <Typography textAlign="center" key={one} variant="body1" component="p">
                    {one}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
