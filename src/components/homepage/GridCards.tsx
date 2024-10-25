import { SimpleGrid, Stack } from "@mantine/core";
import UserCard from "./UserCard";
import GradesCard from "./GradesCard";
import TodoLite from "./TodoLite";
import Tips from "./Tips";
import AvgGradeChart from "./AvgGradeChart";
import QuickActions from "./QuickActions";

const GridCards = () => {
  return (
    <SimpleGrid cols={{ base: 1, xs: 3 }}>
      <Stack>
        <UserCard />
        <GradesCard />
        <GradesCard />
      </Stack>

      <Stack>
        <AvgGradeChart />
        <TodoLite />
      </Stack>

      <Stack>
        <QuickActions />
        <Tips />
      </Stack>
    </SimpleGrid>
  );
};

export default GridCards;
