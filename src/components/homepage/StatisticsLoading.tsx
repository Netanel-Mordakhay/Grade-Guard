import { SimpleGrid, Skeleton } from "@mantine/core";

const child = <Skeleton height={130} radius="md" animate={true} />;

const StatisticsLoading = () => {
  return (
    <div>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} visibleFrom="xs">
        {child}
        {child}
        {child}
        {child}
      </SimpleGrid>
    </div>
  );
};

export default StatisticsLoading;
