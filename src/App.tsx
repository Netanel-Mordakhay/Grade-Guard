import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider, Stack } from "@mantine/core";
import { theme } from "./theme";
import Login from "./pages/login/Login";
import LanguageSelect from "./components/LanguageSelect";

export default function App() {
  return (
    <DirectionProvider>
      <MantineProvider theme={theme}>
        <Stack>
          <Login />
          <LanguageSelect />
        </Stack>
      </MantineProvider>
    </DirectionProvider>
  );
}
