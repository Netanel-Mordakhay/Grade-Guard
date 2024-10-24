import { SimpleGrid, Stack } from "@mantine/core";
import UserCard from "./UserCard";
import GradesCard from "./GradesCard";

const GridCards = () => {
  return (
    <SimpleGrid cols={{ base: 1, xs: 3 }}>
      <Stack>
        <UserCard />
        <GradesCard />
        <UserCard />
      </Stack>
      <UserCard />
      <Stack>
        <UserCard />
      </Stack>
    </SimpleGrid>
  );
};

export default GridCards;
