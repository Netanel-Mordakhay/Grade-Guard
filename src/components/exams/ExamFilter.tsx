import { Group, Select } from "@mantine/core";

const ExamFilter = () => {
  return (
    <Group>
      <Select
        label="Semester"
        placeholder="Filter Semester"
        data={[
          "Semester 1",
          "Semester 2",
          "Semester 3",
          "Semester 4",
          "Semester 5",
          "Semester 6",
        ]}
      />
      <Select
        label="Course"
        placeholder="Filter Course"
        data={[
          "Introduction to Computer Science in Python",
          "Data Structures",
          "Databases",
          "Advanced Topics In Programming",
          "Machine Learning",
          "Introduction to AI",
        ]}
      />
    </Group>
  );
};

export default ExamFilter;
