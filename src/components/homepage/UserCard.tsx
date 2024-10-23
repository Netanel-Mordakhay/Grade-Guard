import { Avatar, Text, Button } from "@mantine/core";
import defaultAvatar from "../../assets/img/defaultAvatar.webp";
import PaperCard from "../PaperCard";

const user = {
  name: "Nati Mordakhay",
  email: "Mordakhay.Netanel@gmail.com",
};

const UserCard = () => {
  return (
    <PaperCard>
      <>
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
      </>
    </PaperCard>
  );
};

export default UserCard;
