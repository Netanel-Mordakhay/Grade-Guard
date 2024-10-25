import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider, Stack } from "@mantine/core";
import { theme } from "./theme";
import "animate.css";
import "./styles/global.css";
import "@mantine/charts/styles.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const { i18n } = useTranslation();

  // Set direction based on language
  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "he" ? "rtl" : "ltr"
    );
  }, [i18n.language]);

  return (
    <DirectionProvider>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Stack className="gradientBackgroundBody">
          <DashboardPage />
        </Stack>
      </MantineProvider>
    </DirectionProvider>
  );
}
