import { Group, Select } from "@mantine/core";

const CourseFilter = () => {
  return (
    <Group>
      <Select
        label="Semester"
        placeholder="Filter Course"
        data={[
          "Semester 1",
          "Semester 2",
          "Semester 3",
          "Semester 4",
          "Semester 5",
          "Semester 6",
        ]}
      />
    </Group>
  );
};

export default CourseFilter;
