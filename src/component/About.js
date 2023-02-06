import { Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { about } from "../asset/content";
import LearnMore from "./LearnMore";
import { StyledAbout } from "../styles/StyledAbout";

const About = () => {
  // const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <StyledAbout className="py-5">
      <Container>
        <div className="articleContainer">
          <div className="content shadow">
            <article>
              <h2 className="display-4">{t(about[0].h2)}</h2>
              <Typography variant="body2" component="p">
                {t(about[0].content)}
              </Typography>
            </article>
            <div className="img-box">
              <picture>
                <source
                  srcSet={`${about[0].img}?nf_resize=fit&w=${
                    window.innerWidth - 50
                  }&h=${window.innerHeight - 40}`}
                  media="(min-width: 768px)"
                />
                <img
                  src={`${about[0].img}?nf_resize=fit&w=${
                    window.innerWidth
                  }&h=${window.innerHeight - 40}`}
                  alt="pic"
                />
              </picture>
            </div>
          </div>
          <LearnMore color="var(--primary)" />
        </div>
      </Container>
    </StyledAbout>
  );
};

export default About;
