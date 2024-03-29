import React from "react";
import { training } from "../asset/content";
import { Box, Container, Typography } from "@mui/material";
import LearnMore from "./LearnMore";
import { StyledTraining } from "../styles/StyledTraining";
import { useTranslation } from "react-i18next";
import H2 from "./H2";
import Image from "./Image";
import StyledLink from "../styles/StyledLink";
import Animation from "./Animation";

const Training = ({ extraBtn, header, headerLineColor, headerColor }) => {
  const { t } = useTranslation();
  return (
    <Animation>
      <StyledTraining className="py-5">
        <Container>
          {header && (
            <H2 color={headerColor} linecolor={headerLineColor}>
              {header}
            </H2>
          )}
          <div className="cards">
            {training.map(item => (
              <StyledLink
                to={`/${item.link}#`}
                key={item.h2}
                className="myCard"
              >
                <figure className="img-box">
                  <Image alt={item.h2} imageName={item.img} />
                </figure>
                <Box
                  component="section"
                  bgcolor="primary.main"
                  className="pt-4 text-light card-text"
                >
                  <Typography variant="h5" component="h3" className="ps-3 mb-2">
                    {t(item.h2)}
                  </Typography>
                  <ul>
                    {item.list.slice(0, 3).map(item => (
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
              </StyledLink>
            ))}
          </div>
        </Container>
        {extraBtn && <LearnMore text="More Courses" link="/training" />}
      </StyledTraining>
    </Animation>
  );
};

export default Training;
