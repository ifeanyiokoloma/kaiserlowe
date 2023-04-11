import { Splide } from "@splidejs/react-splide";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "@splidejs/react-splide/css/skyblue";
import { Container } from "@mui/material";
import StyledMobilePortfolio from "../styles/StyledMobilePortfolio";
import LearnMore from "./LearnMore";
import H2 from "./H2";
import Image from "./Image";

const MobilePortfolio = ({ content, header, btn }) => {
  const [scale, setScale] = useState(false);

  function handleScale() {
    setScale(!scale);
  }

  const { t } = useTranslation();
  return (
    <Container className="py-5">
      {header && <H2 linecolor="var(--primary)">{t("Portfolio")}</H2>}
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
          mediaQuery: "min",
          breakpoints: {
            600: {
              perPage: 2,
              gap: "1rem",
            },
          },
        }}
        aria-label="Portfolio images"
      >
        {content.map((project) => (
          <StyledMobilePortfolio key={project.work}>
            <div onClick={handleScale} key={project.work} className="box">
              <div
                style={{
                  transform: scale && "scale(1.2)",
                }}
                className="img-box"
              >
                <Image imageName={project.img} alt={project.work} />
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
      
      {btn && <LearnMore
        link="/portfolio"
        text="See More Projects"
        color="white"
        bgc="var(--primary)"
        className="mt-5"
      />}
    </Container>
  );
};

export default MobilePortfolio;
