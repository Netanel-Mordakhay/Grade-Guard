import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Logo from "./components/Logo";

export default function App() {
  return (
    <DirectionProvider>
      <MantineProvider theme={theme}>
        <Logo />
      </MantineProvider>
    </DirectionProvider>
  );
}
