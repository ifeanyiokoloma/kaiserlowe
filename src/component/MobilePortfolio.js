import React from "react";
import { useTranslation } from "react-i18next";
import "@splidejs/react-splide/css/skyblue";
import { Button, Container, Typography } from "@mui/material";
import StyledMobilePortfolio, {
  StyledSplide,
} from "../styles/StyledMobilePortfolio";
import LearnMore from "./LearnMore";
import H2 from "./H2";
import Image from "./Image";
import H3 from "./H3";

const MobilePortfolio = ({ content, header, btn }) => {
  function handleMotion(e) {
    e.currentTarget.classList.toggle("scale");
  }

  const { t } = useTranslation();
  return (
    <Container className="py-5">
      {header && (
        <H2 color="white" linecolor="var(--primary)">
          {t("Portfolio")}
        </H2>
      )}
      <StyledSplide
        options={{
          // autoplay: true,
          cover: true,
          arrows: true,
          pagination: false,
          drag: true,
          reducedMotion: true,
          type: "fade",
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
        {content.map(project => (
          <StyledMobilePortfolio key={project.work}>
            <div onClick={handleMotion} key={project.work} className="box">
              <div className="img-box">
                <Image imageName={project.img} alt={project.work} />
              </div>
              <div className="text">
                <H3 color="white">{t(project.name)}</H3>
                <Typography component="p" variant="subtitle2" textTransform="capitalize">
                  {t(project.work)}
                </Typography>
                <Button variant="contained" sx={{color: "white", mt: 2}} size="small" >
                  See More
                </Button>
              </div>
            </div>
          </StyledMobilePortfolio>
        ))}
      </StyledSplide>

      {btn && (
        <LearnMore
          link="/portfolio"
          text="See More Projects"
          color="white"
          bgc="var(--primary)"
          className="mt-5"
        />
      )}
    </Container>
  );
};

export default MobilePortfolio;
