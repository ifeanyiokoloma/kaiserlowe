import React from "react";
import StyledPortfolio from "../styles/StyledPortfolio";
import { Box, Button, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LearnMore from "./LearnMore";
import Image from "./Image";
import H2 from "./H2";
import H3 from "./H3";

const Portfolio = ({ content, btn, header }) => {
  const { t } = useTranslation();
  return (
    <Container className="py-3">
      {header && (
        <H2 color="white" linecolor="var(--primary)">
          {t("Portfolio")}
        </H2>
      )}
      <StyledPortfolio>
        {content.map(project => (
          <Box key={project.work} className="box">
            <figure className="img-box">
              <Image alt={project.work} imageName={project.img} />
            </figure>
            <Box className="text">
              <H3 color="white">{t(project.name)}</H3>
              <Typography
                component="p"
                variant="subtitle2"
                textTransform="capitalize"
              >
                {t(project.work)}
              </Typography>
              <Button
                variant="contained"
                sx={{ color: "white", mt: 2 }}
                size="small"
              >
                See More
              </Button>
            </Box>
          </Box>
        ))}
      </StyledPortfolio>
      {btn && <LearnMore text="See More Projects" link="/portfolio" />}
    </Container>
  );
};

export default Portfolio;
