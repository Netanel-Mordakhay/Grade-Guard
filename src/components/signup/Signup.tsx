import { Box, Group, Stack } from "@mantine/core";
import Form from "../signup/Form";
import SignupStepper from "./SignupStepper";

const Signup = () => {
  return (
    <Stack align="center" justify="center" gap="md">
      <Group className="gradientBackground animate__animated animate__fadeInDown">
        <Form />
        <Box visibleFrom="md">
          <SignupStepper />
        </Box>
      </Group>
    </Stack>
  );
};

export default Signup;
