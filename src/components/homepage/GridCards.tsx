import { SimpleGrid, Stack } from "@mantine/core";
import UserCard from "./UserCard";
import GradesCard from "./GradesCard";
import TodoLite from "./TodoLite";
import Tips from "./Tips";
import AvgGradeChart from "./AvgGradeChart";

const GridCards = () => {
  return (
    <SimpleGrid cols={{ base: 1, xs: 3 }}>
      <Stack>
        <UserCard />
        <GradesCard />
      </Stack>

      <Stack>
        <AvgGradeChart />
        <AvgGradeChart />
      </Stack>

      <Stack>
        <TodoLite />
        <Tips />
      </Stack>
    </SimpleGrid>
  );
};

export default GridCards;
