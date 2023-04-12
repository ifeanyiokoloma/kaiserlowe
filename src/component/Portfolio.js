import React from "react";
import StyledPortfolio from "../styles/StyledPortfolio";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import LearnMore from "./LearnMore";
import Image from "./Image";
import H2 from "./H2";

const Portfolio = ({ content, btn, header }) => {
  const { t } = useTranslation();
  return (
    <Container className="py-5">
      {header && <H2 color="white" linecolor="var(--primary)">{t("Portfolio")}</H2>}
      <StyledPortfolio>
        {content.map((project) => (
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
      {btn && <LearnMore text="See More Projects" link="/portfolio" />}
    </Container>
  );
};

export default Portfolio;
