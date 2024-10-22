import { Box, Stack } from "@mantine/core";
import Signup from "../components/signup/Signup";
import Footer from "../components/Footer/Footer";
import "../styles/login.css";

const SignupPage = () => {
  return (
    <Stack
      h="100svh"
      //bg="var(--mantine-color-body)"
      align="stretch"
      justify="space-between"
      gap="md"
    >
      <Box />
      <Signup />
      <Footer />
    </Stack>
  );
};

export default SignupPage;
