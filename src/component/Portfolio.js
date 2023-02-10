import React from "react";
import { portfolio } from "../asset/content";
import StyledPortfolio from "../styles/StyledPortfolio";
import Img from "react-cool-img";
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <Container className="py-5">
      <Typography variant="h4" component="h2" fontWeight="bold">
        {t("Portfolio")}
      </Typography>
      <StyledPortfolio>
        {portfolio.map((project) => (
          <div key={project.work} className="box">
            <div className="img-box">
              <Img
                src={`${project.img}?nf_resize=fit&w=${window.innerWidth}&h=${window.innerHeight}`}
                alt={project.work}
              />
            </div>
            <div className="text">
              <h3>{t(project.work)}</h3>
            </div>
          </div>
        ))}
      </StyledPortfolio>
    </Container>
  );
};

export default Portfolio;
