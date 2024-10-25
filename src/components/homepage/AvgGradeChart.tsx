import { AreaChart } from "@mantine/charts";
import InfoCard from "../InfoCard";

export const data = [
  {
    date: "Sem. A",
    Average: 70.3,
  },
  {
    date: "Sem. B",
    Average: 77.5,
  },
  {
    date: "Sem. C",
    Average: 75.5,
  },
  {
    date: "Sem. D",
    Average: 92.3,
  },
  {
    date: "Sem. E",
    Average: 77.5,
  },
];

const AvgGradeChart = () => {
  return (
    <InfoCard title="Grades History">
      <AreaChart
        h={300}
        data={data}
        dataKey="date"
        series={[{ name: "Average", color: "indigo.6" }]}
        curveType="linear"
        tickLine="x"
      />
    </InfoCard>
  );
};

export default AvgGradeChart;
