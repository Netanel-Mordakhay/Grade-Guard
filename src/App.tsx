import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { theme } from "./theme";
import LanguageSelector from "./components/LanguageSelector";

export default function App() {
  const { t } = useTranslation();

  return (
    <DirectionProvider>
      <MantineProvider theme={theme}>
        <h1>{t("clickme")}</h1>
        <LanguageSelector />
      </MantineProvider>
    </DirectionProvider>
  );
}
