import { Stack } from "@mantine/core";
import GridCards from "./GridCards";
import Header from "../header/Header";

const Homepage = () => {
  return (
    <div style={{ flex: 1 }}>
      <Header />
      <GridCards></GridCards>
    </div>
  );
};

export default Homepage;
