import React from "react";
import StyledServices from "../styles/StyledServices";
import { Box, Container, Typography } from "@mui/material";
import { services } from "../asset/data";

const Services = () => {
  return (
    <Container>
      <StyledServices className="my-5">
        {services.map((service) => (
          <div className="myCard d-flex flex-column">
            <article>
              <h2>{service.h2}</h2>
              <Typography
                component="p"
                variant="body2"
                className="text-justify"
              >
                {service.p}
              </Typography>
            </article>
            <Box>
              <img src={service.img} alt="" />
            </Box>
          </div>
        ))}
        <div className="bar"></div>
      </StyledServices>
    </Container>
  );
};

export default Services;
