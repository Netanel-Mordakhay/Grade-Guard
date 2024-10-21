import { Box, Group, Stack } from "@mantine/core";
import Form from "../signup/Form";
import SignupStepper from "./SignupStepper";
import "../../styles/login.css";

const Signup = () => {
  return (
    <Stack
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="md"
    >
      <Group className="authenticationContainer animate__animated animate__fadeInDown">
        <Form />
        <Box visibleFrom="md">
          <SignupStepper />
        </Box>
      </Group>
    </Stack>
  );
};

export default Signup;
