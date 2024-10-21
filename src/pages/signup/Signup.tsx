import { Box, Group, Stack } from "@mantine/core";
import Form from "../signup/Form";
import Features from "../login/Features";
import "../../styles/login.css";

const Signup = () => {
  return (
    <Stack
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="md"
    >
      <Group className="authenticationContainer">
        <Form />
        <Box visibleFrom="md">
          <Features />
        </Box>
      </Group>
    </Stack>
  );
};

export default Signup;