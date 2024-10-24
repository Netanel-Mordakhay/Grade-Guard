import { Text, Button, RingProgress, Group, List } from "@mantine/core";
import InfoCard from "../InfoCard";

const Grades = {
  average: 81.32,
  totalCourses: 31,
  totalCredit: 103,
};

const GradesCard = () => {
  return (
    <InfoCard title={"Grade"}>
      <>
        <Group justify="center">
          <RingProgress
            sections={[{ value: 40, color: "blue" }]}
            label={
              <Text c="blue" fw={700} ta="center" size="xl">
                81.32
              </Text>
            }
          />
          <List>
            <List.Item>Average grade: {Grades.average}</List.Item>
            <List.Item>Total courses: {Grades.totalCourses}</List.Item>
            <List.Item>Total credit points: {Grades.totalCredit}</List.Item>
          </List>
        </Group>

        <Button variant="filled" fullWidth mt="md">
          View All
        </Button>
      </>
    </InfoCard>
  );
};

export default GradesCard;
