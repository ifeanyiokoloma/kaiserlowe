import React from "react";
import { useTranslation } from "react-i18next";
import { LinkBtn } from "../styles/StyledLink";
import { StyledLearnMore } from "../styles/StyledLearnMore";

const LearnMore = ({color, bgc, link, className, text}) => {
  const {t} = useTranslation()
  return (
    <div className="text-center">
      <StyledLearnMore
        className={`btn poppins ${className}`}
      >
        <LinkBtn to={link}>{t(text || "Learn more")}</LinkBtn>
      </StyledLearnMore>
    </div>
  );
};

export default LearnMore;
