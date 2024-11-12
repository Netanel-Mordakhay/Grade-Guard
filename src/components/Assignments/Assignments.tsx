import { Grid } from "@mantine/core";
import InfoCard from "../InfoCard";
import PageBanner from "../PageBanner";
import AddAssignmentForm from "./AddAssignmentForm";
import AssignmentsList from "./AssignmentsList";
import { useState } from "react";
import { Assignment } from "../../types";
import { initialAssignments } from "../../constants";

const Assignments = () => {
  const [assignments, setAssignments] =
    useState<Assignment[]>(initialAssignments);

  const addAssignment = (newAssignment: Assignment) => {
    setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);
  };

  return (
    <>
      <PageBanner title="Assignments"></PageBanner>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <InfoCard title="Assignments">
            <AssignmentsList assignments={assignments} />
          </InfoCard>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <AddAssignmentForm addAssignment={addAssignment} />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Assignments;
