import { Grid } from "@mantine/core";
import InfoCard from "../InfoCard";
import PageBanner from "../PageBanner";
import AddAssignmentForm from "./AddAssignmentForm";
import AssignmentsList from "./AssignmentsList";

const Assignments = () => {
  return (
    <>
      <PageBanner title="Assignments"></PageBanner>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <InfoCard title="Assignments">
            <AssignmentsList />
          </InfoCard>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <AddAssignmentForm />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Assignments;
