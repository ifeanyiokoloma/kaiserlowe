import React from "react";
import StyledServices from "../styles/StyledServices";
import { Box, Container, Typography } from "@mui/material";
import { services } from "../asset/content";
import { useTranslation } from "react-i18next";

const Services = () => {
  const {t} = useTranslation()
  return (
    <Container>
      <StyledServices className="my-5">
        {services.map((service) => (
          <div key={service.h2} className="myCard d-flex flex-column">
            <article>
              <h2>{t(service.h2)}</h2>
              <Typography
                component="p"
                variant="body2"
                className="text-justify"
              >
                {t(service.p)}
              </Typography>
            </article>
            <Box>
              <picture>
                <source
                  src={`${service.img}?nf_resize=smartcrop&w=${75 - window.innerWidth}`}
                  media="(min-width: 768px)"
                />
                <img
                  src={`${service.img}?nf_resize=fit&w=${window.innerWidth}`}
                  alt={service.h2}
                />
              </picture>
            </Box>
          </div>
        ))}
        <div className="bar"></div>
      </StyledServices>
    </Container>
  );
};

export default Services;
