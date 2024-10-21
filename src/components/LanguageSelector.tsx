import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "he", lang: "Hebrew" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return languages.map((lng) => (
    <Button key={lng.code} onClick={() => changeLanguage(lng.code)}>
      {lng.lang}
    </Button>
  ));
};

export default LanguageSelector;
