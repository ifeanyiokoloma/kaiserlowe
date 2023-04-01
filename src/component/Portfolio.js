import React from "react";
import { portfolio } from "../asset/content";
import StyledPortfolio from "../styles/StyledPortfolio";
import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import LearnMore from "./LearnMore";
import Image from "./Image";
import H2 from "./H2";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <Box
      display={{ xs: "none", lg: "block" }}
      sx={{
        background: `url(https://res.cloudinary.com/kaiserlowe/image/upload/w_auto,c_limit/v1679359338/kaiserlowe/portfolio/bg_hqmoqj.jpg) center/cover no-repeat fixed`,
      }}
    >
      <Box sx={{ background: "rgba(0, 0, 0, .5)" }}>
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
          <LearnMore text="Portfolio Page" link="/portfolio" />
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;
