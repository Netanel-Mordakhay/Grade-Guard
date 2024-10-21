import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { theme } from "./theme";
import LanguageSelector from "./components/LanguageSelector";
import LanguageSelect from "./components/LanguageSelect";

export default function App() {
  const { t } = useTranslation();

  return (
    <DirectionProvider>
      <MantineProvider theme={theme}>
        <h1>{t("global.clickme")}</h1>
        <LanguageSelector />
        <LanguageSelect />
      </MantineProvider>
    </DirectionProvider>
  );
}
