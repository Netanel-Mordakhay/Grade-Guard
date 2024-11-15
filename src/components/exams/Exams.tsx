import { Stack } from "@mantine/core";
import InDashboardBasicLayout from "../../layouts/InDashboardBasicLayout";
import ExamFilter from "./ExamFilter";
import ExamsList from "./ExamsList";
import AddExamForm from "./AddExamForm";

const Exams = () => {
  return (
    <InDashboardBasicLayout title="Exams">
      <Stack>
        <ExamFilter />
        <ExamsList />
      </Stack>
      <AddExamForm />
    </InDashboardBasicLayout>
  );
};

export default Exams;
