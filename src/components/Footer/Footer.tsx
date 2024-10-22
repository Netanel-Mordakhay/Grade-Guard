import { Group } from "@mantine/core";
import DisplayOptions from "./DisplayOptions";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Group justify="space-between" p={10}>
      <DisplayOptions />
      <Copyright />
    </Group>
  );
};

export default Footer;
