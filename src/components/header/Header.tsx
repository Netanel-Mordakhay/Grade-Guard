import { Group } from "@mantine/core";
import DisplayOptions from "../Footer/DisplayOptions";
import UserButton from "./UserButton";

const Header = () => {
  return (
    <Group justify="space-between" align="center">
      <UserButton />
      <DisplayOptions reverse={true} />
    </Group>
  );
};

export default Header;
