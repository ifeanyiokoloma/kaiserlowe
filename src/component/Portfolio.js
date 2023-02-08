import React from "react";
import { portfolio } from "../asset/content";
import StyledPortfolio from "../styles/StyledPortfolio";
import Img from "react-cool-img";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
    const {t} = useTranslation()
  return (
    <Container className="py-5">
      <h2
        className="text-center display-6 text-uppercase"
        style={{ fontFamily: "poppins", fontWeight: "bold" }}
      >
        {t("Portfolio")}
      </h2>
      <StyledPortfolio>
        {portfolio.map((project) => (
          <div className="box">
            <div className="img-box">
              <Img src={project.img} />
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
