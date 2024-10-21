import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider, Stack } from "@mantine/core";
import { theme } from "./theme";

import LoginPage from "./pages/login/LoginPage";

export default function App() {
  return (
    <DirectionProvider>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Stack>
          <LoginPage />
        </Stack>
      </MantineProvider>
    </DirectionProvider>
  );
}
