import { Splide } from "@splidejs/react-splide";
import React from "react";
import { portfolio } from "../asset/content";
import Img from "react-cool-img";
import { useTranslation } from "react-i18next";
import "@splidejs/react-splide/css/skyblue";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import StyledMobilePortfolio from "../styles/StyledMobilePortfolio";

const MobilePortfolio = () => {
  const { t } = useTranslation();
  return (
    <Box
      display={{ xs: "block", lg: "none" }}
      sx={{
        background:
          "url(/images/portfolio/bg.jpg) center/cover no-repeat fixed",
      }}
    >
      <Box sx={{ background: "rgba(255, 152, 0, .5)" }}>
        <Container>
          <Splide
            options={{
              autoplay: true,
              arrow: false,
              cover: true,
              arrows: false,
              pagination: false,
              drag: false,
              reducedMotion: true,
              type: "loop",
              speed: 500,
              interval: 6000,
              lazyLoad: false,
              keyboard: true,
              height: "70vh",
            }}
            aria-label="Portfolio images"
          >
            {portfolio.map((project) => (
              <StyledMobilePortfolio>
                <div key={project.work} className="box">
                  <div className="img-box">
                    <Img src={project.img} alt={project.work} />
                  </div>
                  <div className="text">
                    <h3>{t(project.work)}</h3>
                  </div>
                </div>
              </StyledMobilePortfolio>
            ))}
          </Splide>
        </Container>
      </Box>
    </Box>
  );
};

export default MobilePortfolio;
