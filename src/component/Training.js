import React from "react";
import { training } from "../asset/content";
import { Box, Container, Typography } from "@mui/material";
import LearnMore from "./LearnMore";
import { StyledTraining } from "../styles/StyledTraining";
import { useTranslation } from "react-i18next";
import Img from "react-cool-img";
import H2 from "./H2";

const Training = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        background: `url(/images/portfolio/bg.jpg?nf_resize=fit&w=${window.innerWidth}) center/cover no-repeat fixed`,
      }}
    >
      <Box sx={{ background: "rgba(0, 0, 0, .5)" }}>
        <StyledTraining className="py-5">
          <Container>
            <H2>{t("Training")}</H2>
            <div className="cards">
              {training.map((item) => (
                <div key={item.h2} className="card">
                  <div className="img-box">
                    <Img
                    className="xs"
                      lazy={false}
                      cache={true}
                      debounce={0}
                      src={`${item.img}?nf_resize=smartcrop&w=${Math.round(
                        window.innerWidth - 30
                      )}&h=200`}
                      alt={item.h2}
                    />
                    <Img
                    className="sm"
                      lazy={false}
                      cache={true}
                      debounce={0}
                      src={`${item.img}?nf_resize=smartcrop&w=${Math.round(
                        (window.innerWidth - 40) / 2
                      )}&h=200`}
                      alt={item.h2}
                    />
                  </div>
                  <Box
                    component="section"
                    bgcolor="primary.main"
                    className="pt-4 text-light card-text"
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      className="ps-3 mb-2"
                    >
                      {t(item.h2)}
                    </Typography>
                    <ul>
                      {item.list.map((item) => (
                        <Typography
                          className="mt-1"
                          component="li"
                          variant="body2"
                          key={item}
                        >
                          {t(item)}
                        </Typography>
                      ))}
                    </ul>
                  </Box>
                </div>
              ))}
            </div>
            <LearnMore link="/training" />
          </Container>
        </StyledTraining>
      </Box>
    </Box>
  );
};

export default Training;
