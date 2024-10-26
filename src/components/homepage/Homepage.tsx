import { Stack } from "@mantine/core";
import GridCards from "./GridCards";
import Statistics from "./Statistics";
import { useEffect, useState } from "react";
import GridCardsLoading from "./GridCardsLoading";
import StatisticsLoading from "./StatisticsLoading";

const Homepage = () => {
  // Loadiing hooks
  const [loadingGrid, setLoadingGrid] = useState(true);
  const [loadingStats, setLoadingStats] = useState(true);

  // Placeholders, will be replaced later with API
  useEffect(() => {
    setTimeout(() => setLoadingGrid(false), 500); // דמיין טעינה עבור GridCards
    setTimeout(() => setLoadingStats(false), 1000); // דמיין טעינה עבור Statistics
  }, []);

  const allLoaded = !loadingGrid && !loadingStats;

  return (
    <Stack>
      {allLoaded ? (
        <>
          <Statistics />
          <GridCards></GridCards>
        </>
      ) : (
        <>
          <StatisticsLoading />
          <GridCardsLoading />
        </>
      )}
    </Stack>
  );
};

export default Homepage;
