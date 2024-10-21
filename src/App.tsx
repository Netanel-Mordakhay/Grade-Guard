import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider } from "@mantine/core";
//import { useTranslation } from "react-i18next";
import { theme } from "./theme";

//import Demo from "./components/Demo";
//import LanguageSwitcher from "./components/LanguageSwticher";

export default function App() {
  //const { t } = useTranslation();

  return (
    <DirectionProvider>
      <MantineProvider theme={theme}>
        <h1>Hello world</h1>
      </MantineProvider>
    </DirectionProvider>
  );
}
