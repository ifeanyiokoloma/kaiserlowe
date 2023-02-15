import React from "react";
import { portfolio } from "../asset/content";
import StyledPortfolio from "../styles/StyledPortfolio";
import Img from "react-cool-img";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LearnMore from "./LearnMore";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <Box
      display={{ xs: "none", lg: "block" }}
      sx={{
        background:
          "url(/images/portfolio/bg.jpg) center/cover no-repeat fixed",
      }}
    >
      <Box sx={{ background: "rgba(255, 152, 0, .5)" }}>
        <Container className="py-5">
          <Typography color="white" variant="h4" component="h2">
            {t("Portfolio")}
          </Typography>
          <StyledPortfolio>
            {portfolio.map((project) => (
              <div key={project.work} className="box">
                <div className="img-box">
                  <Img src={project.img} alt={project.work} />
                </div>
                <div className="text">
                  <h3>{t(project.work)}</h3>
                </div>
              </div>
            ))}
          </StyledPortfolio>
          <LearnMore color="white" bgc="var(--primary)" />
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;
