import { Avatar, Text, Button, Paper } from "@mantine/core";
import defaultAvatar from "../../assets/img/defaultAvatar.webp";

const user = {
  name: "Nati Mordakhay",
  email: "Mordakhay.Netanel@gmail.com",
};

const UserCard = () => {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar src={defaultAvatar} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {user.name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {user.email}
      </Text>

      <Button variant="default" fullWidth mt="md">
        View Profile
      </Button>
    </Paper>
  );
};

export default UserCard;
