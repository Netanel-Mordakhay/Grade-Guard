import { Button, NativeSelect, TextInput } from "@mantine/core";
import InfoCard from "../InfoCard";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import { courses } from "../../constants";
import { Assignment } from "../../types";

interface Props {
  addAssignment: (newAssignment: Assignment) => void;
}

const AddAssignmentForm = ({ addAssignment }: Props) => {
  const [assignmentName, setAssignmentName] = useState("");
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleAddAssignment = () => {
    if (!assignmentName) return;

    const newAssignment: Assignment = {
      id: Date.now(),
      name: assignmentName,
      course: selectedCourse || "Not Assigned",
      status: "In Progress",
      date: dateValue || undefined,
    };

    addAssignment(newAssignment);
    setAssignmentName("");
    setDateValue(null);
    setSelectedCourse("");
  };

  return (
    <>
      <TextInput
        label="Assignment name"
        placeholder="Assignment name"
        value={assignmentName}
        onChange={(e) => setAssignmentName(e.currentTarget.value)}
        required
      />
      <DateInput
        value={dateValue}
        onChange={setDateValue}
        label="Due date"
        placeholder="Due date"
        mt="md"
      />
      <NativeSelect
        label="Course"
        data={courses}
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.currentTarget.value)}
        mt="md"
      />
      <Button fullWidth mt="md" onClick={handleAddAssignment}>
        Add
      </Button>
    </>
  );
};

export default AddAssignmentForm;
