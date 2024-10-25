import {
  Text,
  SimpleGrid,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { FaFacebookSquare } from "react-icons/fa";
import {
  MdAssignmentAdd,
  MdQuiz,
  MdSettings,
  MdGrade,
  MdNotifications,
} from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import { TiUserAdd } from "react-icons/ti";
import { PiExamFill } from "react-icons/pi";
import InfoCard from "../InfoCard";

const mockdata = [
  { title: "Add course", icon: BiSolidBookAdd, color: "violet" },
  { title: "Add assignment", icon: MdAssignmentAdd, color: "indigo" },
  { title: "Add exam", icon: PiExamFill, color: "orange" },
  { title: "New trivia", icon: MdQuiz, color: "green" },
  { title: "Add friend", icon: TiUserAdd, color: "teal" },
  { title: "Settings", icon: MdSettings, color: "cyan" },
  { title: "Anticipate my grade", icon: MdGrade, color: "pink" },
  { title: "Notifications", icon: MdNotifications, color: "red" },
  { title: "Follow on Facebook", icon: FaFacebookSquare, color: "blue" },
];

const QuickActions = () => {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className="quickItem">
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <InfoCard title="Quick Actions">
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </InfoCard>
  );
};

export default QuickActions;
