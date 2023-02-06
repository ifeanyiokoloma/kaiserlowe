import { ArrowDropDown, Language } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  NativeSelect,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LangBtn = () => {
  // i18n Translation
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

  // Mui Modal
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <Box>
      <IconButton onClick={handleClickOpen} sx={{ display: "flex" }}>
        <Language />
        <Typography className="text-uppercase" variant="caption">{language}</Typography>
        <ArrowDropDown color="primary" />
      </IconButton>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Change Site Language</DialogTitle>
        <DialogContent>
          <FormControl>
            <NativeSelect
              onChange={(event) => {
                setLanguage(event.target.value);
                i18n.changeLanguage(event.target.value);
              }}
              defaultValue={language}
            >
              {langs.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {t(lang.name)}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LangBtn;
