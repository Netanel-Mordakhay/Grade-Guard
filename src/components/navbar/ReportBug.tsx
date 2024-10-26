import { Button, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { FaBug } from "react-icons/fa";

const ReportBug = () => {
  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      className="statisticsContainer statisticsText"
    >
      <Stack ta="center" align="center">
        <Group>
          <Text fw="700">
            <FaBug /> Found a BUG?
          </Text>
        </Group>
        <Stack>
          <Divider />
          <Text>Report it now so we'll take care of it ASAP!</Text>
          <Button>REPORT</Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ReportBug;
