import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";

// Default theme
import "@splidejs/react-splide/css";
import Overlay from "../styles/Overlay";

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
      <SplideSlide>
        <Overlay>
          <h1 className="display-1">{t("Coming soon")}</h1>
          <p className="lead tablet-width">
            {t(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore voluptates sapiente molestiae itaque quaerat consequatur velit aperiam, quos deserunt?"
            )}
          </p>
        </Overlay>
        <img
          src="/images/hero/construction-worker.jpg"
          alt="construction worker"
        />
      </SplideSlide>
      <SplideSlide>
        <Overlay>
          <h1 className="display-1">{t("Coming soon")}</h1>
          <p className="lead tablet-width">
            {t(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore voluptates sapiente molestiae itaque quaerat consequatur velit aperiam, quos deserunt?"
            )}
          </p>
        </Overlay>
        <img src="/images/hero/complex-road.jpg" alt="complex road" />
      </SplideSlide>
      <SplideSlide>
        <Overlay>
          <h1 className="display-1">{t("Coming soon")}</h1>
          <p className="lead tablet-width">
            {t(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore voluptates sapiente molestiae itaque quaerat consequatur velit aperiam, quos deserunt?"
            )}
          </p>
        </Overlay>
        <img
          src="/images/hero/two-construction-workers.jpg"
          alt="two construction workers"
        />
      </SplideSlide>
    </Splide>
  );
};

export default SlidingHero;
