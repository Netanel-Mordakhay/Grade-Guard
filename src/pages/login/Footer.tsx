import { Group, Text } from "@mantine/core";
import DisplayOptions from "../../components/DisplayOptions";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Group justify="space-between" c="dimmed">
      <DisplayOptions />
      <Group>
        <FaLinkedin /> <FaGithub />
        <Text visibleFrom="md">Netanel Mordakhay</Text>
      </Group>
    </Group>
  );
};

export default Footer;
