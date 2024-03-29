import React from "react";
import StyledServices from "../styles/StyledServices";
import { Box, Container, Typography } from "@mui/material";
import { services } from "../asset/content";
import { useTranslation } from "react-i18next";
import LearnMore from "./LearnMore";
import H2 from "./H2";
import Image from "./Image";
import Animation from "./Animation";

const Services = () => {
  const { t } = useTranslation();
  return (
    <Animation>
      <Box bgcolor="primary.main" className="py-5">
        <Container component="section">
          <H2 color="white" linecolor="white">
            {t("Services")}
          </H2>
          <StyledServices>
            {services.map(service => (
              <Box key={service.h3} className="myCard">
                <Box component="figure" className="img-box">
                  <Image imageName={service.img} alt={service.h3} />
                </Box>
                <Box component="article">
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
                </Box>
              </Box>
            ))}
            <div className="bar"></div>
          </StyledServices>
          <LearnMore text="Discover More" className="mt-5" link="/services" />
        </Container>
      </Box>
    </Animation>
  );
};

export default Services;
