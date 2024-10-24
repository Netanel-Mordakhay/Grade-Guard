import { Button, Card, Text } from "@mantine/core";
import { FaBug } from "react-icons/fa";

const ReportBug = () => {
  return (
    <Card withBorder shadow="sm" radius="md" ta="center">
      <Card.Section withBorder inheritPadding py="xs">
        <Text>
          <FaBug /> Found a BUG?
        </Text>
      </Card.Section>

      <Card.Section p="lg">
        <Text>Report it now so we'll take care of it ASAP!</Text>
        <Button mt="sm">REPORT</Button>
      </Card.Section>
    </Card>
  );
};

export default ReportBug;
