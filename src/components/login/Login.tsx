import { Box, Group, Stack } from "@mantine/core";
import Form from "./Form";
import Features from "./Features";

const login = () => {
  return (
    <Stack align="center" justify="center" gap="md">
      <Group className="animate__animated animate__fadeInDown">
        <Form />
        <Box visibleFrom="md">
          <Features />
        </Box>
      </Group>
    </Stack>
  );
};

export default login;
