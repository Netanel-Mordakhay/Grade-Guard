import { Avatar, Text, Button, Group } from "@mantine/core";
import InfoCard from "../InfoCard";

const user = {
  name: "Nati Mordakhay",
  email: "Mordakhay.Netanel@gmail.com",
};

const UserCard = () => {
  return (
    <InfoCard title={"Profile"}>
      <>
        <Group justify="center">
          <Avatar size={120} radius={120} />
          <div>
            <Text fz="lg" fw={500} mt="md">
              {user.name}
            </Text>
            <Text c="dimmed" fz="sm">
              {user.email}
            </Text>
          </div>
        </Group>

        <Button variant="filled" fullWidth mt="md">
          View Profile
        </Button>
      </>
    </InfoCard>
  );
};

export default UserCard;
