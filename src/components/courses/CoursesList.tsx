import { Stack, Table } from "@mantine/core";
import { initialCourses } from "../../constants";

const CoursesList = () => {
  const filteredCourses = initialCourses;

  const rows = filteredCourses.map((course) => (
    <Table.Tr key={course.id}>
      <Table.Td>{course.name}</Table.Td>
      <Table.Td visibleFrom="md">{course.semester}</Table.Td>
      <Table.Td visibleFrom="md">{course.credits}</Table.Td>
      <Table.Td visibleFrom="md">{course.grade}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack justify="space-between">
      <Table striped highlightOnHover withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Course</Table.Th>
            <Table.Th visibleFrom="md">Semester</Table.Th>
            <Table.Th visibleFrom="md">Credits</Table.Th>
            <Table.Th visibleFrom="md">Grade</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Stack>
  );
};

export default CoursesList;
