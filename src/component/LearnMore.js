import React from "react";
import { useTranslation } from "react-i18next";
import { LinkBtn } from "../styles/StyledLink";
import { StyledLearnMore } from "../styles/StyledLearnMore";

const LearnMore = ({color, bgc, link}) => {
  const {t} = useTranslation()
  return (
    <div className="text-center mt-5">
      <StyledLearnMore
        className="btn poppins"
      >
        <LinkBtn to={link}>{t("Learn more")}</LinkBtn>
      </StyledLearnMore>
    </div>
  );
};

export default LearnMore;
