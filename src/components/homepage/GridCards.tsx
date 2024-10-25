import { SimpleGrid, Stack } from "@mantine/core";
import UserCard from "./UserCard";
import GradesCard from "./GradesCard";
import TodoLite from "./TodoLite";

const GridCards = () => {
  return (
    <SimpleGrid cols={{ base: 1, xs: 3 }}>
      <Stack>
        <UserCard />
        <GradesCard />
      </Stack>

      <Stack>
        <UserCard />
        <TodoLite />
      </Stack>

      <Stack>
        <TodoLite />
      </Stack>
    </SimpleGrid>
  );
};

export default GridCards;
