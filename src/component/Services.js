import React from "react";
import StyledServices from "../styles/StyledServices";
import { Box, Container, Typography } from "@mui/material";
import { services } from "../asset/content";
import { useTranslation } from "react-i18next";
import Img from "react-cool-img";
import LearnMore from "./LearnMore";
import H2 from "./H2";

const Services = () => {
  const { t } = useTranslation();
  return (
    <Box bgcolor="primary.main" className="py-5">
      <Container>
        <H2>{t("Services")}</H2>
        <StyledServices>
          {services.map((service) => (
            <div key={service.h3} className="myCard">
              <Box className="img-box">
                <Img
                  lazy={false}
                  cache={true}
                  debounce={0}
                  src={`${service.img}?nf_resize=smartcrop&w=${Math.round(
                    (60 / 100) * window.innerWidth
                  )}&h=${Math.round((40 / 100) * window.innerHeight)}`}
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
        <LearnMore link="/services" />
      </Container>
    </Box>
  );
};

export default Services;
