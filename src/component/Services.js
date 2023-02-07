import React from "react";
import StyledServices from "../styles/StyledServices";
import { Box, Container, Typography } from "@mui/material";
import { services } from "../asset/content";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <Container className="my-5">
      <h2
        className="text-center display-5 text-uppercase"
        style={{ fontFamily: "poppins", fontWeight: "bold" }}
      >
        {t("Services")}
      </h2>
      <StyledServices>
        {services.map((service) => (
          <div key={service.h3} className="myCard">
            <article>
              <h3>{t(service.h3)}</h3>
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
                  src={`${service.img}?nf_resize=fit&w=${window.innerWidth}`}
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
