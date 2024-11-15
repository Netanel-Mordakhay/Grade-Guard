import InDashboardBasicLayout from "../../layouts/InDashboardBasicLayout";
import AddCourseForm from "./AddCourseForm";
import CoursesList from "./CoursesList";
import { initialCourses } from "../../constants";
import { Course } from "../../types";
import { useState } from "react";
import { Stack } from "@mantine/core";
import CourseFilter from "./CourseFilter";

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  return (
    <InDashboardBasicLayout title="Courses">
      <Stack>
        <CourseFilter />
        <CoursesList courses={courses} />
      </Stack>
      <AddCourseForm />
    </InDashboardBasicLayout>
  );
};

export default Courses;
