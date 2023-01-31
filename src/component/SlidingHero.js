import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";

// Default theme
import "@splidejs/react-splide/css";
import Overlay from "../styles/Overlay";
import { heroText } from "../asset/data";

const SlidingHero = () => {
  const { t } = useTranslation();
  return (
    <Splide
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
      }}
      aria-label="Hero Images"
      tag="section"
      className="text-white"
    >
      {heroText.map((text) => (
        <SplideSlide>
          <Overlay className="">
            <h1 className="display-4 text-uppercase">
              {t(text.h1)}
            </h1>
            <p className="lead tablet-width raleway xs-fs-2" style={{color: "lightgray"}}>{t(text.p)}</p>
          </Overlay>
          <img src={text.img} alt="construction worker" />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SlidingHero;
