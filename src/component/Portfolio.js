import React from "react";
import { portfolio } from "../asset/content";
import StyledPortfolio from "../styles/StyledPortfolio";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LearnMore from "./LearnMore";
import Image from "./Image";

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
          <Typography color="white" variant="h4" component="h2">
            {t("Portfolio")}
          </Typography>
          <StyledPortfolio>
            {portfolio.map((project) => (
              <div key={project.work} className="box">
                <div className="img-box">
                  <Image imageName={project.img} />
                </div>
                <div className="text">
                  <h3>{t(project.work)}</h3>
                </div>
              </div>
            ))}
          </StyledPortfolio>
          <LearnMore link="/portfolio" />
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;
