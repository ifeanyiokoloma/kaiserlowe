import React from "react";
import StyledPortfolio from "../styles/StyledPortfolio";
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LearnMore from "./LearnMore";
import Image from "./Image";
import H2 from "./H2";

const Portfolio = ({ content, btn, header }) => {
  const { t } = useTranslation();
  return (
    <Container className="py-5">
      {header && (
        <H2 color="white" linecolor="var(--primary)">
          {t("Portfolio")}
        </H2>
      )}
      <StyledPortfolio>
        {content.map((project) => (
          <div key={project.work} className="box">
            <figure className="img-box">
              <Image alt={project.work} imageName={project.img} />
            </figure>
            <div className="text">
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h5"
                component="figcaption"
              >
                {t(project.work)}
              </Typography>
            </div>
          </div>
        ))}
      </StyledPortfolio>
      {btn && <LearnMore text="See More Projects" link="/portfolio" />}
    </Container>
  );
};

export default Portfolio;
