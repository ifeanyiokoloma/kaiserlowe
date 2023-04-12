import React from "react";
import { contact } from "../asset/content";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import H2 from "./H2";
import BG from "./BG";

const Contact = () => {
  return (
    <BG
      imagename="https://res.cloudinary.com/kaiserlowe/image/upload/w_auto,c_fill/v1679359338/kaiserlowe/contact/telephone_idr9uu.webp"
      overlay="rgba(255, 152, 0, .8)"
    >
      <Container component="section" className="py-5">
        <H2 color="rgba(255,255,255,.8)" linecolor="rgba(255,255,255,.8)">
          Contact
        </H2>
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
              paddingBottom={{ xs: "1rem", sm: null }}
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
                sm: "none",
              }}
            >
              {item.icon}
              <Typography variant="h4" component="h3">
                {item.h3}
              </Typography>
              {item.content.map((one) => (
                <Typography
                  textAlign="center"
                  key={one}
                  variant="body1"
                  component="p"
                >
                  {one}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </BG>
  );
};

export default Contact;
