import { Table, Stack, Select, ActionIcon, Group } from "@mantine/core";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { statusData } from "../../constants";
import AssignmentFilter from "./AssignmentFilter";
import { Assignment } from "../../types";

interface Props {
  assignments: Assignment[];
}

const AssignmentsList = ({ assignments }: Props) => {
  const [currentCourse, setCurrentCourse] = useState("All");
  const [currentStatus, setCurrentStatus] = useState("In Progress");

  const filteredAssignments = assignments.filter(
    (assignment) =>
      (currentCourse === "All" || assignment.course === currentCourse) &&
      (currentStatus === "All" || assignment.status === currentStatus)
  );

  const rows = filteredAssignments.map((assignment, index) => (
    <Table.Tr key={assignment.id}>
      <Table.Td>{assignment.name}</Table.Td>
      <Table.Td visibleFrom="md">{assignment.course}</Table.Td>
      <Table.Td visibleFrom="md">
        {assignment.date ? assignment.date.toLocaleDateString() : "None"}
      </Table.Td>
      <Table.Td visibleFrom="md">
        <Select
          data={statusData}
          defaultValue={assignment.status}
          variant="unstyled"
          allowDeselect={false}
        />
      </Table.Td>
      <Table.Td align="center">
        <ActionIcon>
          <MdDelete />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack justify="space-between">
      <AssignmentFilter
        currentCourse={currentCourse}
        setCurrentCourse={setCurrentCourse}
        currentStatus={currentStatus}
        setCurrentStatus={setCurrentStatus}
      />
      <Table striped highlightOnHover withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Assignment</Table.Th>
            <Table.Th visibleFrom="md">Course</Table.Th>
            <Table.Th visibleFrom="md">Due Date</Table.Th>
            <Table.Th visibleFrom="md">Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Stack>
  );
};

export default AssignmentsList;
