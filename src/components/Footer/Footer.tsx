import { Group } from "@mantine/core";
import DisplayOptions from "./DisplayOptions";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Group justify="space-between" p={10}>
      <DisplayOptions reverse={false} />
      <Copyright />
    </Group>
  );
};

export default Footer;
