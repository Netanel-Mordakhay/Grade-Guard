import { Box, Group, Stack } from "@mantine/core";
import Authentication from "./Authentication";
import Features from "./Features";

import "../../styles/login.css";

const login = () => {
  return (
    <Stack
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="md"
    >
      <Group>
        <Authentication />
        <Box visibleFrom="md">
          <Features />
        </Box>
      </Group>
    </Stack>
  );
};

export default login;
