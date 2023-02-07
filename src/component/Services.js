import React from "react";
import StyledServices from "../styles/StyledServices";
import { Box, Container, Typography } from "@mui/material";
import { services } from "../asset/content";
import { useTranslation } from "react-i18next";
import Img from "react-cool-img";

const Services = () => {
  const { t } = useTranslation();
  return (
    <Container className="pt-5">
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
              <Img
                lazy={false}
                cache={true}
                debounce={0}
                src={`${service.img}?nf_resize=fit&w=${
                  window.innerWidth < 768
                    ? window.innerWidth * 4
                    : window.innerWidth
                }`}
                alt={service.h2}
              />
            </Box>
          </div>
        ))}
        <div className="bar"></div>
      </StyledServices>
    </Container>
  );
};

export default Services;
