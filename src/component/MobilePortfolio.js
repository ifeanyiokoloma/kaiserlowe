import { Splide } from "@splidejs/react-splide";
import React, { useState } from "react";
import { portfolio } from "../asset/content";
import Img from "react-cool-img";
import { useTranslation } from "react-i18next";
import "@splidejs/react-splide/css/skyblue";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import StyledMobilePortfolio from "../styles/StyledMobilePortfolio";
import LearnMore from "./LearnMore";
import H2 from "./H2";

const MobilePortfolio = () => {
  const [scale, setScale] = useState(false);

  function handleClick(e) {
    setScale(!scale);
  }

  const { t } = useTranslation();
  return (
    <Box
      display={{ xs: "block", lg: "none" }}
      sx={{
        background: `url(/images/portfolio/bg.jpg?nf_resize=fit&w=${window.outerWidth}&h=${window.outerHeight}) center/cover no-repeat fixed`,
      }}
    >
      <Box sx={{ background: "rgba(0, 0, 0, .5)" }}>
        <Container className="py-5">
          <H2>Portfolio</H2>
          <Splide
            options={{
              autoplay: true,
              arrow: false,
              cover: true,
              arrows: false,
              pagination: false,
              drag: true,
              reducedMotion: true,
              type: "loop",
              speed: 500,
              interval: 6000,
              lazyLoad: false,
              keyboard: true,
              height: "auto",
            }}
            aria-label="Portfolio images"
          >
            {portfolio.map((project) => (
              <StyledMobilePortfolio key={project.work}>
                <div onClick={handleClick} key={project.work} className="box">
                  <div
                    style={{
                      transform: scale && "scale(1.2)",
                    }}
                    className="img-box"
                  >
                    <Img
                      src={`${project.img}?nf_resize=smartcrop&w=${Math.round(
                        window.innerWidth - 30
                      )}&h=300`}
                      alt={project.work}
                    />
                  </div>
                  <div
                    style={{
                      opacity: scale && 1,
                    }}
                    className="text"
                  >
                    <h3>{t(project.work)}</h3>
                  </div>
                </div>
              </StyledMobilePortfolio>
            ))}
          </Splide>
          <LearnMore color="white" bgc="var(--primary)" />
        </Container>
      </Box>
    </Box>
  );
};

export default MobilePortfolio;
