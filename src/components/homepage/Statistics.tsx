import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import { Gi3dMeeple } from "react-icons/gi";
import { FaFlagCheckered, FaCheck, FaTrophy } from "react-icons/fa6";

const icons = {
  user: Gi3dMeeple,
  discount: Gi3dMeeple,
  receipt: Gi3dMeeple,
  coin: Gi3dMeeple,
  exam: FaFlagCheckered,
  assignment: FaCheck,
  trophy: FaTrophy,
};

const data = [
  { title: "My Next Exam", icon: "exam", value: "13,456" },
  { title: "My Next Assignment", icon: "assignment", value: "4,145" },
  { title: "Study Clock Record", icon: "trophy", value: "745" },
  { title: "New customers", icon: "user", value: "188" },
] as const;

const Statistics = () => {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <Paper
        withBorder
        p="md"
        radius="md"
        key={stat.title}
        className="statisticsContainer statisticsText"
      >
        <Group justify="space-between">
          <Text size="xs">{stat.title}</Text>
          <Icon className="statisticsIcon" size="1.4rem" />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text fw={700}>{stat.value}</Text>
        </Group>

        <Text fz="xs" mt={7}>
          Compared to previous month
        </Text>
      </Paper>
    );
  });
  return (
    <div>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
    </div>
  );
};

export default Statistics;
