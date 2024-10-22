import { useTranslation } from "react-i18next";
import { Select, useDirection } from "@mantine/core";
import { GrLanguage } from "react-icons/gr";

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const { setDirection } = useDirection();

  // Available languages
  const languages = [
    { value: "en", label: t("global.english") },
    { value: "he", label: t("global.hebrew") },
  ];

  const changeLanguage = (lng: string | null) => {
    if (lng) {
      i18n.changeLanguage(lng);
      {
        lng === "he" ? setDirection("rtl") : setDirection("ltr");
      }
    }
  };

  return (
    <Select
      allowDeselect={false}
      leftSection={<GrLanguage />}
      placeholder={
        i18n.language === "he" ? t("global.hebrew") : t("global.english")
      }
      data={languages}
      onChange={(lng) => changeLanguage(lng)}
    />
  );
};

export default LanguageSelect;
