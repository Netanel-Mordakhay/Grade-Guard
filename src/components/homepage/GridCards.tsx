import { Grid, Skeleton } from "@mantine/core";
import UserCard from "./UserCard";

const child = <Skeleton height={"30vh"} radius="md" animate={false} />;

const GridCards = () => {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <UserCard />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
      <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
      <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
      <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
    </Grid>
  );
};

export default GridCards;
