import React from "react";
import { useTranslation } from "react-i18next";
import { LinkBtn } from "../styles/StyledLink";

const LearnMore = ({color, bgc, link}) => {
  const {t} = useTranslation()
  return (
    <div className="text-center mt-5">
      <button
        style={{ color: color, background: bgc }}
        className="btn btn-light poppins"
      >
        <LinkBtn to={link}>{t("Learn more")}</LinkBtn>
      </button>
    </div>
  );
};

export default LearnMore;
