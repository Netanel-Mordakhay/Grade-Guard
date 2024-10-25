import { AreaChart } from "@mantine/charts";
import InfoCard from "../InfoCard";
import { Button } from "@mantine/core";

export const data = [
  {
    date: "Sem. A",
    "Semester Average": 70.3,
    "Total Average": 70.3,
  },
  {
    date: "Sem. B",
    "Semester Average": 77.5,
    "Total Average": 73.9,
  },
  {
    date: "Sem. C",
    "Semester Average": 75.5,
    "Total Average": 74.4,
  },
  {
    date: "Sem. D",
    "Semester Average": 92.3,
    "Total Average": 78.9,
  },
  {
    date: "Sem. E",
    "Semester Average": 77.5,
    "Total Average": 78.6,
  },
];

const AvgGradeChart = () => {
  return (
    <InfoCard title="Grades History">
      <AreaChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: "Semester Average", color: "indigo.6" },
          { name: "Total Average", color: "teal.6" },
        ]}
        curveType="linear"
        tickLine="x"
        withLegend
        legendProps={{ verticalAlign: "top", height: 50 }}
      />
      <Button variant="filled" fullWidth mt="md">
        Anticipate My Grade
      </Button>
    </InfoCard>
  );
};

export default AvgGradeChart;
