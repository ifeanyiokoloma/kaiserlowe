import React from "react";
import { training } from "../asset/content";
import { Box, Container, Typography } from "@mui/material";
import LearnMore from "./LearnMore";
import { StyledTraining } from "../styles/StyledTraining";
import { useTranslation } from "react-i18next";
import H2 from "./H2";
import Image from "./Image";

const Training = ({ extraBtn, header }) => {
  const { t } = useTranslation();
  return (
      <StyledTraining className="py-5">
        <Container>
          {header && <H2 linecolor="var(--primary)">{t("Training")}</H2>}
          <div className="cards">
            {training.map((item) => (
              <div key={item.h2} className="myCard">
                <div className="img-box">
                  <Image alt={item.h2} imageName={item.img} />
                </div>
                <Box
                  component="section"
                  bgcolor="primary.main"
                  className="pt-4 text-light card-text"
                >
                  <Typography variant="h5" component="h3" className="ps-3 mb-2">
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
        </Container>
        {extraBtn && <LearnMore text="More Courses" link="/training" />}
      </StyledTraining>
  );
};

export default Training;
