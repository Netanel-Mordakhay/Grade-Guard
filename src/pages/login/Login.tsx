import { Box, Flex, Group, Stack } from "@mantine/core";
import Authentication from "./Authentication";
import Features from "./Features";
import DisplayOptions from "../../components/DisplayOptions";

const login = () => {
  return (
    <Flex
      h="100svh"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      columnGap="100px"
    >
      <Stack>
        <Group>
          <Authentication />
          <Box visibleFrom="md">
            <Features />
          </Box>
        </Group>
        <DisplayOptions />
      </Stack>
    </Flex>
  );
};

export default login;
