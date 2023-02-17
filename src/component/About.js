import { Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { about } from "../asset/content";
import LearnMore from "./LearnMore";
import { StyledAbout } from "../styles/StyledAbout";
import Img from "react-cool-img";

const About = () => {
  // const [index, setIndex] = useState(0);
  const { t } = useTranslation();
  return (
    <StyledAbout className="py-5" bgcolor="primary.main">
      <Container>
        <div className="articleContainer">
          <Typography variant="h4" component="h2" mb={5}>
            {t(about[0].h2)}
          </Typography>
          <div className="content">
            <article>
              <Typography variant="h5" component="h3">{t("Meet us")}</Typography>
              <Typography
                sx={{ fontWeight: 200 }}
                variant="body2"
                component="p"
              >
                {t(about[0].content)}
              </Typography>
            </article>
            <div className="img-box">
              <Img
                lazy={false}
                cache={true}
                debounce={0}
                src={`${about[0].img}?nf_resize=fit&w=${
                  window.innerWidth < 768
                    ? window.innerWidth * 4
                    : window.innerWidth
                }`}
                alt={about[0].h2}
              />
              <Img
                lazy={false}
                cache={true}
                debounce={0}
                src={about[0].img}
                alt={about[0].h2}
              />
            </div>
          </div>
          <LearnMore link="/about" color="var(--primary)" />
        </div>
      </Container>
    </StyledAbout>
  );
};

export default About;
