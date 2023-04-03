import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";
import "@splidejs/react-splide/css";
import { heroText } from "../asset/content";
import StyledSplide, { Overlay, StyledContainer } from "../styles/StyledSplide";
import Image from "./Image";
import H1 from "./H1";
import Lead from "./Lead";

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
        speed: 500,
        reducedMotion: true,
        cover: true,
        arrows: false,
        pagination: false,
        drag: false,
      }}
      aria-label="Hero Images"
      tag="section"
      className="text-white bg-dark"
    >
      {heroText.map((text) => (
        <SplideSlide key={text.h1}>
          <Overlay>
            <StyledContainer>
              <H1>{t(text.h1)}</H1>
              <Lead>
                {t(text.p)}
              </Lead>
            </StyledContainer>
          </Overlay>
          <Image alt={text.h1} imageName={text.img} />
        </SplideSlide>
      ))}
    </StyledSplide>
  );
};

export default SlidingHero;
