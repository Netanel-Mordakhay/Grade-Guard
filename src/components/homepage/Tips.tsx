import { Text } from "@mantine/core";
import InfoCard from "../InfoCard";

const tips = [
  {
    id: 1,
    desc: `It might be tempting to leave all your studying for that big exam up until the last minute, but research suggests that cramming does not improve longer term learning. `,
  },
];

const Tips = () => {
  return (
    <InfoCard title="Tips">
      <Text>{tips[0].desc}</Text>
    </InfoCard>
  );
};

export default Tips;
