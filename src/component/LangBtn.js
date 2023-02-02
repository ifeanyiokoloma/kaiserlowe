import { FormControl, NativeSelect } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LangBtn = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const langs = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
    { code: "ar", name: "Arabic" },
  ];
  return (
    <FormControl>
      <NativeSelect
        onChange={(event) => {
          setLanguage(event.target.value);
          i18n.changeLanguage(event.target.value);
        }}
        defaultValue={language}
      >
        {langs.map((lang) => (
          <option key={lang.code} value={lang.code}>{t(lang.name)}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default LangBtn;
