import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { about } from "../asset/content";
import LearnMore from "./LearnMore";
import { StyledAbout } from "../styles/StyledAbout";
import Img from "react-cool-img";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import H2 from "./H2";

const About = () => {
  const { t } = useTranslation();
  return (
    <StyledAbout className="py-5" bgcolor="primary.main">
      <Container>
        <H2>{t("About Us")}</H2>
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
          aria-label="about kaiser lowe contruction company"
          className="articleContainer"
        >
          {about.map((item) => (
            <SplideSlide
              style={{
                height: "auto",
              }}
              key={item.h2}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                className="content"
                spacing={{ xs: "1rem", lg: "3rem" }}
              >
                <Box component="article" color="white">
                  <Typography variant="h5" component="h3">
                    {t(item.h2)}
                  </Typography>
                  <Typography fontWeight="200" variant="body1" component="p">
                    {t(item.content).length > 500
                      ? item.content.substring(0, 501) + "..."
                      : t(item.content)}
                  </Typography>
                </Box>
                <div className="img-box">
                  <Img
                    lazy={false}
                    cache={true}
                    debounce={0}
                    src={`${item.img}`}
                    alt={item.h2}
                  />
                </div>
              </Stack>
              <LearnMore link="/about" />
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </StyledAbout>
  );
};

export default About;
