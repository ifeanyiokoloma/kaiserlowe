import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";
import "@splidejs/react-splide/css";
import { heroText } from "../asset/content";
import StyledSplide, { Overlay, StyledContainer } from "../styles/StyledSplide";
import { Typography } from "@mui/material";

const SlidingHero = () => {
  const { t } = useTranslation();
  return (
    <StyledSplide
      options={{
        autoplay: true,
        interval: 6000,
        lazyLoad: false,
        keyboard: true,
        height: "100vh",
        width: "100%",
        type: "loop",
        speed: 500,
        reducedMotion: true,
        cover: true,
        arrows: false,
        pagination: false,
        drag: false,
      }}
      aria-label="Hero Images"
      tag="section"
      className="text-white"
    >
      {heroText.map((text) => (
        <SplideSlide key={text.h1}>
          <Overlay>
            <StyledContainer>
              <Typography
                variant="h2"
                component="h1"
                className="text-uppercase"
                color="primary"
              >
                {t(text.h1)}
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                fontWeight="300"
                className="tablet-width raleway light-font"
              >
                {t(text.p)}
              </Typography>
            </StyledContainer>
          </Overlay>
          <img
            src={`${text.img}?nf_resize=smartcrop&w=${window.innerWidth}&h=${
              window.innerHeight - 58
            }`}
            alt={text.h1}
          />
        </SplideSlide>
      ))}
    </StyledSplide>
  );
};

export default SlidingHero;
