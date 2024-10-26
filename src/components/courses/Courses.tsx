import { Stack } from "@mantine/core";
import InfoCard from "../InfoCard";
import PageBanner from "../PageBanner";
import InputSelectGradient from "../InputSelectGradient";

const Courses = () => {
  return (
    <Stack justify="center">
      <PageBanner title="Courses"></PageBanner>
      <InfoCard title="Courses">
        <InputSelectGradient />
      </InfoCard>
    </Stack>
  );
};

export default Courses;
