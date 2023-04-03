import React from "react";
import { portfolio } from "../asset/content";
import StyledPortfolio from "../styles/StyledPortfolio";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import LearnMore from "./LearnMore";
import Image from "./Image";
import H2 from "./H2";
import BG from "./BG";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <BG display={{ xs: "none", lg: "block" }}>
      <Container className="py-5">
        <H2 linecolor="var(--primary)">{t("Portfolio")}</H2>
        <StyledPortfolio>
          {portfolio.map((project) => (
            <div key={project.work} className="box">
              <div className="img-box">
                <Image alt={project.work} imageName={project.img} />
              </div>
              <div className="text">
                <h3>{t(project.work)}</h3>
              </div>
            </div>
          ))}
        </StyledPortfolio>
        <LearnMore text="See More Projects" link="/portfolio" />
      </Container>
    </BG>
  );
};

export default Portfolio;
