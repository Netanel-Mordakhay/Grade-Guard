import { Group } from "@mantine/core";
import LogoSmall from "../LogoSmall";
import { ReactNode } from "react";
import UserAvatar from "../UserAvatar";

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        {children}
        <LogoSmall />
      </Group>
      <Group>
        <UserAvatar />
      </Group>
    </Group>
  );
};

export default Header;
