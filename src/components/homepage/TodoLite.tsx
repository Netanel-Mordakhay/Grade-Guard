import { Table, Checkbox, Button, Stack } from "@mantine/core";
import InfoCard from "../InfoCard";
import { useState } from "react";

const initialAssignments = [
  { id: 1, name: "Assignment 1", completed: true },
  { id: 2, name: "Assignment 2", completed: false },
  { id: 3, name: "Assignment 3", completed: false },
  { id: 4, name: "Assignment 4", completed: true },
  { id: 5, name: "Assignment 5", completed: true },
];

const TodoLite = () => {
  const [assignments, setAssignments] = useState(initialAssignments);

  const toggleAssignmentStatus = (index: number) => {
    const updatedAssignments = assignments.map((assignment, i) =>
      i === index
        ? { ...assignment, completed: !assignment.completed }
        : assignment
    );
    setAssignments(updatedAssignments);
  };

  const rows = assignments.slice(0, 5).map((assignment, index) => (
    <Table.Tr key={assignment.id}>
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={assignment.completed}
          onChange={() => toggleAssignmentStatus(index)}
        />
      </Table.Td>
      <Table.Td>{assignment.name}</Table.Td>
    </Table.Tr>
  ));

  return (
    <InfoCard title={"Latest Assignments"}>
      <Stack justify="space-between">
        <Table striped highlightOnHover withRowBorders={false}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Status</Table.Th>
              <Table.Th>Assignment</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        <Button variant="filled" fullWidth mt="md">
          View All
        </Button>
      </Stack>
    </InfoCard>
  );
};

export default TodoLite;
