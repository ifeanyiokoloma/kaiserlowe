import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const BrandName = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        display: {
          xs: "none",
          sm: "flex",
        },
      }}
    >
      <span
        style={{
          padding: 0,
          lineHeight: 0.7,
        }}
      >
        <span
          style={{
            color: "var(--secondary)",
            padding: 0,
            lineHeight: 0.7,
            fontFamily: "roboto-slab",
            fontWeight: "bolder",
            fontSize: ".8rem",
          }}
        >
          KAISERLOWE UGO
        </span>
        <br />
        <span
          style={{
            fontFamily: "roboto-slab",
            fontSize: ".65rem",
            color: "var(--primary)",
            fontWeight: "lighter",
          }}
        >
          {t("Construction")}
        </span>
      </span>
    </Box>
  );
};

export default BrandName;
