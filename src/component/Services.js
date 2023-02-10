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
      <Typography sx={{ fontWeight: "bold" }} variant="h4" component="h2">
        {t("Services")}
      </Typography>
      <StyledServices>
        {services.map((service) => (
          <div key={service.h3} className="myCard">
            <Box className="img-box">
              <Img
                lazy={false}
                cache={true}
                debounce={0}
                src={`${service.img}?nf_resize=fit&w=${window.innerWidth}&h=${window.innerHeight}`}
                alt={service.h3}
              />
            </Box>
            <article>
              <Typography variant="h5" component="h3">
                {t(service.h3)}
              </Typography>
              <Typography
                component="p"
                variant="body2"
                className="text-justify"
              >
                {t(service.p)}
              </Typography>
            </article>
          </div>
        ))}
        <div className="bar"></div>
      </StyledServices>
    </Container>
  );
};

export default Services;
