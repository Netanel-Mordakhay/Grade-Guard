import { Box, Stack } from "@mantine/core";
import Login from "./Login";
import Footer from "../../components/Footer/Footer";
import "../../styles/login.css";

const LoginPage = () => {
  return (
    <Stack
      h="100svh"
      //bg="var(--mantine-color-body)"
      align="stretch"
      justify="space-between"
      gap="md"
    >
      <Box />
      <Login />
      <Footer />
    </Stack>
  );
};

export default LoginPage;
