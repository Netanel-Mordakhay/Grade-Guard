import { Avatar, Text, Button } from "@mantine/core";
import InfoCard from "../InfoCard";

const user = {
  name: "Nati Mordakhay",
  email: "Mordakhay.Netanel@gmail.com",
};

const UserCard = () => {
  return (
    <InfoCard title={"Profile"}>
      <>
        <Avatar size={120} radius={120} mx="auto" />
        <Text ta="center" fz="lg" fw={500} mt="md">
          {user.name}
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          {user.email}
        </Text>

        <Button variant="filled" fullWidth mt="md">
          View Profile
        </Button>
      </>
    </InfoCard>
  );
};

export default UserCard;
