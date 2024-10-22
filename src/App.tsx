import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider, Stack } from "@mantine/core";
import "animate.css";
import { theme } from "./theme";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

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
