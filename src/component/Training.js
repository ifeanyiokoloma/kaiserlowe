import React from "react";
import { training } from "../asset/content";
import { Box, Container, Typography } from "@mui/material";
import LearnMore from "./LearnMore";
import { StyledTraining } from "../styles/StyledTraining";
import { useTranslation } from "react-i18next";
import H2 from "./H2";
import Image from "./Image";

const Training = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        background: `url(https://res.cloudinary.com/kaiserlowe/image/upload/w_auto,c_limit/v1679359338/kaiserlowe/portfolio/bg_hqmoqj.jpg) center/cover no-repeat fixed`,
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
                    <Image imageName={item.img} />
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
