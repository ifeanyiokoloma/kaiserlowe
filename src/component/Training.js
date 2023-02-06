import React from "react";
import { training } from "../asset/content";
import { Container } from "@mui/material";
import LearnMore from "./LearnMore";
import { StyledTraining } from "../styles/StyledTraining";
import { useTranslation } from "react-i18next";

const Training = () => {
  const { t } = useTranslation();
  return (
    <StyledTraining className="pb-5">
      <Container>
        <h1 className="text-center text-uppercase">{t("Training")}</h1>
        <div className="cards">
          {training.map((item) => (
            <div key={item.h2} className="card">
              <div className="img-box">
                <picture>
                  <source
                    src={`${item.img}?nf_resize=fit&w=${
                      75 - window.innerWidth
                    }`}
                    media="(min-width: 768px)"
                  />
                  <img
                    src={`${item.img}?nf_resize=fit&w=${window.innerWidth}&h=${
                      window.innerHeight - 40
                    }`}
                    alt=""
                  />
                </picture>
              </div>
              <section className="pt-4 text-light card-text">
                <h2 className="ps-3 text-uppercase">{t(item.h2)}</h2>
                <ul>
                  {item.list.map((item) => (
                    <li key={item}>{t(item)}</li>
                  ))}
                </ul>
              </section>
            </div>
          ))}
        </div>
        <LearnMore color="white" bgc="var(--primary)" />
      </Container>
    </StyledTraining>
  );
};

export default Training;
