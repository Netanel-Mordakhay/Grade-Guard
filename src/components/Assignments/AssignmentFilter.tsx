import { Group, Select } from "@mantine/core";
import { statusData, courses } from "../../constants";

interface Props {
  currentCourse: string;
  setCurrentCourse: (course: string) => void;
  currentStatus: string;
  setCurrentStatus: (status: string) => void;
}

const AssignmentFilter = ({
  currentCourse,
  setCurrentCourse,
  currentStatus,
  setCurrentStatus,
}: Props) => {
  return (
    //navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
    <Group>
      <Select
        label="Course"
        placeholder="Filter Course"
        data={[{ label: "All", value: "All" }, ...courses]}
        value={currentCourse}
        onChange={(value) => setCurrentCourse(value || "All")}
      />
      <Select
        label="Status"
        placeholder="Filter Status"
        data={[{ label: "All", value: "All" }, ...statusData]}
        value={currentStatus}
        onChange={(value) => setCurrentStatus(value || "All")}
      />
    </Group>
  );
};

export default AssignmentFilter;
