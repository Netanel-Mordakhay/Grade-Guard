import { Stack } from "@mantine/core";
import GridCards from "./GridCards";
import Statistics from "./Statistics";

const Homepage = () => {
  return (
    <Stack>
      <Statistics />
      <GridCards></GridCards>
    </Stack>
  );
};

export default Homepage;
