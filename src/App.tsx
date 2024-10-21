import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider, Stack } from "@mantine/core";
import { theme } from "./theme";
import Login from "./pages/login/Login";
import LanguageSelect from "./components/LanguageSelect";
import ColorSelect from "./components/ColorSelect";

export default function App() {
  return (
    <DirectionProvider>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Stack>
          <Login />
        </Stack>
      </MantineProvider>
    </DirectionProvider>
  );
}
