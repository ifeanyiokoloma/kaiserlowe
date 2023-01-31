import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { about } from "../asset/data";
import Arrows from "./Arrows";
import LearnMore from "./LearnMore";
import { StyledAbout } from "../styles/StyledAbout";

const About = () => {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <StyledAbout className="pb-3">
      <Arrows />
      <Container>
        <div className="articleContainer">
          <div className="content shadow">
            <article>
              <h2 className="display-4">{t(about[index].h2)}</h2>
              <Typography variant="body2" component="p">
                {t(about[index].content)}
              </Typography>
            </article>
            <div className="img-box">
              <img src="/images/about/smiling.jpg" alt="pic" />
            </div>
          </div>
          <LearnMore color="var(--primary)" />
        </div>
      </Container>
    </StyledAbout>
  );
};

export default About;
