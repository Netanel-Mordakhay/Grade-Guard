import InDashboardBasicLayout from "../../layouts/InDashboardBasicLayout";
import AddCourseFilter from "./AddCourseFilter";
import CoursesList from "./CoursesList";

const Courses = () => {
  return (
    <InDashboardBasicLayout title="Courses">
      <CoursesList />
      <AddCourseFilter />
    </InDashboardBasicLayout>
  );
};

export default Courses;
