import { useState } from "react";
import Homepage from "../components/homepage/Homepage";
import DashboardLayout from "../layouts/DashboardLayout";
import Courses from "../components/courses/Courses";
import Exams from "../components/exams/Exams";
import Assignments from "../components/Assignments/Assignments";

const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState("Homepage");

  // Renders current page based on useState
  const renderPage = () => {
    switch (currentPage) {
      case "Courses":
        return <Courses />;
      case "Exams":
        return <Exams />;
      case "Assignments":
        return <Assignments />;
      case "Homepage":
      default:
        return <Homepage />;
    }
  };

  return (
    <DashboardLayout setCurrentPage={setCurrentPage}>
      <div className="animate__animated animate__fadeIn" key={currentPage}>
        {renderPage()}
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
