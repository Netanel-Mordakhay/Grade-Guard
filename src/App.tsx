import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Login from "./pages/login/login";

export default function App() {
  return (
    <DirectionProvider>
      <MantineProvider theme={theme}>
        <div>asd</div>
        <Login />
      </MantineProvider>
    </DirectionProvider>
  );
}
