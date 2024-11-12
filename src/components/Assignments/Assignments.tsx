import AddAssignmentForm from "./AddAssignmentForm";
import AssignmentsList from "./AssignmentsList";
import { useState } from "react";
import { Assignment } from "../../types";
import { initialAssignments } from "../../constants";
import InDashboardBasicLayout from "../../layouts/InDashboardBasicLayout";

const Assignments = () => {
  const [assignments, setAssignments] =
    useState<Assignment[]>(initialAssignments);

  const addAssignment = (newAssignment: Assignment) => {
    setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);
  };

  return (
    <InDashboardBasicLayout title="Assignments">
      <AssignmentsList assignments={assignments} />
      <AddAssignmentForm addAssignment={addAssignment} />
    </InDashboardBasicLayout>
  );
};

export default Assignments;
