import { Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { about } from "../asset/content";
import LearnMore from "./LearnMore";
import { StyledAbout } from "../styles/StyledAbout";
import Img from "react-cool-img";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const About = () => {
  const { t } = useTranslation();
  return (
    <StyledAbout className="py-5" bgcolor="primary.main">
      <Container>
        <Typography
          color="white"
          sx={{ fontWeight: "bolder" }}
          variant="h4"
          component="h2"
          mb={5}
        >
          {t("About Us")}
        </Typography>
        <Splide
          options={{
            autoplay: true,
            arrow: false,
            cover: true,
            arrows: false,
            pagination: false,
            drag: false,
            reducedMotion: true,
            type: "fade",
            speed: 1000,
            interval: 6000,
            lazyLoad: false,
            keyboard: true,
            rewind: "true",
          }}
          aria-label="My Favorite Images"
          className="articleContainer"
        >
          {about.map((item) => (
            <SplideSlide key={item.h2}>
              <div className="content">
                <article>
                  <Typography variant="h5" component="h3">
                    {t(item.h2)}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 200,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    variant="body2"
                    component="p"
                  >
                    {t(item.content).length > 500
                      ? item.content.substring(0, 501) + "..."
                      : t(item.content)}
                  </Typography>
                </article>
                <div className="img-box">
                  <Img
                    lazy={false}
                    cache={true}
                    debounce={0}
                    src={`${item.img}?nf_resize=fit&w=${window.outerWidth}`}
                    alt={item.h2}
                  />
                </div>
              </div>
              <LearnMore link="/about" />
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </StyledAbout>
  );
};

export default About;
