import { UnstyledButton, Group, Avatar, Title, Text } from "@mantine/core";
import classes from "../../styles/global.module.css";
import defaultIcon from "../../assets/img/defaultIcon.webp";

const user = {
  name: "Nati Mordakhay",
  email: "Mordakhay.Netanel@gmail.com",
};

const UserButton = () => {
  return (
    <UnstyledButton className={classes.userButton}>
      <Group>
        <Avatar src={defaultIcon} radius="xl" color="blue" />
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {user.name}
          </Text>

          <Text c="dimmed" size="xs">
            {user.email}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
};

export default UserButton;
