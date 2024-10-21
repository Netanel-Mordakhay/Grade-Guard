import { Box, Stack } from "@mantine/core";
import Signup from "./Signup";
import Footer from "../../components/Footer";

const SignupPage = () => {
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
      <Signup />
      <Footer />
    </Stack>
  );
};

export default SignupPage;
