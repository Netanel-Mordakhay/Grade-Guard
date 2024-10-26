import { Table, Checkbox, Stack } from "@mantine/core";
import { useState } from "react";

const initialAssignments = [
  { id: 1, name: "Assignment 1", completed: true },
  { id: 2, name: "Assignment 2", completed: false },
  { id: 3, name: "Assignment 3", completed: false },
  { id: 4, name: "Assignment 4", completed: true },
  { id: 5, name: "Assignment 5", completed: true },
  { id: 6, name: "Assignment 6", completed: true },
  { id: 7, name: "Assignment 7", completed: false },
  { id: 8, name: "Assignment 8", completed: false },
  { id: 9, name: "Assignment 9", completed: true },
  { id: 10, name: "Assignment 10", completed: true },
  { id: 11, name: "Assignment 11", completed: true },
  { id: 12, name: "Assignment 12", completed: false },
  { id: 13, name: "Assignment 13", completed: false },
  { id: 14, name: "Assignment 14", completed: true },
  { id: 15, name: "Assignment 15", completed: true },
];

const AssignmentsList = () => {
  const [assignments, setAssignments] = useState(initialAssignments);

  const toggleAssignmentStatus = (index: number) => {
    const updatedAssignments = assignments.map((assignment, i) =>
      i === index
        ? { ...assignment, completed: !assignment.completed }
        : assignment
    );
    setAssignments(updatedAssignments);
  };

  const rows = assignments.map((assignment, index) => (
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
    <Stack justify="space-between">
      <Table striped highlightOnHover withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={20} />
            <Table.Th>Assignment</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Stack>
  );
};

export default AssignmentsList;
