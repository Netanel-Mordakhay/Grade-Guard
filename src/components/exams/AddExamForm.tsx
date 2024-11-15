import { Button, Select, TextInput } from "@mantine/core";
import React from "react";

const AddExamForm = () => {
  return (
    <>
      <TextInput label="Course name" placeholder="Course name" required />
      <Select
        label="Semester"
        placeholder="Pick semester"
        data={[
          "Semester 1",
          "Semester 2",
          "Semester 3",
          "Semester 4",
          "Semester 5",
          "Semester 6",
        ]}
        mt="md"
      />
      <Select
        label="Semester"
        placeholder="Pick semester"
        data={[
          "Introduction to Computer Science in Python",
          "Data Structures",
          "Databases",
          "Advanced Topics In Programming",
          "Machine Learning",
          "Introduction to AI",
        ]}
        mt="md"
      />
      <TextInput label="Credits" placeholder="Credits" required mt="md" />
      <TextInput label="Grade" placeholder="Grade" mt="md" />
      <Button fullWidth mt="md">
        Add
      </Button>
    </>
  );
};

export default AddExamForm;
