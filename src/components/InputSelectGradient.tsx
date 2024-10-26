import { SegmentedControl } from "@mantine/core";

const semester = [
  { label: "Semester A" },
  { label: "Semester B" },
  { label: "Semester C" },
  { label: "Semester D" },
];

const InputSelectGradient = () => {
  return (
    <SegmentedControl
      color="blue"
      data={semester.map((item) => ({ label: item.label, value: item.label }))}
    />
  );
};

export default InputSelectGradient;
