import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";

// Default theme
import "@splidejs/react-splide/css";
import { heroText } from "../asset/data";
import StyledSplide, { Overlay } from "../styles/StyledSplide";


const SlidingHero = () => {
  const { t } = useTranslation();
  return (
      <StyledSplide
        options={{
          autoplay: true,
          interval: 6000,
          lazyLoad: true,
          keyboard: true,
          height: "100vh",
          width: "100%",
          type: "loop",
          speed: 3000,
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
          <SplideSlide>
            <Overlay>
              <h1 className="display-4 text-uppercase">{t(text.h1)}</h1>
              <p className="lead tablet-width raleway">{t(text.p)}</p>
            </Overlay>
            <img src={text.img} alt="background" />
          </SplideSlide>
        ))}
      </StyledSplide>
  );
};

export default SlidingHero;
