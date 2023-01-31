import React from "react";
import { useTranslation } from "react-i18next";

const LearnMore = ({color, bgc}) => {
  const {t} = useTranslation()
  return (
    <div className="text-center mt-5">
      <button
        style={{ color: color, background: bgc }}
        className="btn btn-light poppins"
      >
        {t("Learn more")}
      </button>
    </div>
  );
};

export default LearnMore;
