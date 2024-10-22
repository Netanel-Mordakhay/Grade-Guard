import { Group, Text } from "@mantine/core";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Copyright = () => {
  return (
    <Group>
      <FaLinkedin /> <FaGithub />
      <Text visibleFrom="sm">copyright text or something</Text>
    </Group>
  );
};

export default Copyright;
