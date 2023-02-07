import React from "react";
import { training } from "../asset/content";
import { Container } from "@mui/material";
import LearnMore from "./LearnMore";
import { StyledTraining } from "../styles/StyledTraining";
import { useTranslation } from "react-i18next";
import Img from "react-cool-img";

const Training = () => {
  const { t } = useTranslation();
  return (
    <StyledTraining className="pt-5">
      <Container>
        <h2
          className="text-center display-5 text-uppercase"
          style={{ fontFamily: "poppins", fontWeight: "bold" }}
        >
          {t("Training")}
        </h2>
        <div className="cards">
          {training.map((item) => (
            <div key={item.h2} className="card">
              <div className="img-box">
                <Img
                  lazy={false}
                  cache={true}
                  src={`${item.img}?nf_resize=fit&w=${window.innerWidth}`}
                  alt=""
                />
              </div>
              <section className="pt-4 text-light card-text">
                <h3 className="ps-3 text-uppercase">{t(item.h2)}</h3>
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
