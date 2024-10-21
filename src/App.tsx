import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Demo from "./components/Demo";
import LanguageSwitcher from "./components/LanguageSwticher";

export default function App() {
  return (
    <DirectionProvider>
      <MantineProvider theme={theme}>
        <Demo />
        <LanguageSwitcher />
      </MantineProvider>
    </DirectionProvider>
  );
}
