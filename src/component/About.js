import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { about } from "../asset/content";
import LearnMore from "./LearnMore";
import { StyledAbout } from "../styles/StyledAbout";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import H2 from "./H2";
import Image from "./Image";
import Animation from "./Animation";

const About = () => {
  const { t } = useTranslation();
  return (
    <Animation>
      <StyledAbout className="py-5" sx={{ bgcolor: "primary.main" }}>
        <Container component="section" maxWidth="lg">
          <H2 color="white" linecolor="white">
            {t("About Us")}
          </H2>
          <Splide
            options={{
              autoplay: true,
              cover: true,
              arrows: false,
              pagination: false,
              drag: false,
              reducedMotion: true,
              type: "fade",
              speed: 1000,
              interval: 6000,
              lazyLoad: true,
              keyboard: true,
              rewind: "true",
            }}
            aria-label="about kaiser lowe contruction company"
            className="articleContainer"
          >
            {about.map(item => (
              <SplideSlide
                style={{
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                }}
                key={item.h2}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  className="content"
                  spacing={{ xs: "1rem", md: "6rem" }}
                >
                  <Box component="article" color="white">
                    <Typography variant="h5" component="h3">
                      {t(item.h2)}
                    </Typography>

                    {item.content.length > 400 ? (
                      <Typography
                        sx={{ fontWeight: "200" }}
                        variant="body2"
                        component="p"
                      >
                        {t(item.content.substring(0, 401) + "...")}
                      </Typography>
                    ) : item.content.hasOwnProperty("title") &&
                      typeof item.content === "object" &&
                      !Array.isArray(item.content) &&
                      item.content !== null ? (
                      <Typography
                        sx={{ fontWeight: "300" }}
                        variant="subtitle2"
                      >
                        {t(item.content.title)}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{ fontWeight: "200" }}
                        variant="body2"
                        component="p"
                      >
                        {t(item.content)}
                      </Typography>
                    )}

                    <Typography
                      component="ul"
                      variant="body2"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".3rem",
                      }}
                    >
                      {item.content.hasOwnProperty("list") &&
                        item.content?.list.map(item => (
                          <li key={item}>{t(item)}</li>
                        ))}
                    </Typography>
                  </Box>
                  <Box component="figure" className="img-box">
                    <Image alt={item.h2} imageName={item.img} />
                  </Box>
                </Stack>
                <LearnMore text="Read more" link="/about" />
              </SplideSlide>
            ))}
          </Splide>
        </Container>
      </StyledAbout>
    </Animation>
  );
};

export default About;
