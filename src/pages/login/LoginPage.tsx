import { Box, Stack } from "@mantine/core";
import Login from "./Login";
import Footer from "../../components/Footer";

const LoginPage = () => {
  return (
    <Stack
      h="100svh"
      bg="var(--mantine-color-body)"
      align="stretch"
      justify="space-between"
      gap="md"
      p={10}
    >
      <Box />
      <Login />
      <Footer />
    </Stack>
  );
};

export default LoginPage;
